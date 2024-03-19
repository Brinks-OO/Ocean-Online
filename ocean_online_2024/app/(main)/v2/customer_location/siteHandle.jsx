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
// import './style.scss'

import { useResizeListener } from "primereact/hooks";

export default function SiteHandle() {
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
    // const body = document?.getElementById("bodyMain");
    if (element2) {
      const height2 = element2.offsetHeight;
      setHeighCardContent({ height: height2 });
      // body?.style?.overflowY = "hidden"
      
    }
  }, [heightNav.height, eventData.height]);

  let emptyProduct = {
    id: null,
    name: "",
  };
  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [newProducts, setNewProducts] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedProducts1, setSelectedProducts1] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [brink, setBrinks] = useState();
  const [country, setCountry] = useState();
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    setBrinks(NewDataBrink[0]);
    setCountry(NewData[0]);
  }, []);

//   console.log('selectedProducts1', selectedProducts1)
  // console.log('product', product)
  // console.log('products', products)

  const getBrinkSite = {
    getBrinkData() {
      return [
        {
          id: "2",
          name: "Brink Thailand 2",
        },
        {
          id: "3",
          name: "Brink Thailand 3",
        },
        {
          id: "4",
          name: "Brink Thailand 4",
        },
        {
          id: "5",
          name: "Brink Thailand 5",
        },
        {
          id: "6",
          name: "Brink Thailand 6",
        },
        {
          id: "7",
          name: "Brink Thailand 7",
        },
        {
          id: "8",
          name: "Brink Thailand 8",
        },
        {
          id: "9",
          name: "Brink Thailand 9",
        },
        {
          id: "10",
          name: "Brink Thailand 10",
        },
        {
          id: "11",
          name: "Brink Thailand 11",
        },
        {
          id: "12",
          name: "Brink Thailand 12",
        },
        {
          id: "13",
          name: "Brink Thailand 13",
        },
        {
          id: "14",
          name: "Brink Thailand 14",
        },
        {
          id: "15",
          name: "Brink Thailand 15",
        },
        {
          id: "16",
          name: "Brink Thailand 16",
        },
        {
          id: "17",
          name: "Brink Thailand 17",
        },
      ];
    },
    getBrinkDataMain() {
      return [
        {
          id: "1",
          name: "Brink Thailand 1",
        },
      ];
    },
  };

  const NewData = [
    {
      id: "001",
      name: "Thailand",
    },
  ];
  const NewDataBrink = [
    {
      id: "0001",
      name: "Brink's Thailand",
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
    getBrinksMiniMain().then((data) => setProducts(data));
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
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
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

  const saveProduct = () => {
    setSubmitted(true);
  
    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };
  
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
        _product.image = "product-placeholder.svg";
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
      setProductDialog(false);
      setProduct(emptyProduct);
    } else if (selectedProducts1.length > 0) { // เพิ่มเงื่อนไขเพิ่มข้อมูลจาก Dropdown
      let _products = [...products];
      selectedProducts1.forEach((selectedProduct) => {
        _products.push(selectedProduct);
      });
  
      toast.current.show({
        severity: "success",
        summary: "Successful",
        detail: "Product(s) Added",
        life: 3000,
      });


  
      setProducts(_products);
      setProductDialog(false);
      setProducts2(selectedProducts1)
      setSelectedProducts1([]); 
    // รีเซ็ต state ของ selectedAdditionalProducts เป็น array ว่าง

    
    } else {
      toast.current.show({
        severity: "warn",
        summary: "Warning",
        detail: "Please select at least one product to add.",
        life: 3000,
      });
    }
  };

  useEffect(() => {
    let updatedProducts1 = products1.filter(item => !products2?.find(product => product.name === item.name));
    // console.log('updatedProducts1', updatedProducts1)
    setProducts1(updatedProducts1);
  }, [products])
  

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
    const val = (e.target && e.target.value) || "";
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
        <Column
          selectionMode="single"
          headerStyle={{ width: "3rem", height: "2rem" }}
        ></Column>
        {/* <Column field="code" header="Code"></Column> */}
        <Column field="name" header="Brink's Site"></Column>
        {/* <Column field="category" header="Category"></Column> */}
        {/* <Column field="quantity" header="Quantity"></Column> */}
        <Column
          body={actionBodyTemplate}
          style={{ minWidth: "12rem" }}
          className=" text-right"
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
        style={{ width: "40rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Add Brink's Site"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
        // maximizable

      >
        {/* {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image block m-auto pb-3" />} */}
        {/* <div className="field">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <InputText
            id="name"
            value={product.name}
            onChange={(e) => onInputChange(e, "name")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.name })}
            onKeyDown={handleKeyPress}
          />
          {submitted && !product.name && <small className="p-error">Name is required.</small>}
        </div> */}
        <div className="flex gap-2 mt-5">
          <span className="p-float-label w-full ">
            <Dropdown
            showClear
              inputId="dd-country"
              value={country}
              onChange={(e) => setCountry(e.value)}
              options={NewData}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-country">Select a Country</label>
          </span>
          <span className="p-float-label w-full">
            <Dropdown
              showClear
              inputId="dd-brink"
              value={brink}
              onChange={(e) => setBrinks(e.value)}
              options={NewDataBrink}
              optionLabel="name"
              className="w-full"
            />
            <label htmlFor="dd-brink">Select Brink's Company</label>
          </span>
        </div>
        <div className="mt-5 mb-5 border-1 border-black-alpha-20">
          <DataTable 
          value={products1}
        //   value={products1.filter(item => !selectedProducts1?.find(product => product.id === item.id))}
          scrollHeight="400px"
          selection={selectedProducts1}
            // onSelectionChange={(e) => onDropDownChange(e, "name")}
            onSelectionChange={(e) => setSelectedProducts1(e.value)}
            dataKey="name"
            // onChange={(e) => onDropDownChange(e, "name")}
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem", height: "2rem" }}
            ></Column>
            <Column field="name" header="Brink's Site"></Column>
          </DataTable>
        </div>
      </Dialog>
    </div>
  );
}
