import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../../services/CustomerService";
import { Calendar } from "primereact/calendar";
import { useResizeListener } from "primereact/hooks";
import { Skeleton } from "primereact/skeleton";
import getBrinkSite from "./constants";
import { ContextMenu } from "primereact/contextmenu";
import { Toast } from "primereact/toast";

export default function DataTableNewSave(props) {
  const { dataForTable, filter, mode, allData, onRefresh, filter2, filter3, filter4 } = props;
//   console.log("allData DataTableNewSave", allData);
//   console.log("filter4 filter4", filter4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      name: { value: "", matchMode: "contains" },
      "country.name": { value: "", matchMode: "contains" },
      company: { value: "", matchMode: "contains" },
      "representative.name": { value: "", matchMode: "contains" },
      date: { value: "", matchMode: "contains" },
    },
  });
  const toast = useRef(null);
  const cm = useRef(null);

  const menuModel = [
    {
      label: "Edit",
      icon: "pi pi-fw pi-file-edit",
    //   command: () => viewProduct(selectedProduct),
    },
    {
      label: "Disable",
      icon: "pi pi-times",
    //   command: () => viewProduct(selectedProduct),
    },
    {
      label: "Change Customer",
      icon: "pi pi-fw pi-reply",
    //   command: () => viewProduct(selectedProduct),
    },
    // { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
  ];

  const viewProduct = (product) => {
    toast.current.show({
      severity: "info",
      summary: "Product Selected",
      detail: product.locationName,
    });
  };

  const [eventData, setEventData] = useState({ width: 0, height: 0 });
  const [heightNav, setHeightNav] = useState({ height: 0 });
  const [heightCardContent, setHeighCardContent] = useState({ height: 0 });
  const [heightContent, setHeightContent] = useState({ height: 0 });
  const [heightContent2, setHeightContent2] = useState({ height: 0 });
  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: (event) => {
        setEventData({
          width: event.currentTarget.innerWidth,
          height: event.currentTarget.innerHeight,
        });
      },
    });

  useEffect(() => {
    setEventData({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    bindWindowResizeListener();
    // setLoadingDone(false)

    return () => {
      unbindWindowResizeListener();
      // setLoadingDone(true)
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);

  useEffect(() => {
    const element2 = document.getElementById("mainPageCuslo");
    if (element2) {
      const height2 = element2.offsetHeight;
      setHeighCardContent({ height: height2 });
    }
  }, [heightNav.height, eventData.height]);

  let networkTimeout = null;

  useEffect(() => {
    loadLazyData();
  }, [lazyState, eventData.height]);

  const loadLazyData = () => {
    setLoading(true);
    setLoadingDone(false);

    if (networkTimeout) {
      clearTimeout(networkTimeout);
    }

    //imitate delay of a backend call
    networkTimeout = setTimeout(() => {
      CustomerService.getCustomers({
        lazyEvent: JSON.stringify(lazyState),
      }).then((data) => {
        setTotalRecords(data.totalRecords);
        setCustomers(data.customers);
        setLoading(false);
        setLoadingDone(true);
      });
    }, Math.random() * 1000 + 250);
  };

  useEffect(() => {
    const element3 = document?.querySelector(".p-datatable-table");
    const element2 = document?.querySelector(".p-datatable");
    const element = document?.querySelector(".p-datatable-wrapper");
    const element4 = document?.querySelector(".p-datatable-tbody");
    // const elementEmpty = document?.querySelector(".p-datatable-tbody > .p-datatable-emptymessage");
    if (loadingDone) {
      const newHeight = element.offsetHeight;
      // console.log('newHeight', newHeight)
      const newHeight2 = element2.offsetHeight;
      const newHeight3 = element3.offsetHeight;
      const newHeight4 = element4.offsetHeight;
    const elementEmpty = document?.querySelector("#emptyData");

    //   console.log('element3', element3)
    //   console.log('newHeight3', newHeight3)
    //   console.log('element4', element4)
    //   console.log('newHeight4', newHeight4)
      setHeightContent({ height: newHeight });
      // console.log('heightCardContent', heightCardContent.height)
      // element.style.maxHeight = `${newHeight - 480}px`;
      if (mode) {
        element.style.maxHeight = `${heightCardContent.height - 107}px`;
        element.style.height = `${heightCardContent.height - 107}px`;
        // if (elementEmpty !== null) {
        //     elementEmpty.style.height = `${heightCardContent.height - 102}px`;
        // }
        setHeightContent2({ height: `${heightCardContent.height - 230}`})
      } else {
        element.style.maxHeight = `${heightCardContent.height - 295}px`;
        element.style.height = `${heightCardContent.height - 295}px`;
        // if (elementEmpty !== null) {
        //     elementEmpty.style.height = `${heightCardContent.height - 287}px`;
        // }
        setHeightContent2({ height: `${heightCardContent.height - 412}`})
        // element4.style.height = `${heightCardContent.height - 480}px`;
      }
    }
  }, [eventData.height, loadingDone, mode]);

  const onPage = (event) => {
    setlazyState(event);
  };

  const onSort = (event) => {
    setlazyState(event);
  };

  const onFilter = (event) => {
    event["first"] = 0;
    setlazyState(event);
  };

  const onSelectionChange = (event) => {
    const value = event.value;

    setSelectedCustomers(value);
    setSelectAll(value.length === totalRecords);
  };

  const onSelectAllChange = (event) => {
    const selectAll = event.checked;

    if (selectAll) {
      CustomerService.getCustomers().then((data) => {
        setSelectAll(true);
        setSelectedCustomers(data.customers);
      });
    } else {
      setSelectAll(false);
      setSelectedCustomers([]);
    }
  };

  const representativeBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={rowData.representative.name}
          src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`}
          width={32}
        />
        <span>{rowData.representative.name}</span>
      </div>
    );
  };

  const countryBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt="flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${rowData.country.code}`}
          style={{ width: "24px" }}
        />
        <span>{rowData.country.name}</span>
      </div>
    );
  };

  const formatDate = (value) => {
    return value?.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateBodyTemplate = (rowData) => {
    // console.log("rowData", rowData);
    return rowData;
    // return formatDate(rowData);
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="yyyy/mm/dd"
        placeholder="yyyy/mm/dd"
        mask="9999/99/99"
      />
    );
  };

  const loadingTemplate = (options) => {
    return (
      <div
        className="flex align-items-center"
        style={{ height: "17px", flexGrow: "1", overflow: "hidden" }}
      >
        <Skeleton
          width={
            options.cellEven
              ? options.field === "year"
                ? "30%"
                : "40%"
              : "60%"
          }
          height="1rem"
        />
      </div>
    );
  };

  const items = Array.from({ length: 17 }, (v, i) => i);

  // New

  const actionBodyTemplate = (rowData) => {
    // console.log("rowData", rowData);
    let itemsMenu = [
      {
        label: "File",
        icon: "pi pi-file",
        command: () => {
          console.log(rowData);
        },
      },
      {
        label: "action",
        icon: "pi pi-user",
        command: () => {
          console.log(rowData);
        },
      },
    ];
    return (
      <>
        <span
          className="pi pi-bars"
        //   onClick={(e) => menu.current.toggle(e)}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
      </>
    );
  };

//   console.log("filter", filter);

  const LobData = [
    {
      id: "1",
      name: "CIT",
    },
    {
      id: "2",
      name: "ATM",
    },
  ];
  const serviceTypeData = [
    {
      id: "1",
      name: "Pick Up",
    },
    {
      id: "2",
      name: "Delivery",
    },
  ];
  const dayOfWeekData = [
    {
      id: "1",
      name: "Monday",
    },
    {
      id: "2",
      name: "Tuesday",
    },
  ];
  const routeGroupData = [
    {
      id: "1",
      name: "R3072",
    },
    {
      id: "2",
      name: "Route 66",
    },
  ];

  function getBrinksMiniMain() {
    return Promise.resolve(getBrinkSite.getBrinkDataMain());
    // return Promise.resolve(getBrinkSite.getBrinkData().slice(0, 5));
  }
  function getBrinksMini() {
    return Promise.resolve(getBrinkSite.getBrinkData());
    // return Promise.resolve(getBrinkSite.getBrinkData().slice(0, 5));
  }

  const [brinkDataAll, setBrinkDataAll] = useState([]);

  //   useEffect(() => {
  //     setBrinkDataAll(dataForTable);
  //   }, [dataForTable]);

//   useEffect(() => {
//     if (filter !== undefined) {
//       const filteredData = brinkDataAll?.filter(
//         (item) => item.serviceType === filter.name
//       );
//       setBrinkDataAll(filteredData);
//     } else {
//         LoadDataTest()
//     }
//   }, [filter, filter2]);



useEffect(() => {
    // ตรวจสอบว่า filter, filter2, filter3, หรือ filter4 มีค่าและไม่เป็น undefined
    if ((filter && filter.name) || (filter2 && filter2.name) || (filter3 && filter3.name)) {
        // กรองข้อมูลโดยใช้ filter, filter2, filter3, และ filter4 หากมีค่า
        const filteredData = brinkDataAll?.filter((item) => {
            // ตรวจสอบ filter, filter2, filter3, และ filter4 และกรองข้อมูลในแต่ละฟิลด์
            const filterCondition = 
                (!filter || !filter.name || item.serviceType === filter.name) &&
                (!filter2 || !filter2.name || item.provinceState === filter2.name) &&
                (!filter3 || !filter3.name || item.districtCity === filter3.name)
            return filterCondition;
        });
        setBrinkDataAll(filteredData);
    } else {
        // ถ้า filter, filter2, filter3, หรือ filter4 ไม่มีค่าหรือเป็น undefined ให้โหลดข้อมูลเริ่มต้น
        LoadDataTest();
    }
}, [filter, filter2, filter3]);



//   useEffect(() => {
    useEffect(()=> {
        LoadDataTest()
    }, [onRefresh])

function LoadDataTest() {
    setLoading(true);
    setLoadingDone(false);

    if (networkTimeout) {
      clearTimeout(networkTimeout);
    }

    // console.log("dataForTable", dataForTable);
    // if (dataForTable?.length > 0) {
    //     setBrinkDataAll(allData.tab4);
    // } else {

    // CustomerService.getCustomers({
    //   lazyEvent: JSON.stringify(lazyState),
    // }).then((data) => {
    //   setTotalRecords(data.totalRecords);
    //   setCustomers(data.customers);
    //   setLoading(false);
    //   setLoadingDone(true);
    // });

    networkTimeout = setTimeout(() => {
    //   console.log("dataForTable", dataForTable);
    //   console.log("brinkDataAll", brinkDataAll);
    //   console.log("allData?.tab4 333", allData?.tab4);

    //   if (allData?.tab4?.length > 0) {
    //     const newData = brinkDataAll.unshift(allData?.tab4)
    //     setBrinkDataAll(newData);
    //     // setBrinkDataAll(allData?.tab4);
    //     setLoading(false);
    //     setLoadingDone(true);
    //   } else {
        getBrinksMiniMain().then((data) => {
            // console.log('data 444', data)
            setBrinkDataAll(data);
            if (allData?.tab4?.length > 0) {
                const newData = [ ...allData.tab4, ...data ];
                setBrinkDataAll(newData);
                // const newData = data?.unshift(allData?.tab4)
                // setBrinkDataAll(newData);
            }

        //   setBrinkDataAll(prevData => {
        //     const newData = [...data];
        //     newData?.unshift(...prevData?.tab4);
        //     return { ...prevData, tab4: newData };
        // });

          setLoading(false);
          setLoadingDone(true);
        });
    //   }
    }, Math.random() * 1000 + 250);
    // }
    // getBrinksMini().then((data) => setProducts1(data));
    // ProductService.getProductsMini().then((data) => setProducts(data));
//   }, []);
}

  //   return (
  //     <>
  //       {!loading ? (
  //         <DataTable
  //           size="small"
  //           className=""
  //           // scrollHeight={`400px`}
  //           // scrollHeight={`${heightContent.height}px`}
  //           // scrollHeight={`${heightContent.height - 360}px`}
  //           tableStyle={{ minWidth: "75rem", height: "5rem" }}
  //           scrollable
  //           resizableColumns
  //           value={customers}
  //           lazy
  //           filterDisplay="row"
  //           dataKey="id"
  //           paginator
  //           rowsPerPageOptions={[10, 25, 50]}
  //           first={lazyState.first}
  //           rows={10}
  //           totalRecords={totalRecords}
  //           onPage={onPage}
  //           onSort={onSort}
  //           sortField={lazyState.sortField}
  //           sortOrder={lazyState.sortOrder}
  //           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
  //           onFilter={onFilter}
  //           filters={lazyState.filters}
  //           loading={loading}
  //           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
  //           selection={selectedCustomers}
  //           onSelectionChange={onSelectionChange}
  //           selectAll={selectAll}
  //           onSelectAllChange={onSelectAllChange}
  //           // virtualScrollerOptions={{ lazy: true, itemSize: 46, delay: 200, showLoader: true, loadingTemplate }}
  //         >
  //           <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
  //           <Column
  //             field="name"
  //             header="Name"
  //             sortable
  //             filter
  //             filterPlaceholder="Search"
  //           />
  //           <Column
  //             field="country.name"
  //             sortable
  //             header="Country"
  //             filterField="country.name"
  //             body={countryBodyTemplate}
  //             filter
  //             filterPlaceholder="Search"
  //           />
  //           <Column
  //             field="company"
  //             sortable
  //             filter
  //             header="Company"
  //             filterPlaceholder="Search"
  //           />
  //           <Column
  //             field="representative.name"
  //             header="Representative"
  //             body={representativeBodyTemplate}
  //             filter
  //             filterPlaceholder="Search"
  //           />
  //           <Column
  //             field="date"
  //             header="Date"
  //             sortable
  //             filter
  //             filterPlaceholder="Search"
  //             filterField="date"
  //             // body={dateBodyTemplate}
  //             dataType="date"
  //             // filterElement={dateFilterTemplate}
  //           />
  //         </DataTable>
  //       ) : (
  //         <DataTable value={items} className="p-datatable-striped">
  //           <Column
  //             field="name"
  //             header="Name"
  //             style={{ width: "20%" }}
  //             body={<Skeleton />}
  //           ></Column>
  //           <Column
  //             field="country.name"
  //             header="Country"
  //             style={{ width: "20%" }}
  //             body={<Skeleton />}
  //           ></Column>
  //           <Column
  //             field="company"
  //             header="Company"
  //             style={{ width: "20%" }}
  //             body={<Skeleton />}
  //           ></Column>
  //           <Column
  //             field="representative"
  //             header="Representative"
  //             style={{ width: "20%" }}
  //             body={<Skeleton />}
  //           ></Column>
  //           <Column
  //             field="date"
  //             header="Date"
  //             style={{ width: "20%" }}
  //             body={<Skeleton />}
  //           ></Column>
  //         </DataTable>
  //       )}
  //     </>
  //   );

  const headerssss = (
    <div id="emptyData" className="flex align-items-center justify-content-center" style={{ height: `${heightContent2?.height}px` }}>
        <span className="text-900 text-center">No results found.</span>
    </div>
);

  return (
    <>
      {!loading ? (
        <>
          <Toast ref={toast} />

          <ContextMenu
            model={menuModel}
            ref={cm}
            onHide={() => setSelectedProduct(null)}
            className="w-13rem"
          />
          <DataTable
            onContextMenu={(e) => cm.current.show(e.originalEvent)}
            contextMenuSelection={selectedProduct}
            onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
            value={brinkDataAll}
            filterDisplay="row"
            stripedRows
            showGridlines
            size="small"
            tableStyle={{ minWidth: "75rem", height: "5rem",}}
            scrollable
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            paginatorClassName="py-0"
            emptyMessage={headerssss}
            //   onFilter={onFilter}
            //   filters={lazyState.filters}
            rowsPerPageOptions={[5, 10, 20, 50]}
            first={lazyState.first}
            rows={20}
            loading={loading}
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            id="gridMainCuslo"
            style={{ width: "100%"}}
          >
            {/* <Column
              field=""
              header=""
              style={{ width: "3%" }}
              body={actionBodyTemplate}
            ></Column> */}
            <Column
              field="locationCode"
              header="Location Code"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '150px' }}
            ></Column>
            <Column
              field="locationName"
              header="Location Name"
              filter
              showFilterMenu={false}
              style={{ width: "25%", minWidth: '300px' }}
            ></Column>
            <Column
              field="provinceState"
              header="Province/State"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '100px' }}
            ></Column>
            <Column
              field="districtCity"
              header="District/City"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '100px' }}
            ></Column>
            <Column
              field="postalCode"
              header="Postal Code"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '120px' }}
            ></Column>
            <Column
              field="serviceType"
              header="Service Type"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '120px' }}
            ></Column>
            <Column
              field="userCreated"
              header="user Created"
              filter
              showFilterMenu={false}
              style={{ width: "10%", minWidth: '120px' }}
            ></Column>
            <Column
              field="dtCreated"
              header="Datetime Created"
              filter
              showFilterMenu={false}
              style={{ width: "15%", minWidth: '160px' }}
            ></Column>
            <Column
              field="userModified"
              header="User Modified"
              filter
              showFilterMenu={false}
              style={{ width: "18%", minWidth: '130px'}}
            ></Column>
            <Column
              field="dtModified"
              header="Datetime Modified"
              filter
              showFilterMenu={false}
              style={{ width: "25%", minWidth: '170px' }}
            ></Column>
          </DataTable>
        </>
      ) : (
        <DataTable size="medium" value={items} className="p-datatable-striped">
          <Column
            field="name"
            header="Name"
            style={{ width: "20%" }}
            body={<Skeleton />}
          ></Column>
          <Column
            field="country.name"
            header="Country"
            style={{ width: "20%" }}
            body={<Skeleton />}
          ></Column>
          <Column
            field="company"
            header="Company"
            style={{ width: "20%" }}
            body={<Skeleton />}
          ></Column>
          <Column
            field="representative"
            header="Representative"
            style={{ width: "20%" }}
            body={<Skeleton />}
          ></Column>
          <Column
            field="date"
            header="Date"
            style={{ width: "20%" }}
            body={<Skeleton />}
          ></Column>
        </DataTable>
      )}
    </>
  );
}
