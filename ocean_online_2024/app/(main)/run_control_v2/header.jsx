
"use client";
import React, { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { Dropdown } from "primereact/dropdown";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import Image from "next/image";



export default function Header() {
  const menuLeft = useRef(null);
  const itemss = [
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
  const [selectedCity, setSelectedCity] = useState(
    {name: "English (US)",code: "US"},
    {name: "English (US)",code: "US"},
    {name: "English (US)",code: "US"},
    {name: "English (US)",code: "US"},
    );


  const End = () => (
    <div className="flex align-items-center gap-2">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Language"
        className="sm:w-10rem md:w-10rem h-2rem bg-transparent text-white"
        style={{
          fontSize:"16px",
          lineHeight:"8px",
          border:0,
        }}
      />
      <Menu model={itemss} popup ref={menuLeft} id="popup_menu_left" />
      <div className="" onClick={(event) => menuLeft.current.toggle(event)}>
        <a className="p-menuitem-link ">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <span className="pi pi-angle-down ml-2"></span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-content-between justify-content-center align-items-center flex-wrap" style={{ "fontSize": "16px", "borderRadius": "0px", "backgroundColor": "#428BCA",height:"50px" }}>
        <div className="start">
          <Image alt="logo" src="/ocean_w.png" height={32} width={156} className="mr-2" />
        </div>
        <div className="end">
          <End />
        </div>
      </div>
    </>
  );
}
