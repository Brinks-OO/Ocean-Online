import React, { useState, useEffect } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import DetailTab from "./detailTab";
import SiteHandle from "./siteHandle";
import AdditionalService from "./additionalService";
import ServiceHour from "./serviceHour"
import RemarkPage from "./remark"
import Link from "next/link";   
import { useResizeListener } from "primereact/hooks";

export default function CustomerLocationNewPage(props) {
  const { onClickNew, onClickSave, setAllData, allData, setDetailData, detailData } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [eventData, setEventData] = useState({ width: 0, height: 0 });
  const [heightNav, setHeightNav] = useState({ height: 0 });
  const [heightContent, setHeightContent] = useState({ height: 0 });
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
    const element = document.getElementById("navigation_bar_cus_lo");
    if (element) {
      const height = element.offsetHeight;
      setHeightNav({ height: height });
    }
  }, []);

  useEffect(() => {
    const element2 = document.getElementById("contentDetail");
    if (element2) {
      const height2 = element2.offsetHeight;
      setHeightContent({ height: height2 });
    }
  }, [heightNav.height, eventData.height]);

  useEffect(() => {
    bindWindowResizeListener();

    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);
  // const Bitems = [ { label: 'CustomerLocation', template: () => <span className="font-bold">Customer Location</span> }];

  const items = [
    { label: 'Administration', template: () => <span>Administration</span> },
    { label: 'Standard Table', template: () => <span>Standard Table</span> },
    {
      label: "Customer Location",
      template: () => <span className="text-white">Customer Location</span>,
    },
    { label: "New", template: () => <span className="text-white font-bold ">New</span> },
  ];
  // const home = {
  //   label: "Home",
  //   url: "/home",
  //   template: () => <span className="text-white">Home</span>,

  // };
  const home = { icon: 'pi pi-home', url: '/v2/home', template: () => <Link href="/v2/home" className="text-white"><i className="pi pi-home"></i> </Link>}

  return (
    <>
      <div
        className=""
        id="contentDetail"
        style={{ height: `${eventData.height - heightNav.height}px` }}
      >
        <BreadCrumb
          model={items}
          home={home}
          className="border-noround 
          //border-round-top 
          border-2 border-primary bg-primary text-white"
        />
        <div
          className="p-0 flex border-200 border-1 gap-1 py-1 px-1 align-items-center flex-row border-2
          border-black-alpha-20 border-top-none "
        >
          <Button className="h-2rem p-2 my-1 w-5rem" size="small"
            onClick={() => onClickSave(false)}
          >
            <i className="pi pi-save pr-2 text-xs" />
            Save
          </Button>
          <Button className="h-2rem p-2 my-1" size="small">
            <i className="pi pi-save pr-2 text-xs" />
            Save & New
          </Button>
          <Button className="h-2rem p-2 my-1" size="small">
            <i className="pi pi-save pr-2 text-xs" />
            Save & Copy
          </Button>
          <Button className="h-2rem p-2 my-1" size="small">
            <i className="pi pi-save pr-2 text-xs" />
            Save & Close
          </Button>
          <Button
            onClick={() => onClickNew(false)}
            className="surface-400 h-2rem border-400 hover:surface-500"
            size="small"
          >
            <i className="pi pi-times pr-2 text-xs" />
            Close
          </Button>
        </div>
        <div className="  border-200 border-1 border-top-none border-noround border-black-alpha-20 border-2">
          <TabView className="" activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel
              header="Detail"
              contentStyle={{ height: `${heightContent.height - 193}px` }}
            >
              <DetailTab setAllData={setAllData} allData={allData} setDetailData={setDetailData} detailData={detailData} />
            </TabPanel>
            <TabPanel
              header="Site Handle"
              className=""
              contentStyle={{ height: `${heightContent.height - 201}px` }}
            >
              <SiteHandle />
            </TabPanel>
            {/* <TabPanel
              header="Equipment"
              className=""
              contentStyle={{ height: `${heightContent.height - 207}px` }}
            >
            </TabPanel> */}
            <TabPanel
              header="Service Hour"
              contentStyle={{ height: `${heightContent.height - 201}px` }}
            >
              <ServiceHour setAllData={setAllData} allData={allData} />
            </TabPanel>
            <TabPanel
              header="Remark"
              contentStyle={{ height: `${heightContent.height - 201}px` }}
            >
              <RemarkPage />
            </TabPanel>
            <TabPanel
              header="Additional Service"
              contentStyle={{ height: `${heightContent.height - 201}px` }}
            >
              <AdditionalService />
            </TabPanel>

          </TabView>
        </div>
      </div>
    </>
  );
}
