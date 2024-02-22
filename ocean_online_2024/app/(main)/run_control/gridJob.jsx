"use client";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react'
import { mockRunControl } from './mock';
import { ContextMenu } from 'primereact/contextmenu';

function GridJob() {

  const [jobOnRun, setJobOnRun] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cm = useRef(null);

  const menuModel = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
  ];

  useEffect(() => {
    var dat1 = mockRunControl.getJobOnRun('4d948591-0807-a018-9fed-b0ef1c003159')[0].Jobs;
    // console.log(mockRunControl.getJobOnRun('4d948591-0807-a018-9fed-b0ef1c003159').Jobs)
    setJobOnRun(dat1)
    // setJobOnRun(mockRunControl.getJobOnRun('4d948591-0807-a018-9fed-b0ef1c003159').Jobs)
    // ProductService.getProductsData().then((data) => setCustomers(data));
  }, []);

  const viewProduct = (product) => {
    console.log("view")
  };

  const deleteProduct = (product) => {
    console.log("delete")
  };

  function handleOnSelectionChange(e) {
    setSelectedJob(e.value)
  }


  function onDragStart(ev) {
    console.log(selectedJob);
    ev.dataTransfer.setData('data', JSON.stringify(selectedJob));
    ev.dataTransfer.effectAllowed = 'movecopy';
    ev.target = '<></>'
    console.log(ev)
  }



  const defaultBody = (rowData) => {
    debugger;
    return (
      <div className="flex align-items-center gap-2">
        <div>{{}}</div>
      </div>
    );
  };

  function openContextMenu(e) {
    // console.log(e)
    cm.current.show(e.originalEvent)
  }

  function bodyIconContextMenu(rowData) {
    return (
      <>
        <div>
          <i className="pi pi-bars" onClick={openContextMenu}></i>
        </div>
      </>
    )
  }

  return (
    <>
      <div style={{
        width: '1611px',
        overflow: 'hidden'
      }}>
        <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
        <DataTable
          size='small'
          value={jobOnRun}
          selectionMode={'checkbox'}
          selection={selectedJob}
          onSelectionChange={handleOnSelectionChange}
          dataKey="Jobs[0].Guid"
          scrollable
          scrollHeight="76vh"
          id='drag'
          draggable={true}
          onDragStart={onDragStart}
          onContextMenu={openContextMenu}
          contextMenuSelection={selectedProduct}
          onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
          columnResizeMode="expand"
          resizableColumns
          showGridlines
          stripedRows
        >
          <Column style={{ minWidth: '50px' }} body={bodyIconContextMenu} ></Column>
          <Column selectionMode="multiple" style={{ minWidth: '50px' }}></Column>
          <Column style={{ minWidth: '50px' }}></Column>
          <Column style={{ minWidth: '50px' }}></Column>
          <Column field="SeqIndex" header="Seq" style={{ minWidth: '50px' }}></Column>
          <Column field="JobNo" header="Job ID" style={{ minWidth: '100px' }}></Column>
          <Column field="ServiceJobTypeNameAbb" header="Type" style={{ minWidth: '100px' }}></Column>
          <Column field="JobStatus" header="Job Status" style={{ minWidth: '200px' }}></Column>
          <Column field="ActionFlag" header="Action" style={{ minWidth: '100px' }}></Column>
          <Column field="LOBAbbrevaitionName" header="LOB" style={{ minWidth: '100px' }}></Column>
          <Column field="STC" header="STC" style={{ minWidth: '100px' }}></Column>
          <Column field="MachineID" header="Machine ID" style={{ minWidth: '100px' }}></Column>
          <Column field="LocationName" header="Location" style={{ minWidth: '300px' }}></Column>
          <Column field="LocationAddress" header="Location Address" style={{ minWidth: '200px' }}></Column>
          <Column field="Country" header="Province/State" style={{ minWidth: '100px' }}></Column>
          <Column field="District" header="District/City" style={{ minWidth: '100px' }}></Column>
          <Column field="RouteGroupDetailName" header="Route Group" style={{ minWidth: '100px' }}></Column>
          <Column field="WindowsTimeServiceTimeStart" header="Time" style={{ minWidth: '100px' }}></Column>
          <Column field="ActualTime" header="Actual Time" style={{ minWidth: '100px' }}></Column>
          <Column field="UserModifed" header="Modify By" style={{ minWidth: '100px' }}></Column>
        </DataTable>
      </div>
    </>
  )
}

export default GridJob
