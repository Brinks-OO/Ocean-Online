
"use client";
import React, { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Dropdown } from "primereact/dropdown";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";


export default function NavigationBar() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const itemRendererColumn = (item) => (
    <a className="flex align-items-center p-menuitem-link flex-column p-0">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
    </a>
  );
  const itemRendererColumnSubmenu = (item) => (
    <>
      <a className="flex align-items-center p-menuitem-link flex-column p-1">
        <span className={`${item.icon} pr-3`} />
        <div className="mx-2">
          {item.label}
          <span className="pi pi-angle-down p-icon p-submenu-icon"></span>
        </div>
      </a>
    </>
  );
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
  const items = [
    // {
    //   label: "Home",
    //   icon: "pi pi-home",
    //   template: itemRendererColumn,
    // },
    {
      label: "Pre-Vault Management",
      icon: "pi pi-map",
      template: itemRendererColumnSubmenu,
      items: [
        {
          label: "Check in/Check out",
        },
        {
          label: "Pre-Vault Inventory",
        },
        {
          label: "Vault Balance",
        },
        {
          label: "Incoming Jobs",
        },
        {
          label: "Cash Delivery Preparation",
        },
        {
          label: "Cash Delivery import",
        },
        {
          label: "Non Pre-advised Management (Capture Detail)",
        },
        {
          label: "Scan Show Detail",
        },
        {
          label: "Equipment Control",
        },
        {
          label: "Tracking Seal History",
        },
        {
          label: "Consolidation",
        },
        {
          label: "Bank Clean Out",
          items: [
            {
              label: "Create Bank Clean Out",
            },
            {
              label: "BCO Balance",
            },
          ],
        },
      ],
    },
    {
      label: "Route Management",
      icon: "pi pi-directions",
      template: itemRendererColumnSubmenu,
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          // template: itemRenderer
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          // template: itemRenderer
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          // template: itemRenderer
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
      // template: itemRendererColumn,
    },
    {
      label: "Resource Management",
      icon: "pi pi-user",
      badge: 3,
      template: itemRendererColumnSubmenu,
      items: [
        {
          label: "Run Control",
        },
      ],
    },
    {
      label: "Administration",
      icon: "pi pi-cog",
      badge: 3,
      template: itemRendererColumnSubmenu,
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Report",
      icon: "pi pi-chart-bar",
      badge: 3,
      template: itemRendererColumn,
    },
    {
      label: "Service Request",
      icon: "pi pi-phone",
      badge: 3,
      template: itemRendererColumnSubmenu,
      items: [
        {
            label: "test"
        }
      ]
    },
    {
      label: "Search",
      icon: "pi pi-search",
      badge: 3,
      template: itemRendererColumnSubmenu,
      items: [
        {
            label: "test"
        }
      ]
    },
    {
      label: "Import",
      icon: "pi pi-file-import",
      badge: 3,
      template: itemRendererColumnSubmenu,
      items: [
        {
            label: "test"
        }
      ]
    },
  ];

  const cities = [
    { name: "English (US)", code: "US" },
    { name: "Thailand (TH)", code: "TH" },
    { name: "Cyprus (CY)", code: "CY" },
    { name: "Australia (AU)", code: "AU" },
    { name: "China (CN)", code: "CN" },
  ];
  const [selectedCity, setSelectedCity] = useState({
    name: "English (US)",
    code: "US",
  });

  const start = (
    <img
      alt="logo"
      src="/ocean_w.png"
      // src="/Logo-Ocean_login.png"
      // width={300}
      height={40}
      className="mr-2"
    ></img>
  );
  const menuLeft = useRef(null);
  const menuRight = useRef(null);
  const toast = useRef(null);
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
  // const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

  const end = (
    <div className="flex align-items-center gap-2">
      {/* <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" /> */}

      {/* <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        className="sm:w-10rem md:w-10rem "
      /> */}
      <Menu model={itemss} popup ref={menuLeft} id="popup_menu_left" />
      {/* <Button label="Show Left" icon="pi pi-user" className="" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />  */}

      <div className="" onClick={(event) => menuLeft.current.toggle(event)}>
        <a className="p-menuitem-link ">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <span className="pi pi-angle-down ml-2"></span>
        </a>
        {/* <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        className="sm:w-10rem md:w-10rem "
      /> */}
      </div>
    </div>
  );

  return (
    <>
      <div id="navigation_bar_cus_lo">
        {/* <Menubar
        //   model={items}
          start={start}
          end={end}
          className="bg-primary border-primary"
          style={{ "fontSize": "18px", "borderRadius": "0px", 
          // "backgroundColor": "#428BCA" 
        }}
          // mobileActive={false}
          aria-expanded={false}
          id="header"
          // className="p-menubar-horizontal p-menubar-labels-bottom"

          // pt={{
          //     action: ({ props, state, context }) => ({
          //         className: context.active ? 'bg-primary-200 border-round-sm' : undefined
          //     })
          // }}
        />
        <Menubar
          model={items}
          // className="bg-primary border-primary text-white"
          // start={start}
          // end={end}
          style={{ fontSize: "18px", borderRadius: "0px" }}
          // aria-expanded={false}
          // id="header"
        /> */}

        <Menubar
          model={items}
          start={start}
          end={end}
          style={{ "fontSize": "18px", borderRadius: "0px" }}
          className="bg-primary border-primary text-white"
        />
      </div>

    </>
  );
}
