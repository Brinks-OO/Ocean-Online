"use client";
import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDemo = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  // console.log("pathname", pathname);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  useEffect(() => {
    if (pathname != "/") {
      setVisible(false);
    }
  }, [pathname]);
  const customHeader = (
    <div className="flex align-items-center gap-2">
      <div className="flex justify-content-center">
        <Image src="/Logo-Ocean_login.png" alt="" height="32px" />
      </div>
    </div>
  );

  return (
    <div>
      <Sidebar
        header={customHeader}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        {/* <h2>My Sidebar</h2> */}
        {/* <p>This is the content of the sidebar</p> */}
        {/* <Button label="Close" onClick={() => setVisible(false)} /> */}
        <div className="overflow-y-auto">
          <ul className="list-none p-3 m-0">
            <li>
              <Link href={'/home'} className={` ${pathname === "/home" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}>
                <i className="pi pi-home mr-2"></i>
                <span className="font-medium">Home</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link href={'/customer_location'} className={` ${pathname === "/customer_location" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}>
                <i className="mr-2"></i>
                <span className="font-medium">Customer Location</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link href={'/run_control'} className={` ${pathname === "/run_control" ? "bg-primary" : ""
                } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}>
                <i className="mr-2"></i>
                <span className="font-medium">Run Control</span>
                <Ripple />
              </Link>
            </li>
            <li>
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
                  <span className="font-medium">Menu</span>
                  <i className="pi pi-chevron-down"></i>
                  <Ripple />
                </div>
              </StyleClass>

              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <Link
                    href={"/home/menu"}
                    className={` ${pathname === "/home/menu" ? "bg-primary" : ""
                      } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Navigation Bar</span>

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
                    className={` ${pathname === "/home/contextmenu" ? "bg-primary" : ""
                      } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Context Menu</span>
                    <Ripple />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/home/tab"}
                    className={` ${pathname === "/home/tab" ? "bg-primary " : ""
                      } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                  >
                    <i className="mr-2"></i>
                    <span className="font-medium">Tabs</span>
                    <Ripple />
                  </Link>
                </li>

                {/* <li>
                  <StyleClass
                    nodeRef={btnRef2}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <a
                      ref={btnRef2}
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-chart-line mr-2"></i>
                      <span className="font-medium">Reports</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <StyleClass
                        nodeRef={btnRef3}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <a
                          ref={btnRef3}
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                        >
                          <i className="pi pi-chart-line mr-2"></i>
                          <span className="font-medium">Revenue</span>
                          <i className="pi pi-chevron-down ml-auto mr-1"></i>
                          <Ripple />
                        </a>
                      </StyleClass>
                      <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-table mr-2"></i>
                            <span className="font-medium">View</span>
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-search mr-2"></i>
                            <span className="font-medium">Search</span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Expenses</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>*/}

                {/* <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-users mr-2"></i>
                    <span className="font-medium">Team</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-comments mr-2"></i>
                    <span className="font-medium">Messages</span>
                    <span
                      className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                      style={{ minWidth: "1.5rem", height: "1.5rem" }}
                    >
                      3
                    </span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span className="font-medium">Calendar</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                  </a>
                </li> */}
              </ul>
            </li>
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
              >
                <span className="font-medium">Input</span>
                <i className="pi pi-chevron-down"></i>
                <Ripple />
              </div>
            </StyleClass>

            <ul className="list-none p-0 m-0 overflow-hidden">
              <li>
                <Link
                  href={"/home/inputtext"}
                  className={` ${pathname === "/home/inputtext" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Input Text</span>

                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/textarea"}
                  className={` ${pathname === "/home/textarea" ? "bg-primary" : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Textarea</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/InputNumber"}
                  className={` ${pathname === "/home/InputNumber" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Input Number</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/calendar"}
                  className={` ${pathname === "/home/calendar" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Calandar</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/dropdown"}
                  className={` ${pathname === "/home/dropdown" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">DropDown</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/toggleswitch"}
                  className={` ${pathname === "/home/toggleswitch" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Toggle Switch</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/checkbox"}
                  className={` ${pathname === "/home/checkbox" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className="mr-2"></i>
                  <span className="font-medium">Checkbox</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/radiobutton"}
                  className={` ${pathname === "/home/radiobutton" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className=" mr-2"></i>
                  <span className="font-medium">Radio Button</span>
                  <Ripple />
                </Link>
              </li>
              <li>
                <Link
                  href={"/home/listbox"}
                  className={` ${pathname === "/home/listbox" ? "bg-primary " : ""
                    } no-underline p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full`}
                >
                  <i className=" mr-2"></i>
                  <span className="font-medium">List box</span>
                  <Ripple />
                </Link>
              </li>
            </ul>
          </ul>

          {/* <ul className="list-none p-3 m-0">
            <li>
              <StyleClass
                nodeRef={btnRef4}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
              >
                <div
                  ref={btnRef4}
                  className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                >
                  <span className="font-medium">APPLICATION</span>
                  <i className="pi pi-chevron-down"></i>
                  <Ripple />
                </div>
              </StyleClass>
              <ul className="list-none p-0 m-0 overflow-hidden">
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-folder mr-2"></i>
                    <span className="font-medium">Projects</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-chart-bar mr-2"></i>
                    <span className="font-medium">Performance</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                    <i className="pi pi-cog mr-2"></i>
                    <span className="font-medium">Settings</span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
          <div className="mt-auto ">
            <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
            <Link
              href={"/"}
              className="no-underline m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
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
      <Button
        icon="pi pi-bars"
        className="fixed z-1"
        style={{ marginTop: "120px"}}
        onClick={() => setVisible(true)}
      />
    </div>
  );
};

export default SidebarDemo;
