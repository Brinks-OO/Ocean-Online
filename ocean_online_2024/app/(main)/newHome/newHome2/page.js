"use client"
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

import React, { useState, useRef, useEffect, useContext } from "react";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { BreadCrumb } from 'primereact/breadcrumb';
// import NavigationBar from "../customer_location/tabMenu";
import { useResizeListener } from "primereact/hooks";
import Link from "next/link";     
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import "./style.scss";

// import { Metadata } from "next";

// export const metadata = {
//   title: 'Ocean Online',
// }

export default function Page() {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar, setLayoutState, prevLayoutState } = useContext(LayoutContext);
    const [eventData, setEventData] = useState({ width: 0, height: 0 });
    const menubuttonRef = useRef(null);
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
  const Bitems =  { label: 'Home', template: () => <span className="font-bold">Home</span> };
  const Bhome = { icon: 'pi pi-home', url: '/home',template: () => <Link href="/home" className="text-white"><i className="pi pi-home"></i> </Link>}


  const headerTemplate = (options) => {
    const className = `${options.className} `;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2 p-0">
          {/* <SidebarDemo2 /> */}
          {/* <Button 
          ref={menubuttonRef} 
          type="button" className="p-link layout-menu-button layout-topbar-button h-2rem" 
          onClick={()=>onMenuToggle()}
          >
                <i className="pi pi-bars text-white" style={{ fontSize: "16px" }} />
            </Button> */}
          {/* <i className="pi pi-chevron-left ml-2" onClick={() => router.back()} /> */}
          {/* <Button
            icon="pi pi-chevron-left"
            className="w-2rem h-2rem"
            onClick={() => router.back()}
            size="medium"
          /> */}
          <BreadCrumb 
        //   model={Bitems} 
          home={Bitems} 
          className="bg-primary text-white p-0 border-none"/>
          {/* <span className="font-bold">Customer Location</span> */}
        </div>
        <div className="flex flex-row">

          <div>{options.togglerElement}</div>
          {/* <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-filter-slash" onClick={() => {options.togglerElement} }></i></button></div> */}
          {/* <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-times" onClick={() => router.push('/home')}></i></button></div> */}
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="w-full h-full"
        id="mainPageNewHome"
        style={{ height: '100vh' }}
      >
        <Panel
        //   ref={ref}
          header="Home"
          titleClassName="p-0"
        //   headerTemplate={headerTemplate}
        //   toggleable
        //   collapseIcon="pi pi-filter-slash"
        //   expandIcon="pi pi-filter"
        //   onExpand={(e) => toggleState(e, "expand")}
        //   onCollapse={(e) => toggleState(e, "collapse")}
          className=""
          id="panel-cuslo"
        // className="bg-primary border-200 border-top-none border-noround border-2"
        >
            <div className="" style={{ height: '899px' }}>

            </div>
            </Panel>
          </div>
    </>
  );
}
