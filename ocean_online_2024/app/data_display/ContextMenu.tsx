import React, { useRef, useState, useEffect } from "react";
import { ContextMenu } from "primereact/contextmenu";
import { MenuItem } from "primereact/menuitem";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../services/ProductService";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";
import { Menu } from "primereact/menu";

import ContextMenuDataTableDemo from "./ContextMenu/ContextMenuDataTable";

export default function ContextMenuDemo() {
  const cm = useRef<ContextMenu>(null);
  const items: MenuItem[] = [
    { label: "Copy", icon: "pi pi-copy" },
    { label: "Rename", icon: "pi pi-file-edit" },
  ];

  interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);
  const menu = useRef(null);

  // const itemsMenu= (data : any ): MenuItem[] => [
  //     {
  //       label: "File",
  //       icon: "pi pi-file",
  //       command: (e) => {
  //         console.log(e, data);
  //       },
  //     },
  //   ];

  const buttonTemplate = (data) => (
    <>
      <span
        className="pi pi-bars"
        // model={itemsMenu(data)}
        // onClick={(e) => menu.current.toggle(e)}
        onClick={(e) => splitBtn(data)}
      ></span>
    </>
  );
  const splitBtn = (d) => {
    console.log(d);
    // {menu.current.toggle(d)};
    // console.log('menu.current', menu)
    actionBodyTemplate(d)
  };
  const actionBodyTemplate = (rowData) => {
    console.log("rowData", rowData);
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
        <Menu
          model={itemsMenu}
          popup
          ref={menu}
          id="popup_menu_left"
        />
        <span
          className="pi pi-bars"
          onClick={(e) => menu.current.toggle(e)}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
      </>
    );
  };
  return (
    <>

      {/* <TieredMenu model={itemsMenu} popup ref={menu} breakpoint="767px" /> */}
      <h1 className="mx-4">Context Menu</h1>
      <div className="card">
        <DataTable
          value={products}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column 
          body={actionBodyTemplate}
          >
          {/* body={buttonTemplate}>  */}
          </Column>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
      <div className="card flex md:justify-content-center">
        <ContextMenuDataTableDemo />
      </div>
    </>
  );
}
