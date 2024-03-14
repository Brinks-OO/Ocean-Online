"use client";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./tabMenu";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import DetailTab from "./detailTab";
import CustomerLocationNewPage from "./new";
import CustomerLocation from "./index";
import { useLocalStorage } from 'primereact/hooks';
import { useSessionStorage } from 'primereact/hooks';

import "./style.scss";
export default function Page() {
  const [showNewPage, setShowNewPage] = useState(false);
  const [close, setClose] = useState(false);
  const [detailData, setDetailData] = useState()
  // const [allData, setAllData] = useLocalStorage([
  //   {
  //     tab4: null
  //   },
  //   {
  //     detail: null
  //   }
  // ], 'allData');
  const [allData, setAllData] = useLocalStorage({ tab4: [] }, 'allData');

  // console.log('allData', allData)
  // console.log('detailData', detailData)
  // console.log('showNewPage', showNewPage)


  // function onClickNew(state) {
  //   if (!state) {
  //     setAllData([{
  //       tab4: null
  //     }])
  //   }
    
  //   setShowNewPage(state);
  // }

  function onClickNew(state) {
    if (!state) {
        setAllData({ tab4: [] });
    }
    setShowNewPage(state);
}
  // function onClickSave(state) {
  //   // setAllData([{
  //   //   ...allData.tab4,
  //   //   tab4: detailData
  //   // }])
    
  //   setShowNewPage(state);
  // }

//   function onClickSave(state) {
//     const newTab4 = [...(allData.tab4 || []), detailData]; // สร้างอาเรย์ใหม่โดยเพิ่ม detailData เข้าไป
//     setAllData({ ...allData, tab4: newTab4 }); // อัปเดต allData ด้วยอาเรย์ใหม่
//     setShowNewPage(state);
// }

function onClickSave(state) {
  setAllData({ tab4: [detailData] });
  // setAllData(prevAllData => {
  //     const newTab4 = [...prevAllData?.tab4, detailData];
  //     return { ...prevAllData, tab4: newTab4 };
  // });
  setShowNewPage(state);
}
useEffect(() => {
  setAllData({ tab4: [] },'allData');
}, [])

  return (
    <>
      <div id="customer_location">
        <div>
          {/* <NavigationBar /> */}
        </div>
        <div>
          {showNewPage ? (
            <CustomerLocationNewPage onClickNew={onClickNew} onClickSave={onClickSave} setAllData={setAllData} allData={allData} setDetailData={setDetailData} detailData={detailData}  />
          ) : (
            <CustomerLocation onClickNew={onClickNew} onClickSave={onClickSave} setAllData={setAllData} allData={allData} />
          )}
        </div>
      </div>
    </>
  );
}
