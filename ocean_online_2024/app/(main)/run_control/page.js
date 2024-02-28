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

export default function Page() {

  const [hideRun, setHideRun] = useState(false);
  const [gridJobOnRun, setGridJobOnRun] = useState([])

  useEffect(() => {
    var dat1 = mockRunControl.getJobOnRun(1);
    setGridJobOnRun(dat1)
  }, [])

  const headerTemplate = (options) => {
    const className = `${options.className} justify-content-space-between`;
    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-bars" />
          <span className="font-bold">Run Control</span>
        </div>
        <div>{options.togglerElement}</div>
      </div>
    );
  };

  function handleSplitPage() {
    console.log('test')
    setHideRun((prev) => !prev);
  }

  function test() {
    console.log('555')
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
          pt={{ gutterHandler: { className: 'bg-primary', onDoubleClick: handleSplitPage } }}
        >
          <SplitterPanel className='flex' size={15} >
            {hideRun ? <></> : <GridRun setGridJobOnRun={setGridJobOnRun}/>}
          </SplitterPanel>
          <SplitterPanel className='flex w-full' size={85} >
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
                <GridJob gridJobOnRun={gridJobOnRun} />
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
                <GridUnassign />
              </TabPanel>
            </TabView>




          </SplitterPanel>
        </Splitter >
      </Panel>
    </>
  );
}
