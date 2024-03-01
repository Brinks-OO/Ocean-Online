"use client";
import GridRun from './gridRun';
import GridJob from './gridJob';
import GridUnassign from './gridUnassign';
import { Splitter, SplitterPanel } from "primereact/splitter";
import Toolbar from "./toolbar";
import { TabPanel, TabView } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { useEffect, useState } from 'react';
import { mockRunControl } from './mock';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const defaultSelect = {
    "Guid": "32c7f0a5-5450-08b4-b87e-3f5f7d5385f7",
  }
  const [hideRun, setHideRun] = useState(false);
  const [gridRun, setGridRun] = useState([]);
  const [selectRun, setSelectRun] = useState({ ...defaultSelect })
  const [gridJobOnRun, setGridJobOnRun] = useState([])
  const [gridUnassign, setGridUnassign] = useState([])
  const [mapRunJob, setMapRunJob] = useState([])

  useEffect(() => {
    var dat1 = mockRunControl.getJobOnRun(1);
    var dat2 = mockRunControl.getUnAssignJob();
    var dat3 = mockRunControl.getRun();
    var dat4 = mockRunControl.getMockJobOnRun();
    setGridJobOnRun(dat1)
    setGridUnassign(dat2)
    setGridRun(dat3)
    setMapRunJob(dat4)
  }, [])

  useEffect(() => {
    const jobOnRun = mapRunJob.filter(item => item?.Guid === selectRun?.Guid);
    if (jobOnRun.length != 0) setGridJobOnRun([...jobOnRun[0].Jobs])
  }, [selectRun])

  const headerTemplate = (options) => {
    const className = `${options.className} justify-content-space-between`;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-bars" />
          <span className="font-bold">Run Control</span>
        </div>
        <div>{options.togglerElement}</div>
        <div><button className="p-panel-header-icon p-link mr-2 text-white" onClick={() => router.push('/home')}><i className="pi pi-times" ></i></button></div>
      </div>
    );
  };

  function handleSplitPage() {
    console.log('test')
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
    if (from == 1) {
      let newData = [];
      let jobOnRunIndex = -1
      jobsSelectData.forEach(jobSelect => {
        jobOnRunIndex = mapRunJob.findIndex(item => item.Guid === jobSelect.masterRunGuid);
        if (jobOnRunIndex != -1) {
          const jobIndex = mapRunJob[jobOnRunIndex].Jobs.findIndex(inItem => inItem.Guid === jobSelect.jobGuid)
          if (jobIndex != -1) {
            mapRunJob[jobOnRunIndex].Jobs[jobIndex].MasterRunResource_Guid = targetRunGuid
            newData.push(mapRunJob[jobOnRunIndex].Jobs[jobIndex])
            mapRunJob[jobOnRunIndex].Jobs.splice(jobIndex, 1);
          }
        }
      })
      const targetRunIndex = mapRunJob.findIndex(item => item.Guid === targetRunGuid)
      mapRunJob[targetRunIndex].Jobs = [...mapRunJob[targetRunIndex].Jobs, ...newData]
      setGridJobOnRun([...mapRunJob[jobOnRunIndex].Jobs]);
    } else if (from == 2) {
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

  return (
    <>
      <Panel
        header="Run Control"
        headerTemplate={headerTemplate}
        pt={{
          toggleableContent: {
            style: {
              height: '86vh',
              padding: 0
            }
          },
          content: {
            style: {
              height: '86vh',
              padding: 0
            }
          }
        }}
      >
        <Toolbar />
        <Splitter
          style={{ height: '93%' }}
          pt={{
            gutterHandler: {
              style: { display: 'none' },
              // className: 'bg-primary', 
              onDoubleClick: handleSplitPage
            }
          }}
        >
          <SplitterPanel className='flex' size={13} >
            {hideRun ? <></> : <GridRun gridRun={gridRun} setSelectRun={setSelectRun} selectRun={selectRun} handleJobDropOnRun={handleJobDropOnRun} />}
          </SplitterPanel>
          <SplitterPanel className='flex w-full' size={87} >
            <TabView
              pt={{
                panelContainer: {
                  style: {
                    padding: 0
                  }
                }
              }}
            // pt={{
            //   navContent: {
            //     style: {
            //       height: "2rem",
            //       fontSize: "16px",
            //       lineHeight: "8px"
            //     }
            //   }
            // }}
            >
              <TabPanel header="Job(s)"

              // pt={{
              //   headerTitle: {
              //     style: {
              //       height: "2rem",
              //       fontSize: "16px",
              //       lineHeight: "0px"
              //     }
              //   },
              // }}
              >
                <GridJob gridJobOnRun={gridJobOnRun} handleOnClickUnassignJob={handleOnClickUnassignJob} />
              </TabPanel>
              <TabPanel header="Unassigned Job(s)"
              // pt={{
              //   headerTitle: {
              //     style: {
              //       height: "2rem",
              //       fontSize: "16px",
              //       lineHeight: "0px"
              //     }
              //   },
              // }}
              >
                <GridUnassign gridUnassign={gridUnassign} />
              </TabPanel>
            </TabView>




          </SplitterPanel>
        </Splitter >
      </Panel>
    </>
  );
}
