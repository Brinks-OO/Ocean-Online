"use client";
import GridRun from './gridRun';
import GridJob from './gridJob';
import GridUnassign from './gridUnassign';
import { Splitter, SplitterPanel } from "primereact/splitter";
import Toolbar from "./toolbar";
import { TabPanel, TabView } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { useEffect, useState } from 'react';

export default function Page() {

  const [contentWidth, setContentWidth] = useState(0);
  const [hideRun, setHideRun] = useState(true);

  useEffect(() => {
    setContentWidth(1000);
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

  function test(){
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
          pt={{ gutterHandler: { className: 'bg-primary', onClick: handleSplitPage } }}
          >
          <SplitterPanel className='flex' size={15} >
            {hideRun ? <></> : <GridRun />}
          </SplitterPanel>
          <SplitterPanel className='flex w-full' size={85} >
            <GridJob />
          </SplitterPanel>
        </Splitter >
      </Panel>
    </>
  );
}
