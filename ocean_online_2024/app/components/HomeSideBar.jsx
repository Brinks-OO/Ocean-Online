"use client";
import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { Badge } from "primereact/badge";
import { Dropdown } from "primereact/dropdown";
import { Menu } from "primereact/menu";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDemo3 = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  console.log("pathname", pathname);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null);
  const btnRef9 = useRef(null);
  const btnRef10 = useRef(null);
  const btnRef11 = useRef(null);
  const btnRef12 = useRef(null);
  const btnRef13 = useRef(null);
  const btnRef14 = useRef(null);
  const btnRef15 = useRef(null);
  const btnRef16 = useRef(null);
  const btnRef17 = useRef(null);
  const btnRef18 = useRef(null);
  const btnRef19 = useRef(null);
  const btnRef20 = useRef(null);
  const btnRef21 = useRef(null);

  const [subMenuOpen, setSubMenuOpen] = useState(false); // เพิ่ม state เพื่อเก็บสถานะของเมนูย่อย
  const [subMenuOpen2, setSubMenuOpen2] = useState(false); // เพิ่ม state เพื่อเก็บสถานะของเมนูย่อย

  const toggleSubMenu = () => {
    console.log("ss");
    setSubMenuOpen(!subMenuOpen); // สลับสถานะเมื่อคลิกที่เมนูย่อย
  };
  const toggleSubMenu2 = () => {
    console.log("ss");
    setSubMenuOpen2(!subMenuOpen2); // สลับสถานะเมื่อคลิกที่เมนูย่อย
  };

  const [selectedCity, setSelectedCity] = useState({
    name: "English (US)",
    code: "US",
  });

  const itemRendererColumnSubmenuLang = (item) => (
    <>
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select"
        className="sm:w-10rem md:w-10rem border-none ml-2"
      />
    </>
  );

  const itemss = [
    {
      label: "Import",
      icon: "pi pi-file-import",
      badge: 3,
      template: itemRendererColumnSubmenuLang,
      // items: [
      //   {
      //       label: "test"
      //   }
      // ]
    },
    {
      label: "Little Cat",
      icon: "pi pi-user",
    },
    {
      label: "Change Password",
      icon: "pi pi-lock",
    },
    {
      label: "Log Out",
      icon: "pi pi-sign-out",
    },
  ];

  const cities = [
    { name: "English (US)", code: "US" },
    { name: "Thailand (TH)", code: "TH" },
    { name: "Cyprus (CY)", code: "CY" },
    { name: "Australia (AU)", code: "AU" },
    { name: "China (CN)", code: "CN" },
  ];
  const menuLeft = useRef(null);

  //   useEffect(() => {
  //     if (pathname != "/") {
  //       setVisible(false);
  //     }
  //   }, [pathname]);
  const customHeader = (
    <>
      <div className="flex p-menubar p-component w-full border-bottom-0 border-noround">
        <div className="flex mr-auto">
          <Image src="/Logo-Ocean_login.png" alt="" height="40px" />
        </div>
        <div className="p-menubar-end ml-auto" data-pc-section="end">
          <div className="flex align-items-center gap-2">

            <Menu model={itemss} popup ref={menuLeft} id="popup_menu_left" />
            <div
              className=""
              onClick={(event) => menuLeft.current.toggle(event)}
            >
              <a className="p-menuitem-link ">
                <Avatar
                //   image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  icon="pi pi-user" 
                  size="large"
                  shape="circle"
                />
                <span className="pi pi-angle-down ml-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div id="sidebarHome">
      <Sidebar
        header={customHeader}
        visible={visible}
        onHide={() => setVisible(true)}
        className="md:w-21rem p-0 border-bottom-none"
        showCloseIcon={false}
        // modal={true}
      >
        {/* <h2>My Sidebar</h2> */}
        {/* <p>This is the content of the sidebar</p> */}
        {/* <Button label="Close" onClick={() => setVisible(false)} /> */}
        {/* <hr className="mb-3 mx-3 border-top-1 border-none surface-border" /> */}
        <div className="overflow-y-auto">
          <ul className="list-none p-3 m-0">
            <li>
              <Link
                href={"/home"}
                className={` ${
                  pathname === "/home" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
              >
                {/* <i className="pi pi-home mr-2"></i> */}
                <i className="pi pi-home mr-2"></i>
                <span className="font-medium">Home</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link
                href={"/customer_location"}
                className={` ${
                  pathname === "/customer_location" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
              >
                <i className="mr-2"></i>
                <span className="font-medium">Customer Location</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link
                href={"/run_control"}
                className={` ${
                  pathname === "/run_control" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
              >
                <i className="mr-2"></i>
                <span className="font-medium">Run Control</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link
                href={"/run_control_v2"}
                className={` ${
                  pathname === "/run_control_v2" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
              >
                <i className="mr-2"></i>
                <span className="font-medium">Run Control V2</span>
                <Ripple />
              </Link>
            </li>
            <li onClick={toggleSubMenu}>
              <StyleClass
                nodeRef={btnRef1}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef1}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                >
                  <i className="pi pi-map mr-2"></i>
                  <span className="font-medium">Pre-Vault</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>

              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/menu"}
                    className={` ${
                      pathname === "/home/menu" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Check in/Check out</span>

                    <Ripple />
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={"/home/menu"}
                    className={` ${
                      pathname === "/home/menu" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Navigation Bar (SideBar)</span>

                    <Ripple />
                  </Link>
                </li> */}
                <li>
                  <Link
                    href={"/home/contextmenu"}
                    className={` ${
                      pathname === "/home/contextmenu" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Pre-Vault Inventory</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Vault Balance</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Incoming Jobs</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Cash Delivery Preparation
                    </span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Cash Delivery Import</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Discrepancy Management</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Non Pre-advised Management (Capture Detail)
                    </span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Scan Show Detail</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Equipment Control</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Tracking Seal History</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Consolidation</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Deconsolidation</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${
                      pathname === "/home/tab" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Route Balance</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef4}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef4}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-chart-line mr-2"></i>
                      <span className="font-medium">Bank Clean Out</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">
                          Create Bank Clean Out
                        </span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">BCO Balance</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef2}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef2}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  onClick={toggleSubMenu2}
                >
                  <i className="pi pi-directions mr-2"></i>
                  <span className="font-medium">Route</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>

              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Master Route</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef6}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef6}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="mr-2"></i>
                      <span className="font-medium">Run Management</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Run Control</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Create Adhoc Jobs</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">On Hand Route</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Fast Update Jobs</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href={"/home/textarea"}
                    className={` ${
                      pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">OTC Management</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/InputNumber"}
                    className={` ${
                      pathname === "/home/InputNumber" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Lock Monitoring</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef7}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef7}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="mr-2"></i>
                      <span className="font-medium">Route Monitoring</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Monitor By Route</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">
                          Assign Route Operator
                        </span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef8}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef8}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  // onClick={toggleSubMenu2}
                >
                  <i className="pi pi-directions mr-2"></i>
                  <span className="font-medium">Resource</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Crew Management</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Employee Leave</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef10}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef10}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="mr-2"></i>
                      <span className="font-medium">Fleet Management</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Fleet Dashboard</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">Fleet Maintenance</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef13}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef13}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  // onClick={toggleSubMenu2}
                >
                  <i className="pi pi-cog mr-2"></i>
                  <span className="font-medium">Administration</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">User Management</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Lock Fields</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Contract Management</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Security Template Management
                    </span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Dolphin Policy Setup</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Standard Table</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Signature List</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Country Configuration</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">System Configuration</span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Service Request Configuration
                    </span>

                    <Ripple />
                  </Link>
                </li>
                <li>
                  <StyleClass
                    nodeRef={btnRef21}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef21}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="mr-2"></i>
                      <span className="font-medium">Monitoring</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">POD Monitoring</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="mr-2"></i>
                        <span className="font-medium">
                          SMART Billing Monitoring
                        </span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href={"/home/textarea"}
                    className={` ${
                      pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">NEMO Configuration</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/InputNumber"}
                    className={` ${
                      pathname === "/home/InputNumber" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Access Concurrent Management
                    </span>
                    <Ripple />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={"/home"}
                className={` ${
                  pathname === "/report" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
              >
                {/* <i className="pi pi-home mr-2"></i> */}
                <i className="pi pi-chart-bar mr-2"></i>
                <span className="font-medium">Report</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef17}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef17}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  // onClick={toggleSubMenu2}
                >
                  <i className="pi pi-phone mr-2"></i>
                  <span className="font-medium">Service Request Explorer</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">
                      Service Request Explorer
                    </span>

                    <Ripple />
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/home/textarea"}
                    className={` ${
                      pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Import Request Explorer</span>
                    <Ripple />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef15}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef15}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  // onClick={toggleSubMenu2}
                >
                  <i className="pi pi-search mr-2"></i>
                  <span className="font-medium">Search</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/textarea"}
                    className={` ${
                      pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Job Search</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/InputNumber"}
                    className={` ${
                      pathname === "/home/InputNumber" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">User Search</span>
                    <Ripple />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <StyleClass
                nodeRef={btnRef9}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef9}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                  // onClick={toggleSubMenu2}
                >
                  <i className="pi pi-file-import mr-2"></i>
                  <span className="font-medium">Import</span>
                  {/* <i className="pi pi-chevron-down ml-auto mr-1"></i> */}
                  <i
                    className={`pi ${
                      subMenuOpen2 ? "pi-chevron-up" : "pi-chevron-down"
                    } ml-auto mr-1`}
                  ></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/inputtext"}
                    className={` ${
                      pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Master Route</span>

                    <Ripple />
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/home/textarea"}
                    className={` ${
                      pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">OTC Management</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/InputNumber"}
                    className={` ${
                      pathname === "/home/InputNumber" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Lock Monitoring</span>
                    <Ripple />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mt-auto ">
            <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
            <Link
              href={"/"}
              className="no-underline flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              {/* <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              /> */}
              <i className="pi pi-sign-out pr-3"></i>
              <span className="font-bold">Log Out</span>
            </Link>
          </div>
        </div>
      </Sidebar>
      {/* <Button
        icon="pi pi-bars"
        className=" z-1 w-2rem h-2rem"
        onClick={() => setVisible(true)}
      /> */}
      {/* <Button
        icon="pi pi-bars"
        className="fixed z-1"
        style={{ marginTop: "30px" }}
        onClick={() => setVisible(true)}
      /> */}
    </div>
  );
};

export default SidebarDemo3;
