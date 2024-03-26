"use client";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
// import "primereact/resources/primereact.css";
import styled from "styled-components";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { BreadCrumb } from "primereact/breadcrumb";
// import NavigationBar from "../customer_location/tabMenu";
import { useResizeListener } from "primereact/hooks";
import Link from "next/link";
import { LayoutContext } from "../../../../layout/context/layoutcontext";
import "./style.scss";
import { useRouter } from "next/navigation";

// import { Metadata } from "next";

// export const metadata = {
//   title: 'Ocean Online',
// }

export default function Page() {
  const router = useRouter();
  const {
    layoutConfig,
    layoutState,
    onMenuToggle,
    showProfileSidebar,
    setLayoutState,
    prevLayoutState,
  } = useContext(LayoutContext);
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

  useEffect(() => {
    bindWindowResizeListener();
    // setLoadingDone(false)

    return () => {
      unbindWindowResizeListener();
      // setLoadingDone(true)
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);
  const Bitems = {
    label: "Home",
    template: () => <span className="font-bold">Home</span>,
  };
  const Bhome = {
    icon: "pi pi-home",
    url: "/home",
    template: () => (
      <Link href="/v2/home" className="text-white">
        <i className="pi pi-home"></i>{" "}
      </Link>
    ),
  };

  const home = { icon: 'pi pi-home', url: '/home', template: () => <i className="pi pi-home cursor-pointer" onClick={() => router.push('/v2/home')}></i> }

  const headerTemplate = (options) => {
    const className = `${options.className} `;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2 p-0">
          {/* <SidebarDemo2 /> */}
          <Button
            ref={menubuttonRef}
            type="button"
            className="p-link layout-menu-button layout-topbar-button h-2rem border-white"
            onClick={() => onMenuToggle()}
          >
            <i className="pi pi-bars text-white" style={{ fontSize: "16px" }} />
          </Button>
          {/* <i className="pi pi-chevron-left ml-2" onClick={() => router.back()} /> */}
          {/* <Button
            icon="pi pi-chevron-left"
            className="w-2rem h-2rem"
            onClick={() => router.back()}
            size="medium"
          /> */}
          {/* <BreadCrumb 
          // home={Bitems} 
          home={home} 
          className="bg-primary text-white p-0 border-none"/> */}
          <i className="pi pi-home text-white" style={{ cursor: "pointer" }} onClick={() => router.push('/v2/home')} />Home
          {/* <Button onClick={() => router.push('/v2/home')}><i className="pi pi-home"  /></Button> */}
        </div>
        <div className="flex flex-row">
          <div>{options.togglerElement}</div>
          {/* <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-filter-slash" onClick={() => {options.togglerElement} }></i></button></div> */}
          {/* <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-times" onClick={() => router.push('/home')}></i></button></div> */}
        </div>
      </div>
    );
  };
  const BackgroundDiv = styled.div`
    background-image: url("http://localhost:3000/_next/static/media/Loading_Ocean_100x125_1.33ae98ad.png");
    height: ${eventData?.height - 93}px;
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <>
      <div
        className="w-full h-full"
        id="mainPageNewHome"
        style={{ height: "100vh" }}
      >
        <Panel
          //   ref={ref}
          header="Home"
          titleClassName="p-0"
          headerTemplate={headerTemplate}
          //   toggleable
          //   collapseIcon="pi pi-filter-slash"
          //   expandIcon="pi pi-filter"
          //   onExpand={(e) => toggleState(e, "expand")}
          //   onCollapse={(e) => toggleState(e, "collapse")}
          className=""
          id="panel-cuslo"
        // className="bg-primary border-200 border-top-none border-noround border-2"
        >
          <div
            id=""
            className=""
            style={{ height: `${eventData?.height - 93}px` }}
          >
            <BackgroundDiv></BackgroundDiv>
          </div>
        </Panel>
      </div>
    </>
  );
}
