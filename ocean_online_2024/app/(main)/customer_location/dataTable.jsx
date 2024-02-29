import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../services/CustomerService";
import { Calendar } from "primereact/calendar";
import { useResizeListener } from "primereact/hooks";
import { Skeleton } from "primereact/skeleton";

export default function DataTableLazyLoadDemo(props) {
  const { mode } = props;
  console.log('mode', mode)
  const [loadingDone, setLoadingDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 20,
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

  const [eventData, setEventData] = useState({ width: 0, height: 0 });
  const [heightNav, setHeightNav] = useState({ height: 0 });
  const [heightCardContent, setHeighCardContent] = useState({ height: 0 });
  const [heightContent, setHeightContent] = useState({ height: 0 });

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
    const element2 = document?.querySelector(".p-datatable");
    const element = document?.querySelector(".p-datatable-wrapper");
    if (loadingDone) {
      const newHeight = element.offsetHeight;
      // console.log('newHeight', newHeight)
      const newHeight2 = element2.offsetHeight;
      setHeightContent({ height: newHeight });
      // console.log('heightCardContent', heightCardContent.height)
      // element.style.maxHeight = `${newHeight - 480}px`;
      if (mode ){
        element.style.maxHeight = `${heightCardContent.height - 130}px`;

      } else {
        element.style.maxHeight = `${heightCardContent.height - 420}px`;

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

  const items = Array.from({ length: 20 }, (v, i) => i);

  return (
    <>
      {!loading ? (
        <DataTable
          size="small"
          className=""
          // scrollHeight={`400px`}
          // scrollHeight={`${heightContent.height}px`}
          // scrollHeight={`${heightContent.height - 360}px`}
          tableStyle={{ minWidth: "75rem", height: "5rem" }}
          scrollable
          resizableColumns
          value={customers}
          lazy
          filterDisplay="row"
          dataKey="id"
          paginator
          rowsPerPageOptions={[10, 20, 50]}
          first={lazyState.first}
          rows={20}
          totalRecords={totalRecords}
          onPage={onPage}
          onSort={onSort}
          sortField={lazyState.sortField}
          sortOrder={lazyState.sortOrder}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          onFilter={onFilter}
          filters={lazyState.filters}
          loading={loading}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          selection={selectedCustomers}
          onSelectionChange={onSelectionChange}
          selectAll={selectAll}
          onSelectAllChange={onSelectAllChange}
          // virtualScrollerOptions={{ lazy: true, itemSize: 46, delay: 200, showLoader: true, loadingTemplate }}
        >
          <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          showFilterMenu={false}

          />
          <Column
            field="country.name"
            sortable
            header="Country"
            filterField="country.name"
            body={countryBodyTemplate}
            filter
            filterPlaceholder="Search"
          showFilterMenu={false}

          />
          <Column
            field="company"
            sortable
            filter
            header="Company"
            filterPlaceholder="Search"
          showFilterMenu={false}

          />
          <Column
            field="representative.name"
            header="Representative"
            body={representativeBodyTemplate}
            filter
            filterPlaceholder="Search"
          showFilterMenu={false}

          />
          <Column
            field="date"
            header="Date"
            sortable
            filter
            filterPlaceholder="Search"
            filterField="date"
            // body={dateBodyTemplate}
            dataType="date"
          showFilterMenu={false}

            // filterElement={dateFilterTemplate}
          />
        </DataTable>
      ) : (
        <DataTable value={items} className="p-datatable-striped">
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
