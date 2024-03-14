"use client";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

import dynamic from "next/dynamic";
const SidebarDemo = dynamic(() => import("../../components/Sidebar"));
import NavigationBar from "../customer_location/tabMenu";
import "./style.scss";
import TemplateDemo from "../../data_display/Menu/HomeMenu";
import SidebarDemo3 from "../../components/HomeSideBar";



export default function Layout({ children }) {
  return (
    <>
      {/* <SidebarDemo /> */}
      {/* <div className=""> */}
        <div className="flex">
          <div className="flex" >
            {/* <div className=""> */}

            <TemplateDemo />
            {/* </div> */}
            <SidebarDemo3 />
          </div>

          {/* <NavigationBar /> */}
          <div id="img-bg2" className=" flex-auto px-4 py-4 h-screen">{children}</div>
        </div>
      {/* </div> */}
    </>
  );
}
