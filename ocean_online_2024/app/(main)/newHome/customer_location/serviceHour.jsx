import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { ProductService } from "../../../services/ProductService";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { useLocalStorage } from 'primereact/hooks';
import { Divider } from "primereact/divider";

import { useResizeListener } from "primereact/hooks";

export default function ServiceHour(props) {
    const { onClickNew, setAllData, allData } = props;
  const [eventData, setEventData] = useState({ width: 0, height: 0 });
  const [heightNav, setHeightNav] = useState({ height: 0 });
  const [heightCardContent, setHeighCardContent] = useState({ height: 0 });
  const [heightContent, setHeightContent] = useState({ height: 0 });

  console.log("heightCardContent", heightCardContent);

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
    const element2 = document.querySelector(".p-tabview-panel");
    const body = document.getElementById("bodyMain");
    if (element2) {
      const height2 = element2.offsetHeight;
      setHeighCardContent({ height: height2 });
      body.style.overflowY = "hidden";
    }
  }, [heightNav.height, eventData.height]);

  let emptyProduct = {
    id: null,
    name: "",
    lob: "",
    serviceType: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    spotTime: false,
    routeGroup: "",
  };
  const [editMode, setEditMode] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useLocalStorage([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [newProducts, setNewProducts] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedProducts1, setSelectedProducts1] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [productDialog, setProductDialog] = useState(false);
  const [productDialogEdit, setProductDialogEdit] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lob, setLob] = useState(null);
  const [serviceHour, setServiceHour] = useState(null);
  const [dow, setDow] = useState(null);
  const [rg, setRG] = useState(null);
  const [stTime, setSttime] = useState("");
  const [edTime, setEdtime] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [checked, setChecked] = useState(false);
  const [time, setTime] = useState(null);
  const [time2, setTime2] = useState(null);

  console.log("product", product);
  console.log("allData", allData);

  // useEffect(() => {
  //   setBrinks(NewDataBrink[0]);
  //   setCountry(NewData[0]);
  //   setCountry(NewData[0]);
  //   setCountry(NewData[0]);
  //   setCountry(NewData[0]);
  // }, []);

  //   console.log('selectedProducts1', selectedProducts1)
  // console.log('product', product)
  console.log("lob", lob);

//   useEffect(() => {
//     setAllData([{
//         tab4: products
//     }])
//   }, [productDialog])

  const getBrinkSite = {
    getBrinkData() {
      return [
        {
          id: "2",
          name: "Brink Thailand 2",
          lob: "CIT",
          serviceType: "Pick Up",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
        },
        {
          id: "3",
          name: "Brink Thailand 2",
          lob: "CIT",
          serviceType: "Pick Up",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
        },
      ];
    },
    getBrinkDataMain() {
      return [
        {
          id: "1",
          name: "Brink Thailand 1",
          lob: "CIT",
          serviceType: "Pick Up",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
        },
      ];
    },
  };

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

  useEffect(() => {
    if (allData?.tab4?.length > 0) {
        setProducts(allData.tab4);
    } else {
        getBrinksMiniMain().then((data) => setProducts(data));
    }
    getBrinksMini().then((data) => setProducts1(data));
    // ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Product Deleted",
      life: 3000,
    });
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
        <Button
          icon="pi pi-trash"
          size="small"
          className="p-0 h-auto"
          text
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };
  const dayOfWeekBodyTemplate = (rowData) => {
    return (
      <>
        {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
        {rowData.dayOfWeek === null || rowData.dayOfWeek === ""
          ? "-"
          : rowData.dayOfWeek}
      </>
    );
  };
  const actionBodyTemplateEdit = (rowData) => {
    return (
      <>
        {/* <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} /> */}
        <Button
          icon="pi pi-file-edit"
          size="small"
          className="p-0 h-auto"
          text
          severity="primary"
          onClick={() => editProduct(rowData)}
        />
      </>
    );
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
    setEditMode(false);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
    setProductDialogEdit(false);
    setLob("");
    setServiceHour("");
    setDow("");
    setRG("");
    setChecked(false);
    setSttime("");
    setEdtime("");
  };

  //   const saveProduct = () => {
  //     setSubmitted(true);

  //     if (product.name.trim()) {
  //       let _products = [...products];
  //       let _product = { ...product };

  //       if (product.id) {
  //         const index = findIndexById(product.id);

  //         _products[index] = _product;
  //         toast.current.show({
  //           severity: "success",
  //           summary: "Successful",
  //           detail: "Product Updated",
  //           life: 3000,
  //         });
  //       } else {
  //         _product.id = createId();
  //         _product.image = "product-placeholder.svg";
  //         _products.unshift(_product);
  //         // _products.push(_product);
  //         toast.current.show({
  //           severity: "success",
  //           summary: "Successful",
  //           detail: "Product Created",
  //           life: 3000,
  //         });
  //       }

  //       setProducts(_products);
  //       setProductDialog(false);
  //       setProduct(emptyProduct);
  //     }
  //   };
  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const saveProduct = () => {
    console.log("product saveProduct", product);
    setSubmitted(true);

    if (product) {
      let _products = [...products];
      let _product = { ...product };

      console.log("_products", _products);
      console.log("_product", _product);

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _products.unshift(_product);
        // _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setProducts(_products);
    //   setAllData(_products);
      setAllData([{
        tab4: _products
    }])
      setProductDialog(false);
      setProduct(emptyProduct);
    }
    // else if (selectedProducts1.length > 0) {
    //   let _products = [...products];
    //   selectedProducts1.forEach((selectedProduct) => {
    //     _products.push(selectedProduct);
    //   });

    //   toast.current.show({
    //     severity: "success",
    //     summary: "Successful",
    //     detail: "Product(s) Added",
    //     life: 3000,
    //   });

    //   setProducts(_products);
    //   setProductDialog(false);
    //   setProducts2(selectedProducts1);
    //   setSelectedProducts1([]);
    // } else {
    //   toast.current.show({
    //     severity: "warn",
    //     summary: "Warning",
    //     detail: "Please select at least one product to add.",
    //     life: 3000,
    //   });
    // }
  };

  // useEffect(() => {
  //   let updatedProducts1 = products1.filter(item => !products2?.find(product => product.name === item.name));
  //   // console.log('updatedProducts1', updatedProducts1)
  //   setProducts1(updatedProducts1);
  // }, [products])

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      saveProduct();
    }
  };
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end align-items-end">
        {/* <h4 className="m-0">Customers</h4>
                  <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
  
                  </span> */}
        <Button
          label="Add"
          icon="pi pi-plus text-xs"
          className=" p-2"
          size="small"
          onClick={openNew}
        />
      </div>
    );
  };
  const onInputChange = (e, name) => {
    // console.log("e", e);
    // console.log("name", name);
    const val = (e.target && e.target.value) || "";
    // console.log("val", val);
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };
  const onDateChange = (e, name) => {
    console.log("e", e);
    // console.log("name", name);
    // const val = (e.target && ) || "";
    const val = new Date(e.target.value);
    const formattedTime = val.toLocaleString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Bangkok",
      });

    setEdtime(new Date(e.target.value));
    // console.log("timeString", timeString);
    // console.log("val", val);
    let _product = { ...product };

    _product[`${name}`] = formattedTime;

    setProduct(_product);
  };
  const onDateChangeStart = (e, name) => {
    const val = new Date(e.target.value);
    // const timeString =
    //   val.toUTCString().split("T")[1].split(":")[0] +
    //   ":" +
    //   val.toUTCString().split("T")[1].split(":")[1];

    const formattedTime = val.toLocaleString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Bangkok",
    });
    // console.log('formattedTime', formattedTime)
    setSttime(new Date(e.target.value));
    let _product = { ...product };

    _product[`${name}`] = formattedTime;

    setProduct(_product);
  };

  const onDD1Change = (e, name) => {
    // console.log('onDD1Change', e)
    const val = (e.value && e.target.value) || "";
    let _product = { ...product };
    setLob(e.value);
    _product[`${name}`] = e?.value?.name;
    setProduct(_product);
  };

  const onDD2Change = (e, name) => {
    // console.log('e', e)
    const val = (e.value && e.target.value) || "";
    let _product = { ...product };
    setServiceHour(e.value);
    _product[`${name}`] = e?.value?.name;
    setProduct(_product);
  };
  const onDD3Change = (e, name) => {
    const val = (e.value && e.target.value) || "";
    let _product = { ...product };
    setDow(e.value);
    _product[`${name}`] = e?.value?.name;
    setProduct(_product);
  };
  const onDD4Change = (e, name) => {
    const val = (e.value && e.target.value) || "";
    let _product = { ...product };
    setRG(e.value);
    _product[`${name}`] = e?.value?.name;
    setProduct(_product);
  };

  //   const onDDChange = (e, name) => {
  //     console.log("e", e);
  //     console.log("name", name);
  //     const val = (e.target && e.target.value) || "";
  //     console.log("val", val);
  //     let _product = { ...product };

  //     _product[`${name}`] = val.name;

  //     setProduct(_product);
  //   };

  const onCheckboxChange = (e, name) => {
    console.log("e onCheckboxChange", e);
    // console.log("name", name);
    const val = e.checked ||false;
    // console.log("val", val);
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const editProduct = (product) => {
    console.log("edirt product", product);

    const startTime = product.endTime
      ? new Date(`2024-02-22T${product.startTime.replace(".", ":")}:00`)
      : null;
    const endTime = product.endTime
      ? new Date(`2024-02-21T${product.endTime.replace(".", ":")}:00`)
      : null;

    setLob({ id: "1", name: product.lob });
    setServiceHour({ id: "1", name: product.serviceType });
    setDow({ id: "1", name: product.dayOfWeek });
    setRG({ id: "1", name: product.routeGroup });
    setChecked(product.spotTime);
    setSttime(startTime);
    setEdtime(endTime);
    setProduct({ ...product });
    // setProduct({ ...product });
    // setProductDialog(true);

    setProductDialogEdit(true);
    setEditMode(true);
  };

  console.log("lob lob vv", lob);

  return (
    <div className="" id="siteHandle">
      <Toast ref={toast} />
      {/* <div className="flex justify-content-end align-items-end mb-4 gap-2">
                  <Button label='Add' icon='pi pi-plus' size='small' onClick={openNew}/>
              </div> */}
      <DataTable
        // showGridlines
        scrollHeight={`${heightCardContent.height - 60}px`}
        style={{ height: `${heightCardContent.height}px` }}
        size="small"
        header={renderHeader}
        className="border-1 border-black-alpha-20 border-round-lg"
        value={products}
        selectionMode={rowClick ? null : "checkbox"}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
      >
        {/* <Column
            selectionMode="single"
            headerStyle={{ width: "3rem", height: "2rem" }}
          ></Column> */}
        {/* <Column field="code" header="Code"></Column> */}
        <Column field="lob" header="LOB"></Column>
        <Column field="serviceType" header="Service Type"></Column>
        <Column
          field="dayOfWeek"
          body={dayOfWeekBodyTemplate}
          header="Day of Week"
        ></Column>
        <Column field="startTime" header="Start Time"></Column>
        <Column field="endTime" header="End Time"></Column>
        <Column field="spotTime" header="Spot Time"></Column>
        <Column field="routeGroup" header="Route Group"></Column>
        <Column
          body={actionBodyTemplateEdit}
          style={{ width: "1rem" }}
          className=" text-center"
        ></Column>
        <Column
          body={actionBodyTemplate}
          style={{ width: "1rem" }}
          className=" text-center"
        ></Column>
      </DataTable>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content flex align-items-center">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {products && (
            <span>
              Are you sure you want to delete <b>{name}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        id="dialog-add-brink"
        visible={productDialog}
        style={{ width: "40rem"}}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header={editMode ? "Edit Service Hour" : "Add Service Hour"}
        modal
        className="p-fluid p-0"
        footer={productDialogFooter}
        onHide={hideDialog}
        // maximizable
      >
        {/* {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />} */}

        <div className="flex gap-2 mt-5">
          <span className="p-float-label w-full ">
            <Dropdown
              showClear={product.lob === "" ? false : true}
              inputId="dd-lob"
              value={lob}
              //   value={product['lob']}
              // value={product.lob}
              onChange={(e) => onDD1Change(e, "lob")}
              //   onChange={(e) => setLob(e.value)}
              options={LobData}
              optionLabel="name"
              // optionValue="name"
              className="w-full"
            />
            <label htmlFor="dd-lob">LOB</label>
          </span>
          <span className="p-float-label w-full">
            <Dropdown
              showClear={product.serviceType === "" ? false : true}
              inputId="dd-st"
              value={serviceHour}
              //   value={product.serviceType}
              //   onChange={(e) => setServiceHour(e.value)}
              onChange={(e) => onDD2Change(e, "serviceType")}
              options={serviceTypeData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-st">Service Type </label>
          </span>
        </div>
        <Divider />
        <div className="flex gap-2 mt-5">
          <span className="p-float-label w-full ">
            <Dropdown
              showClear={product.dayOfWeek === "" ? false : true}
              inputId="dd-dow"
              value={dow}
              //   value={product.dayOfWeek}
              //   onChange={(e) => setDow(e.value)}
              onChange={(e) => onDD3Change(e, "dayOfWeek")}
              options={dayOfWeekData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-dow">Day of Week</label>
          </span>
          <span className="p-float-label w-full">
            <Dropdown
              showClear={product.routeGroup === "" ? false : true}
              inputId="dd-rg"
              value={rg}
              //   value={product.routeGroup}
              //   onChange={(e) => setRG(e.value)}
              onChange={(e) => onDD4Change(e, "routeGroup")}
              options={routeGroupData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-rg">Route Group</label>
          </span>
        </div>
        <Divider />

        
        <div className="flex gap-2 mt-4">
          <div className="field p-float-label w-full">
            {/* <InputText
              id="startTime"
              value={product.startTime}
              onChange={(e) => onInputChange(e, "startTime")}
              required
              className={classNames("w-full", {
                "p-invalid": submitted && !product.startTime,
              })}
            /> */}
            <Calendar
              id="calendar-timeonly"
              value={stTime}
              onChange={(e) => onDateChangeStart(e, "startTime")}
              timeOnly
            />
            <label htmlFor="startTime" className="">
              Start Time
            </label>
            {/* {submitted && !product.name && <small className="p-error">Name is required.</small>} */}
          </div>
          <div className="field p-float-label w-full">
            {/* <InputText
              id="endTime"
              value={product.endTime}
                onChange={(e) => onInputChange(e, "endTime")}
              required
              className={classNames({
                "p-invalid": submitted && !product.endTime,
              })}
            /> */}
            <Calendar
              id="calendar-timeonly"
              value={edTime}
              //   value={product.endTime}
              onChange={(e) => onDateChange(e, "endTime")}
              timeOnly
            />
            <label htmlFor="endTime" className="">
              End Time
            </label>
            {/* {submitted && !product.name && <small className="p-error">Name is required.</small>} */}
          </div>
        </div>
        <div className="flex gap-2  justify-content-end">
          <Checkbox
            // onChange={(e) => setChecked(e.checked)}
            onChange={(e) => onCheckboxChange(e, "spotTime")}
            checked={product.spotTime}
            id="spotTime"
          ></Checkbox>
          <label htmlFor="spotTime" className="">
            Spot Time
          </label>
        </div>
        <Divider />
        {/* <div className="mt-5 border-1 border-black-alpha-20">
            <DataTable 
            value={products1}
            scrollHeight="400px"
            selection={selectedProducts1}
              onSelectionChange={(e) => setSelectedProducts1(e.value)}
              dataKey="name"
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem", height: "2rem" }}
              ></Column>
              <Column field="name" header="Brink's Site"></Column>
            </DataTable>
          </div> */}
      </Dialog>

      {/* Edit */}
      <Dialog
        id="dialog-add-brink"
        visible={productDialogEdit}
        style={{ width: "40rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header={editMode ? "Edit Service Hour" : "Add Service Hour"}
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
        maximizable
      >
        <div className="flex gap-2 mt-5">
          <span className="p-float-label w-full ">
            <Dropdown
              showClear={product.lob === "" ? false : true}
              inputId="dd-lob"
              value={lob}
              onChange={(e) => onDD1Change(e, "lob")}
              options={LobData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-lob">LOB</label>
          </span>
          <span className="p-float-label w-full">
            <Dropdown
              showClear={product.serviceType === "" ? false : true}
              inputId="dd-st"
              value={serviceHour}
              onChange={(e) => onDD2Change(e, "serviceType")}
              options={serviceTypeData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-st">Service Type </label>
          </span>
        </div>
        <div className="flex gap-2 mt-5">
          <span className="p-float-label w-full ">
            <Dropdown
              showClear={product.dayOfWeek === "" ? false : true}
              inputId="dd-dow"
              value={dow}
              onChange={(e) => onDD3Change(e, "dayOfWeek")}
              options={dayOfWeekData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-dow">Day of Week</label>
          </span>
          <span className="p-float-label w-full">
            <Dropdown
              showClear={product.routeGroup === "" ? false : true}
              inputId="dd-rg"
              value={rg}
              onChange={(e) => onDD4Change(e, "routeGroup")}
              options={routeGroupData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-rg">Route Group</label>
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <Checkbox
            onChange={(e) => onCheckboxChange(e, "spotTime")}
            checked={product.spotTime}
            id="spotTime"
          ></Checkbox>
          <label htmlFor="spotTime" className="">
            Spot Time
          </label>
        </div>
        <div className="flex gap-2 mt-5">
          <div className="field p-float-label w-full">
            <Calendar
              id="calendar-timeonly"
              value={stTime}
              onChange={(e) => onDateChangeStart(e, "startTime")}
              timeOnly
            />
            <label htmlFor="startTime" className="">
              Start Time
            </label>
          </div>
          <div className="field p-float-label w-full">
            <Calendar
              id="calendar-timeonly"
              value={edTime}
              onChange={(e) => onDateChange(e, "endTime")}
              timeOnly
            />
            <label htmlFor="endTime" className="">
              End Time
            </label>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
