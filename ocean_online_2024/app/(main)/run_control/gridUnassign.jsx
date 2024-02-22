"use client";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react'
import { mockRunControl } from './mock';
import { ContextMenu } from 'primereact/contextmenu';

function GridUnassign() {
  const [jobOnRun, setJobOnRun] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  //   name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  //   'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  //   representative: { value: null, matchMode: FilterMatchMode.IN },
  //   status: { value: null, matchMode: FilterMatchMode.EQUALS },
  //   verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  // });
  const cm = useRef(null);

  const menuModel = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
  ];

  useEffect(() => {
    // var dat1 = mockRunControl.getJobOnRun('4d948591-0807-a018-9fed-b0ef1c003159')[0].Jobs;
    var dat2 = mockRunControl.getUnAssignJob()[0].JobsUnassigned;
    // setJobOnRun(dat1)
    setJobOnRun(dat2)
    // ProductService.getProductsData().then((data) => setCustomers(data));
  }, []);

  const viewProduct = (product) => {
    console.log("view")
  };

  const deleteProduct = (product) => {
    console.log("delete")
  };



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
      <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
      <DataTable
        size='small'
        value={jobOnRun}
        selectionMode={'checkbox'}
        selection={selectedJob}
        onSelectionChange={(e) => setSelectedJob(e.value)}
        dataKey="Jobs[0].Guid"
        scrollable
        scrollHeight="200vh"
        draggable={true}
        onDragStart={onDragStart}
        onContextMenu={openContextMenu}
        contextMenuSelection={selectedProduct}
        onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
        columnResizeMode="expand" resizableColumns
        filterDisplay="row"
        showGridlines
        stripedRows
      >
        <Column style={{ width: '50px' }} body={bodyIconContextMenu}  ></Column>
        <Column selectionMode="multiple" style={{ width: '50px' }}  ></Column>
        <Column style={{ width: '50px' }}></Column>
        <Column style={{ width: '50px' }}></Column>
        <Column field="SeqIndex" header="Seq" style={{ width: '50px' }}></Column>
        <Column field="JobNo" header="Job ID" style={{ width: '100px' }} filter showFilterMenu={false}></Column>
        <Column field="ServiceJobTypeNameAbb" header="Type" style={{ width: '100px' }} filter showFilterMenu={false}></Column>
        <Column field="JobStatus" header="Job Status" style={{ width: '100px' }} filter showFilterMenu={false}></Column>
        <Column field="ActionFlag" header="Action" style={{ width: '100px' }}></Column>
        <Column field="LOBAbbrevaitionName" header="LOB" style={{ width: '100px' }}></Column>
        <Column field="STC" header="STC" style={{ width: '100px' }}></Column>
        <Column field="MachineID" header="Machine ID" style={{ width: '100px' }}></Column>
        <Column field="LocationName" header="Location" style={{ width: '300px' }}></Column>
        <Column field="LocationAddress" header="Location Address" style={{ width: '200px' }}></Column>
        <Column field="Country" header="Province/State" style={{ width: '100px' }}></Column>
        <Column field="District" header="District/City" style={{ width: '100px' }}></Column>
        <Column field="RouteGroupDetailName" header="Route Group" style={{ width: '100px' }}></Column>
        <Column field="WindowsTimeServiceTimeStart" header="Time" style={{ width: '100px' }}></Column>
        <Column field="ActualTime" header="Actual Time" style={{ width: '100px' }}></Column>
        <Column field="UserModifed" header="Modify By" style={{ width: '100px' }}></Column>
      </DataTable>
    </>
  )
}

export default GridUnassign
