"use client";
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { TieredMenu } from 'primereact/tieredmenu';
import { useRouter } from 'next/navigation';

export default function TemplateDemo() {
  const toast = useRef(null);
  const router = useRouter();
  const itemRenderer = (item) => (
    <div className="p-menuitem-content">
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
    </div>
  );
  let items = [
    {
      template: () => {
        return (
          <span className="inline-flex align-items-center gap-1 px-2 py-2">
            <img
              alt="logo"
              src="/Logo-Ocean_login.png"
              // src="/Logo-Ocean_login.png"
              // width={300}
              height={40}
              className="mr-2 text-center"
            ></img>
            {/* <span className="font-medium text-xl font-semibold">
              PRIME<span className="text-primary">APP</span>
            </span> */}
          </span>
        );
      },
    },
    {
      separator: true,
    },
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
          router.push('/home');
      }
    //   url: "/home",
    },
    {
      label: "Documents",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          shortcut: "⌘+N",
          template: itemRenderer,
        },
        {
          label: "Search",
          icon: "pi pi-search",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
          template: itemRenderer,
        },
        {
          label: "Messages",
          icon: "pi pi-inbox",
          badge: 2,
          template: itemRenderer,
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          shortcut: "⌘+Q",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
          template: itemRenderer,
        },
        {
          label: "Messages",
          icon: "pi pi-inbox",
          badge: 2,
          template: itemRenderer,
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          shortcut: "⌘+Q",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
          template: itemRenderer,
        },
        {
          label: "Messages",
          icon: "pi pi-inbox",
          badge: 2,
          template: itemRenderer,
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          shortcut: "⌘+Q",
          template: itemRenderer,
        },
      ],
    },
    {
      separator: true,
    },
    {
      command: () => {
        toast.current.show({
          severity: "info",
          summary: "Info",
          detail: "Item Selected",
          life: 3000,
        });
      },
      template: (item, options) => {
        return (
          <button
            onClick={(e) => options.onClick(e)}
            className={classNames(
              options.className,
              "w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
            )}
          >
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              className="mr-2"
              shape="circle"
            />
            <div className="flex flex-column align">
              <span className="font-bold">Amy Elsner</span>
              <span className="text-sm">Agent</span>
            </div>
          </button>
        );
      },
    },
  ];

  return (
    <>
      <Toast ref={toast} />
      {/* <Menu
        //   popup={false}
        model={items}
        className="w-full h-screen md:w-21rem overflow-y-scroll"
      /> */}
      {/* <TieredMenu
        model={items}
       
        className="w-full h-screen md:w-21rem 
        "
      /> */}
      <div className="md:w-21rem ">

      </div>
    </>
  );
}
