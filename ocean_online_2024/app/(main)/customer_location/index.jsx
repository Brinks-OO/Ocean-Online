import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { Menu } from "primereact/menu";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import DataTableLazyLoadDemo from "./dataTable";
import DataTableNewSave from "./dataTableNew";
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from "next/link";     

import { useResizeListener } from "primereact/hooks";
import { Divider } from "primereact/divider";

import SidebarDemo2 from "../../components/Sidebar2";
import { useRouter } from "next/navigation";

export default function CustomerLocation(props) {
  const ref = useRef(null);
  const router = useRouter();
  const { onClickNew, setAllData, allData } = props;
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const cities = [{ name: "Customer Location", code: "CL" }];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [dataForTable, setDataForTable] = useState();
  const [proState, setProviceState] = useState();
  const [disCity, setDistCity] = useState();
  const [selectServiceType, setSelectServiceType] = useState([]);
  const [locationNamefil, setLocationNameFil] = useState([]);
  const [mode, setMode] = useState(false);
  const [onRefresh, setRefresh] = useState(false);

  const Bitems = [{ label: 'Administration', template: () => <span>Administration</span> }, { label: 'Standard Table', template: () => <span>Standard Table</span> }, { label: 'CustomerLocation', template: () => <span className="font-bold">Customer Location</span> }];
  const Bhome = { icon: 'pi pi-home', url: '/home',template: () => <Link href="/home" className="text-white"><i className="pi pi-home"></i> </Link>}

  useEffect(() => {
    setDataForTable(allData?.tab4);
  }, []);

  useEffect(() => {
    setSelectServiceType()
    setProviceState()
    setDistCity()
  }, [onRefresh]);

  const toggleState = (e, mode) => {
    if (mode === "collapse") {
      setMode(true);
    } else {
      setMode(false);
    }
  };

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
  }, [eventData.height]);

  useEffect(() => {
    const element2 = document.getElementById("mainPageCuslo");
    if (element2) {
      const height2 = element2.offsetHeight;

      setHeightContent({ height: height2 });
    }
  }, [heightNav.height, eventData.height]);

  const headerTemplate = (options) => {
    const className = `${options.className} `;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2 p-0">
          <SidebarDemo2 />
          {/* <i className="pi pi-chevron-left ml-2" onClick={() => router.back()} /> */}
          {/* <Button
            icon="pi pi-chevron-left"
            className="w-2rem h-2rem"
            onClick={() => router.back()}
            size="medium"
          /> */}
          <BreadCrumb model={Bitems} home={Bhome} className="bg-primary text-white p-0 border-none"/>
          {/* <span className="font-bold">Customer Location</span> */}
        </div>
        <div className="flex flex-row">

          <div>{options.togglerElement}</div>
          {/* <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-filter-slash" onClick={() => {options.togglerElement} }></i></button></div> */}
          <div><button className="p-panel-header-icon p-link mr-2 text-white"><i className="pi pi-times" onClick={() => router.push('/home')}></i></button></div>
        </div>
      </div>
    );
  };
  const serviceTypeData = [
    {
      id: "1",
      name: "Pick Up",
    },
    {
      id: "2",
      name: "Delivery",
    },
  ];

  const country = [
    { name: "Thailand", code: "THA" },
    { name: "United States", code: "US" },
  ];
  const city = [
    { name: "Bangkok", code: "BKK" },
    { name: "Texas", code: "TX" },
  ];

  const onRefreshClick = () => {
    setRefresh(!onRefresh);
  }

  return (
    <>
      <div
        className=""
        id="mainPageCuslo"
        style={{ height: `${eventData.height}px` }}
      >
        <Panel
          ref={ref}
          header="Customer Location "
          headerTemplate={headerTemplate}
          toggleable
          collapseIcon="pi pi-filter-slash"
          expandIcon="pi pi-filter"
          onExpand={(e) => toggleState(e, "expand")}
          onCollapse={(e) => toggleState(e, "collapse")}
          className=""
          id="panel-cuslo"
        // className="bg-primary border-200 border-top-none border-noround border-2"
        >
          <div className="flex flex-row align-items-center justify-content-between">
            {/* <div>
              <span>Table :</span>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a Table"
                className="ml-2 w-full md:w-16rem border-1"
                showClear
                tooltip="Select a Table" tooltipOptions={{ position: 'top' }}
                style={{fontSize:"16px", lineHeight:"8px"}}
                
              />
            </div> */}
            {/* <div className="col-4 mt-2"> */}
            <span className="p-float-label">
              <Dropdown
                id="customer"
                //   value={value1}
                className="w-full border-1"
                onChange={(e) => setSelectedCity(e.value)}
                value={selectedCity}
                options={cities}
                optionLabel="name"
                showClear
                // style={{ height: "38px"}}

              />
              <label htmlFor="customer">Table</label>
            </span>
          {/* </div> */}

            {/* <Button
              className="h-2rem p-2 my-1  fonts-bold"
              size="medium"
              onClick={() => onClickNew(true)}
            >
              <i className="pi pi-plus pr-2 text-xs" />
              New
            </Button> */}
            <Button
              className="justify-content-center p-2"
              label="New"
              icon="pi pi-plus"
              size="small"
              onClick={() => onClickNew(true)}
              tooltip="New" tooltipOptions={{ position: 'top' }}
            />
          </div>
          <Divider className="" type="solid" />
          <div>
            <div className=" grid nested-grid">
              <div className="col-10 pb-0 pt-0">
                <div className="grid">
                  <div className="col-3 ">
                    <Dropdown
                      optionLabel="name"
                      placeholder="Select a Country"
                      className="w-full  border-1 p-inputtext-sm"
                      showClear
                      size="medium"
                      tooltip="Select a Country" tooltipOptions={{ position: 'top' }}
                      // style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-3">
                    <Dropdown
                      optionLabel="name"
                      placeholder="Select a Customer"
                      className="w-full border-1"
                      showClear
                      tooltip="Select a Customer" tooltipOptions={{ position: 'top' }}
                      style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-3">
                    {/* <Dropdown
                    optionLabel="name"
                    placeholder="Select Location"
                    className="w-full border-2"
                    showClear
                  /> */}
                    <InputText
                      value={locationNamefil}
                      onChange={(e) => setLocationNameFil(e.target.value)}
                      className="w-full border-1  line-height-1"
                      placeholder="Location Name"
                      tooltip="Location Name" tooltipOptions={{ position: 'top' }}
                      style={{fontSize:"16px", lineHeight:"8px", height: '36px'}}
                    />
                  </div>
                  <div className="col-3 pb-0">
                    <Dropdown
                      options={serviceTypeData}
                      optionLabel="name"
                      placeholder="Select Service Type"
                      className="w-full border-1"
                      tooltip="Select Service Type" tooltipOptions={{ position: 'top' }}
                      showClear
                      value={selectServiceType}
                      onChange={(e) => setSelectServiceType(e.value)}
                      style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-3 pb-0">
                    <Dropdown
                      options={country}
                      optionLabel="name"
                      placeholder="Select Province/State"
                      className="w-full border-1"
                      showClear
                      value={proState}
                      onChange={(e) => setProviceState(e.value)}
                      tooltip="Select a Province/State" tooltipOptions={{ position: 'top' }}
                      style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-3 pb-0">
                    <Dropdown
                      options={city}
                      optionLabel="name"
                      placeholder="Select District/City"
                      className="w-full border-1"
                      showClear

                      value={disCity}
                      onChange={(e) => setDistCity(e.value)}
                      tooltip="Select a District/City" tooltipOptions={{ position: 'top' }}
                      style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-3 flex align-content-start pb-0">
                    <Checkbox
                    id="check01"
                      inputId="check01"
                      name="pizza"
                      value="disable"
                      className=""
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      tooltip="Checkbox" tooltipOptions={{ position: 'top' }}
                      style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                    <label htmlFor="check01" className="ml-2">
                      Include Disable
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-2 pb-0">
                <div className="grid">
                  <div className="col-6 pt-0">
                    <Button
                      className="w-full justify-content-center p-2 "
                      label="Refresh"
                      icon="pi pi-refresh"
                      onClick={(e) => onRefreshClick()}
                      size="small"
                      // style={{ marginTop: "3px" }}
                      tooltip="Refresh" tooltipOptions={{ position: 'top' }}
                      // style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                  <div className="col-6 pt-0">
                    <Button
                      className="w-full justify-content-center p-2"
                      label="Export"
                      icon="pi pi-file-export"
                      size="small"
                      // style={{ marginTop: "3px" }}
                      tooltip="Export" tooltipOptions={{ position: 'top' }}
                      // style={{fontSize:"16px", lineHeight:"8px"}}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </Panel>

        {/* {selectedCity && */}
        {/* <div className="border-200 border-1 border-top-none border-noround border-black-alpha-20 border-2">
          <Button
            className="h-2rem p-2 my-1 mx-2"
            size="small"
            onClick={() => onClickNew(true)}
          >
            <i className="pi pi-plus pr-2 text-xs" />
            New
          </Button>
        </div> */}
        {/* } */}

        {/* {selectedCity && */}

        <div
          // style={{ marginTop: "7px" }}
          className=" border-200 border-1 border-top-none border-noround border-black-alpha-20 border-1"
        >
          {/* <div className="px-3 py-3 grid nested-grid">
            <div className="col-10">
              <div className="grid">
                <div className="col-3">
                  <Dropdown
                    optionLabel="name"
                    placeholder="Select a Country"
                    className="w-full  border-2"
                    showClear
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    optionLabel="name"
                    placeholder="Select a Customer"
                    className="w-full border-2"
                    showClear
                  />
                </div>
                <div className="col-3">
                  <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full border-2"
                    placeholder="Location"
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    options={serviceTypeData}
                    optionLabel="name"
                    placeholder="Select Service Type"
                    className="w-full border-2"
                    showClear
                    value={selectServiceType}
                    onChange={(e) => setSelectServiceType(e.value)}
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    optionLabel="name"
                    placeholder="Select Province/State"
                    className="w-full border-2"
                    showClear
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    optionLabel="name"
                    placeholder="Select District/City"
                    className="w-full border-2"
                    showClear
                  />
                </div>
                <div className="col-3 flex align-content-start">
                  <Checkbox
                    inputId="check01"
                    name="pizza"
                    value="disable"
                    className=""
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                  />
                  <label htmlFor="check01" className="ml-2">
                    Include Disable
                  </label>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="grid">
                <div className="col-6">
                  <Button
                    className="w-full justify-content-center"
                    label="Refresh"
                    icon="pi pi-refresh"
                  />
                </div>
                <div className="col-6">
                  <Button
                    className="w-full justify-content-center"
                    label="Export"
                    icon="pi pi-file-export"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="border-top-none border-black-alpha-20">
            {/* <DataTableLazyLoadDemo mode={mode}/> */}
            <DataTableNewSave
              dataForTable={dataForTable}
              allData={allData}
              filter={selectServiceType}
              filter2={proState}
              filter3={disCity}
              filter4={locationNamefil}
              mode={mode}
              onRefresh={onRefresh}
            />
          </div>
        </div>

        {/* <div
          style={{}}
          className=" border-200 border-1 border-top-none border-noround border-round-bottom border-black-alpha-20 border-2"
        >
          <div className="border-top-2 border-black-alpha-20">
            <DataTableLazyLoadDemo />
            <DataTableNewSave dataForTable={dataForTable} filter={selectServiceType} /> 
          </div>
        </div> */}
        {/* } */}
      </div>
    </>
  );
}
