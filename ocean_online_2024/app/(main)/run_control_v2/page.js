"use client";
import GridRun from './gridRun';
import GridJob from './gridJob';
import GridUnassign from './gridUnassign';
import { Splitter, SplitterPanel } from "primereact/splitter";
import Toolbar from "./toolbar";
import { TabPanel, TabView } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { useEffect, useRef, useState } from 'react';
import { mockRunControl } from './mock';
import SidebarDemo2 from '@/app/components/Sidebar2';
import { Button } from 'primereact/button';
import { useRouter } from "next/navigation";
import { BreadCrumb } from 'primereact/breadcrumb';
import { useResizeListener } from 'primereact/hooks';

export default function Page() {

  const [eventData, setEventData] = useState({ width: 0, height: 0 });

  const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
    listener: (event) => {
      setTimeout(() => {
        resizePage();
      }, 300);
      setEventData({
        width: event.currentTarget.innerWidth,
        height: event.currentTarget.innerHeight
      });
    }
  });

  function resizePage() {
    const contentCriteria = panelRef.current.getContent()
    if (contentCriteria == null) {
      const el = document.querySelector("#splitterContainner")
      el ? el.style.height = `${window.innerHeight - 55}px` : ""

      const gridRun = document.querySelector("#gridRun>.p-datatable-wrapper")
      gridRun ? gridRun.style.height = `${window.innerHeight - 96}px` : ""
      gridRun ? gridRun.style.maxHeight = `${window.innerHeight - 96}px` : ""

      const gridAssign = document.querySelector("#grdAssign>.p-datatable-wrapper")
      const gridContainer = document.querySelector("#gridContainner")
      gridAssign ? gridAssign.style.height = `${window.innerHeight - 131}px` : ""
      gridAssign ? gridAssign.style.maxHeight = `${window.innerHeight - 131}px` : ""
      gridContainer ? gridContainer.style.width = `${window.innerWidth - 300}px` : ""

      const grdUnassign = document.querySelector("#grdUnassign>.p-datatable-wrapper")
      const gridUnAssignContainer = document.querySelector("#gridUnAssignContainer")
      grdUnassign ? grdUnassign.style.height = `${window.innerHeight - 131}px` : ""
      grdUnassign ? grdUnassign.style.maxHeight = `${window.innerHeight - 131}px` : ""
      gridUnAssignContainer ? gridUnAssignContainer.style.width = `${window.innerWidth - 300}px` : ""
    } else {
      const el = document.querySelector("#splitterContainner")
      el ? el.style.height = `${window.innerHeight - 131}px` : ""

      const gridRun = document.querySelector("#gridRun>.p-datatable-wrapper")
      gridRun ? gridRun.style.height = `${window.innerHeight - 175}px` : ""
      gridRun ? gridRun.style.maxHeight = `${window.innerHeight - 175}px` : ""

      const gridAssign = document.querySelector("#grdAssign>.p-datatable-wrapper")
      const gridContainer = document.querySelector("#gridContainner")
      gridAssign ? gridAssign.style.height = `${window.innerHeight - 211}px` : ""
      gridAssign ? gridAssign.style.maxHeight = `${window.innerHeight - 211}px` : ""
      gridContainer ? gridContainer.style.width = `${window.innerWidth - 300}px` : ""

      const grdUnassign = document.querySelector("#grdUnassign>.p-datatable-wrapper")
      const gridUnAssignContainer = document.querySelector("#gridUnAssignContainer")
      grdUnassign ? grdUnassign.style.height = `${window.innerHeight - 211}px` : ""
      grdUnassign ? grdUnassign.style.maxHeight = `${window.innerHeight - 211}px` : ""
      gridUnAssignContainer ? gridUnAssignContainer.style.width = `${window.innerWidth - 300}px` : ""
    }
  }

  useEffect(() => {
    bindWindowResizeListener();
    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);


  const router = useRouter();
  const defaultSelect = {
    // "Guid": "0000f0a5-5450-08b4-b87e-3f5f7d5385f7",
    "Guid": "32c7f0a5-5450-08b4-b87e-3f5f7d5385f7",
  }
  const panelRef = useRef(null)
  const iconPanel = useRef(null)
  const [splitterHeight, setSplitterHeight] = useState(window.innerHeight - 131);
  const [hideRun, setHideRun] = useState(false);
  const [gridRun, setGridRun] = useState([]);
  const [selectRun, setSelectRun] = useState({ ...defaultSelect })
  const [gridJobOnRun, setGridJobOnRun] = useState([])
  const [gridUnassign, setGridUnassign] = useState([])
  const [mapRunJob, setMapRunJob] = useState([])
  const [flagRefreshPage, setFlagRefreshPage] = useState(false);
  const [overNight, setOverNight] = useState(false);

  useEffect(() => {
    var dat1 = mockRunControl.getJobOnRun(0);
    var dat2 = mockRunControl.getUnAssignJob();
    var dat3 = mockRunControl.getRun();
    var dat4 = mockRunControl.getMockJobOnRun();
    setGridJobOnRun(dat1)
    setGridUnassign(dat2)
    setGridRun(dat3)
    setMapRunJob(dat4)
  }, [])

  useEffect(() => {
    if (overNight) {
      setGridRun(mockRunControl.getRunOverNight());
    } else {
      setGridRun(mockRunControl.getRun());
      setSelectRun({ ...defaultSelect })
    }
  }, [overNight])

  useEffect(() => {
    console.log(selectRun);
    const jobOnRun = mapRunJob.filter(item => item?.Guid === selectRun?.Guid);
    let newJobs = []
    if (jobOnRun.length != 0) {
      newJobs = jobOnRun.map((job) => {
        const newJobs = job.Jobs.map((itemJob, index) => {
          return {
            ...itemJob,
            SeqIndex: index + 1,
          }
        })
        return {
          ...job,
          Jobs: [...newJobs]
        }
      })
    }

    // jobOnRun.length != 0 ? setGridJobOnRun([...jobOnRun[0].Jobs]) : setGridJobOnRun([])
    newJobs.length != 0 ? setGridJobOnRun([...newJobs[0].Jobs]) : setGridJobOnRun([])
  }, [selectRun])



  const items = [
    // {
    //   label: "Customer Location",
    //   template: () => <span className="text-white">Customer Location</span>,
    // },
    { label: "New", template: () => <span className="text-white font-bold ">Run Control</span> },
  ];

  const home = { icon: 'pi pi-home', url: '/home', template: () => <i className="pi pi-home cursor-pointer" onClick={() => router.push('/home')}></i> }

  const headerTemplate = (options) => {
    const className = `${options.className} justify-content-space-between`;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          <SidebarDemo2 />
          <BreadCrumb
            model={items}
            home={home}
            className="border-noround border-2 border-primary bg-primary text-white p-0"
          />
          {/* <i className="pi pi-chevron-left ml-2" onClick={() => router.back()} /> */}
          {/* <Button
            icon="pi pi-chevron-left"
            className="w-2rem h-2rem"
            onClick={() => router.back()}
            size="medium"
          /> */}
          {/* <i className="pi pi-bars" /> */}
          {/* <span className="font-bold">Run Control</span> */}
        </div>
        <div>{options.togglerElement}</div>

        <div>
          <button
            className="p-panel-header-icon p-link  text-white"
            onClick={() => {
              panelRef.current.toggle()
              setTimeout(() => {
                const content = panelRef.current.getContent()
                if (content != null) {
                  expandContent();
                } else {
                  collapseContent();
                }
              }, 500);
            }}
          >
            <i ref={iconPanel} className="pi pi-filter-slash" ></i>
          </button>
          <button className="p-panel-header-icon p-link  text-white" onClick={() => router.push('/home')}><i className="pi pi-times" ></i></button>
        </div>
      </div>
    );
  };

  function expandContent() {
    const gridAssign = document.querySelector("#grdAssign>.p-datatable-wrapper")
    const gridUnAssign = document.querySelector("#grdUnassign>.p-datatable-wrapper");
    iconPanel.current.className = 'pi pi-filter'
    // setSplitterHeight('94%')
    const windowHeight = window.innerHeight;
    const el = document.querySelector("#splitterContainner")
    el ? el.style.height = `${windowHeight - 131}px` : ""
    gridAssign ? gridAssign.style.maxHeight = `${windowHeight - 211}px` : ""
    gridAssign ? gridAssign.style.height = `${windowHeight - 211}px` : ""
    gridUnAssign ? gridUnAssign.style.maxHeight = `${windowHeight - 211}px` : ""
    gridUnAssign ? gridUnAssign.style.height = `${windowHeight - 211}px` : ""
    document.querySelector("#gridRun>.p-datatable-wrapper").style.maxHeight = `${windowHeight - 175}px`
    document.querySelector("#gridRun>.p-datatable-wrapper").style.height = `${windowHeight - 175}px`
  }

  function collapseContent() {
    const gridAssign = document.querySelector("#grdAssign>.p-datatable-wrapper")
    const gridUnAssign = document.querySelector("#grdUnassign>.p-datatable-wrapper");
    iconPanel.current.className = 'pi pi-filter-slash'
    // setSplitterHeight('85%')
    const windowHeight = window.innerHeight;
    const el = document.querySelector("#splitterContainner")
    el ? el.style.height = `${windowHeight - 55}px` : ""
    gridAssign ? gridAssign.style.maxHeight = `${windowHeight - 131}px` : ""
    gridAssign ? gridAssign.style.height = `${windowHeight - 131}px` : ""
    gridUnAssign ? gridUnAssign.style.maxHeight = `${windowHeight - 131}px` : ""
    gridUnAssign ? gridUnAssign.style.height = `${windowHeight - 131}px` : ""
    document.querySelector("#gridRun>.p-datatable-wrapper").style.maxHeight = `${windowHeight - 96}px`
    document.querySelector("#gridRun>.p-datatable-wrapper").style.height = `${windowHeight - 96}px`
  }

  function handleSplitPage() {
    setHideRun((prev) => !prev);
  }

  function handleOnClickUnassignJob(job) {
    let newData = [];
    const jobGuid = job.Guid
    const masterRunGuid = job.MasterRunResource_Guid
    const masterRunIndex = mapRunJob.findIndex(item => item.Guid === masterRunGuid)
    const jobIndex = mapRunJob[masterRunIndex].Jobs.findIndex(inItem => inItem.Guid === jobGuid)
    mapRunJob[masterRunIndex].Jobs[jobIndex].MasterRunResource_Guid = "";
    newData.push(mapRunJob[masterRunIndex].Jobs[jobIndex]);
    setGridUnassign(prev => ([...prev, ...newData]));
    mapRunJob[masterRunIndex].Jobs.splice(jobIndex, 1);
    setGridJobOnRun([...mapRunJob[masterRunIndex].Jobs]);
  }

  function handleJobDropOnRun(targetRunGuid, jobsSelectData, from) {
    if (from == 1) { // from job
      let newData = [];
      let jobOnRunIndex = -1
      jobsSelectData.forEach(jobSelect => {
        jobOnRunIndex = mapRunJob.findIndex(item => item.Guid === jobSelect.masterRunGuid);
        if (jobOnRunIndex != -1) {
          const jobIndex = mapRunJob[jobOnRunIndex]?.Jobs.findIndex(inItem => inItem.Guid === jobSelect.jobGuid)
          if (jobIndex != -1) {
            mapRunJob[jobOnRunIndex].Jobs[jobIndex].MasterRunResource_Guid = targetRunGuid
            newData.push(mapRunJob[jobOnRunIndex].Jobs[jobIndex])
            mapRunJob[jobOnRunIndex].Jobs.splice(jobIndex, 1);
          }
        }
      })
      const targetRunIndex = mapRunJob.findIndex(item => item.Guid === targetRunGuid)
      mapRunJob[targetRunIndex].Jobs = [...mapRunJob[targetRunIndex]?.Jobs, ...newData]
      setGridJobOnRun([...mapRunJob[jobOnRunIndex].Jobs]);
    } else if (from == 2) { // from unassign
      jobsSelectData.forEach(jobSelect => {
        const jobUnassignIndex = gridUnassign.findIndex(item => item.Guid === jobSelect.jobGuid)
        const targetRunIndex = mapRunJob.findIndex(item => item.Guid === targetRunGuid)
        gridUnassign[jobUnassignIndex].MasterRunResource_Guid = targetRunGuid;
        mapRunJob[targetRunIndex].Jobs = [...mapRunJob[targetRunIndex].Jobs, { ...gridUnassign[jobUnassignIndex] }]
        gridUnassign.splice(jobUnassignIndex, 1);
        setGridUnassign([...gridUnassign]);
        const selectRunIndex = mapRunJob.findIndex(item => item.Guid === selectRun.Guid);
        setGridJobOnRun([...mapRunJob[selectRunIndex].Jobs]);
      })
    }
  }

  function onRefreshPage() {
    setFlagRefreshPage(true);
    setTimeout(() => {
      setFlagRefreshPage(false);
    }, 200);
  }

  return (
    <>

      <Panel
        ref={panelRef}
        toggleable
        header="Run Control"
        headerTemplate={headerTemplate}
        pt={{
          toggler: {
            style: {
              display: 'none'
            }
          },
          toggleableContent: {
            style: {
              height: '80px',
              padding: 0
            }
          },
          content: {
            style: {
              height: '80px',
              padding: 0,
              border: 'none'
            }
          }
        }}
      >
        <Toolbar onRefreshPage={onRefreshPage} checked={overNight} setChecked={setOverNight} />
      </Panel >
      <Splitter
        id='splitterContainner'
        style={{ height: splitterHeight }}
        pt={{
          gutterHandler: {
            style: { display: 'none' },
            // className: 'bg-primary', 
            onDoubleClick: handleSplitPage
          }
        }}
      >
        <SplitterPanel className='flex' size={13} >
          {hideRun ? <></> : <GridRun gridRun={gridRun} setSelectRun={setSelectRun} selectRun={selectRun} handleJobDropOnRun={handleJobDropOnRun} overNight={overNight} flagRefreshPage={flagRefreshPage} />}
        </SplitterPanel>
        <SplitterPanel className='flex w-full' size={87} >
          <TabView
            pt={{
              panelContainer: {
                style: {
                  padding: 0
                }
              },
              navContainer: {
                style: {
                  height: '2.5rem',
                  // fontSize: "14px",
                  // lineHeight: "8px",
                  // padding:'16px 16px 8px 16px'
                }
              }
            }}
          >
            <TabPanel header="Job(s)"
              pt={{
                headerAction: {
                  style: {
                    padding: '12px 16px 10px 16px'
                  }
                },
              }}
            >
              <GridJob gridJobOnRun={gridJobOnRun} handleOnClickUnassignJob={handleOnClickUnassignJob} flagRefreshPage={flagRefreshPage} overNight={overNight} selectRun={selectRun} />
            </TabPanel>
            <TabPanel header="Unassigned Job(s)"
              pt={{
                headerAction: {
                  style: {
                    padding: '12px 16px 10px 16px'
                  }
                },
              }}
            >
              <GridUnassign gridUnassign={gridUnassign} flagRefreshPage={flagRefreshPage} />
            </TabPanel>
          </TabView>
        </SplitterPanel>
      </Splitter >
    </>
  );
}
