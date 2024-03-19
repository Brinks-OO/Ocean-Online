/* eslint-disable @next/next/no-img-element */

import React, { useContext, useRef, useState } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";
import { AppMenuItem } from "@/types";
import { Image } from "primereact/image";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { Dropdown } from "primereact/dropdown";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const menuLeft = useRef(null);
    const [selectedCity, setSelectedCity] = useState({
        name: "English (US)",
        code: "US",
    });
    const cities = [
        { name: "English (US)", code: "US" },
        { name: "Thailand (TH)", code: "TH" },
        { name: "Cyprus (CY)", code: "CY" },
        { name: "Australia (AU)", code: "AU" },
        { name: "China (CN)", code: "CN" },
    ];

    const model: AppMenuItem[] = [
        {
            label: "Home",
            items: [
                {
                    label: "Home v1",
                    //   icon: "pi pi-fw pi-home",
                    to: "/home",
                },
                {
                    label: "Home",
                    //   icon: "pi pi-fw pi-home",
                    to: "/v2/home",
                },
                {
                    label: "Customer Location",
                    //   icon: "pi pi-fw pi-home",
                    to: "/v2/customer_location",
                },
                {
                    label: "Run Control",
                    //   icon: "pi pi-fw pi-home",
                    to: "/newHome/run_control_v2",
                },
            ],
        },
        {
            label: "Pre-Vault",
            items: [
                {
                    label: "Check in/Check out",
                    //   icon: "pi pi-fw pi-id-card",
                    //   to: "/uikit/formlayout",
                },
                {
                    label: "Pre-Vault Inventory",
                    //   icon: "pi pi-fw pi-check-square",
                    //   to: "/uikit/input",
                },
                {
                    label: "Vault Balance",
                    //   icon: "pi pi-fw pi-bookmark",
                    //   to: "/uikit/floatlabel",
                },
                {
                    label: "Incoming Jobs",
                    //   icon: "pi pi-fw pi-exclamation-circle",
                    //   to: "/uikit/invalidstate",
                },
                {
                    label: "Cash Delivery Preparation",
                    //   icon: "pi pi-fw pi-mobile",
                    //   to: "/uikit/button",
                    //   class: "rotated-icon",
                },
                {
                    label: "Cash Delivery Import",
                    //  icon: "pi pi-fw pi-table", to: "/uikit/table"
                },
                { label: "Discrepancy Management",
                // icon: "pi pi-fw pi-list",
                // to: "/uikit/list" 
            },
                { label: "Non Pre-advised Management (Capture Detail)", 
                // icon: "pi pi-fw pi-share-alt", 
                // to: "/uikit/tree" 
            },
                { label: "Scan Show Detail", 
                // icon: "pi pi-fw pi-tablet", 
                // to: "/uikit/panel" 
            },
                { label: "Equipment Control", 
                // icon: "pi pi-fw pi-clone", 
                // to: "/uikit/overlay"
             },
                { label: "Tracking Seal History", 
                // icon: "pi pi-fw pi-image", 
                // to: "/uikit/media" 
            },
                {
                    label: "Consolidation",
                    // icon: "pi pi-fw pi-bars",
                    // to: "/uikit/menu",
                    // preventExact: true,
                },
                { label: "Deconsolidation", 
                // icon: "pi pi-fw pi-comment", 
                // to: "/uikit/message" 
            },
                { label: "Route Balance", 
                // icon: "pi pi-fw pi-comment", 
                // to: "/uikit/message" 
            },
            {
                label: "Bank Clean Out",
                // icon: "pi pi-fw pi-user",
                items: [
                    {
                        label: "Create Bank Clean Out",
                        // icon: "pi pi-fw pi-sign-in",
                        // to: "/auth/login",
                    },
                    {
                        label: "BCO Balance",
                        // icon: "pi pi-fw pi-times-circle",
                        // to: "/auth/error",
                    },
                    
                ],
            },
            ],
        },
        {
            label: "Route",
            items: [
                {
                    label: "Master Route",
                    // icon: "pi pi-fw pi-eye",
                    // to: "/blocks",
                    // badge: "NEW",
                },
                {
                    label: "Run Management",
                    // icon: "pi pi-fw pi-globe",
                    // url: "https://blocks.primereact.org",
                    // target: "_blank",
                    items: [
                        {
                            label: "Run Control",
                            // icon: "pi pi-fw pi-globe",
                            // url: "https://blocks.primereact.org",
                            // target: "_blank",
                        },
                        {
                            label: "Create Adhoc Jobs",
                            // icon: "pi pi-fw pi-globe",
                            // url: "https://blocks.primereact.org",
                            // target: "_blank",
                        },
                        {
                            label: "On Hand Route",
                            // icon: "pi pi-fw pi-globe",
                            // url: "https://blocks.primereact.org",
                            // target: "_blank",
                        },
                        {
                            label: "Fast Update Jobs",
                            // icon: "pi pi-fw pi-globe",
                            // url: "https://blocks.primereact.org",
                            // target: "_blank",
                        },
                        
                    ]
                },
                {
                    label: "OTC Management",
                   
                },
                {
                    label: "Lock Monitoring",
                   
                },
                {
                    label: "Route Monitoring",
                    items: [
                        {
                            label: "Monitor By Route",
                        },
                        {
                            label: "Assign Route Operator",
                        },
                        
                    ]
                },
            ],
        },
        {
            label: "Resource",
            items: [
                {
                    label: "Crew Management",
                },
                {
                    label: "Employee Leave",
                },
                {
                    label: "Fleet Management",
                    items: [
                        {
                            label: "Fleet Dashboard",
                        },
                        {
                            label: "Fleet Maintenance",
                        },
                    ]
                },
            ],
        },
        {
            label: "Administration",
            // icon: "pi pi-fw pi-briefcase",
            // to: "/pages",
            items: [
                {
                    label: "User Management",
                },
                {
                    label: "Lock Fields",
                },
                {
                    label: "Contract Management",
                },
                {
                    label: "Security Template Management",
                },
                {
                    label: "Dolphin Policy Setup",
                },
                {
                    label: "Standard Table",
                },
                {
                    label: "Signature List",
                },
                {
                    label: "Country Configuration",
                },
                {
                    label: "System Configuration",
                },
                {
                    label: "Service Request Configuration",
                },
                {
                    label: "Monitoring",
                    // icon: "pi pi-fw pi-user",
                    items: [
                        {
                            label: "POD Monitoring",
                        },
                        {
                            label: "SMART Billing Monitoring",
                        },
                        
                    ],
                },
                {
                    label: "NEMO Configuration",
                },
                {
                    label: "Access Concurrent Management",
                },
               
            ],
        },
        {
            label: "Report",
            items: [
                {
                    label: "Report",
                    // icon: "pi pi-fw pi-bookmark",
                    // items: [
                    //     {
                    //         label: "Submenu 1.1",
                    //         icon: "pi pi-fw pi-bookmark",
                    //         items: [
                    //             { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
                    //             { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
                    //             { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
                    //         ],
                    //     },
                    //     {
                    //         label: "Submenu 1.2",
                    //         icon: "pi pi-fw pi-bookmark",
                    //         items: [{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" }],
                    //     },
                    // ],
                },
                // {
                //     label: "Submenu 2",
                //     icon: "pi pi-fw pi-bookmark",
                //     items: [
                //         {
                //             label: "Submenu 2.1",
                //             icon: "pi pi-fw pi-bookmark",
                //             items: [
                //                 { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
                //                 { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
                //             ],
                //         },
                //         {
                //             label: "Submenu 2.2",
                //             icon: "pi pi-fw pi-bookmark",
                //             items: [{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" }],
                //         },
                //     ],
                // },
            ],
        },
        {
            label: "Service Request Explorer",
            items: [
                {
                    label: "Service Request Explorer",
                },
                {
                    label: "Import Request Explorer",
                },
            ],
        },
        {
            label: "Search",
            items: [
                {
                    label: "Job Search",
                },
                {
                    label: "User Search",
                },
                
            ],
        },
        {
            label: "Import",
            items: [
                {
                    label: "Data Load Resource",
                },
                {
                    label: "Search Log",
                },
                {
                    label: "Machine Mass Update",
                },
                {
                    label: "Customer",
                },
                {
                    label: "Customer Location",
                },
                {
                    label: "Employee",
                },
                {
                    label: "Master Route",
                },
                {
                    label: "Run Resource",
                },
                {
                    label: "Route Group",
                },
                {
                    label: "Equipment",
                },
                {
                    label: "Place",
                },
            ],
        },
    ];
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
            url: "/",
        },
    ];

    return (
        <MenuProvider>
            <div id="home" className="p-sidebar-header p-sidebar-custom-header">
                <div
                    style={{ background: "#fff" }}
                    className="flex ba p-menubar p-component w-full border-bottom-0 border-none"
                >
                    <div className="flex mr-auto">
                        <Image src="/Logo-Ocean_login.png" alt="" height="32px" />
                    </div>
                    <div className="p-menubar-end ml-auto" data-pc-section="end">
                        <div className="flex align-items-center gap-2">
                            <Menu model={itemss} popup ref={menuLeft} id="popup_menu_left" />
                            <div
                                className=""
                                onClick={(event) => menuLeft.current.toggle(event)}
                            >
                                <a className="p-menuitem-link " style={{ color: "#4b5563" }}>
                                    <Avatar icon="pi pi-user" size="small" shape="circle" />
                                    <span className="pi pi-angle-down ml-2"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? (
                        <AppMenuitem item={item} root={true} index={i} key={item.label} />
                    ) : (
                        <li className="menu-separator"></li>
                    );
                })}

                {/* <Link href="https://blocks.primereact.org" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/banner-primeblocks${layoutConfig?.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link> */}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
