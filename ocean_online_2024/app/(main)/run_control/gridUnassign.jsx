"use client";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react'
import { mockRunControl } from './mock';
import { ContextMenu } from 'primereact/contextmenu';

function GridUnassign() {
  const [unassignJob, setUnassignJob] = useState([]);
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
    var dat2 = mockRunControl.getUnAssignJob();
    // setJobOnRun(dat1)
    setUnassignJob(dat2)
    // ProductService.getProductsData().then((data) => setCustomers(data));
  }, []);

  function onDragStart(ev) {
    ev.dataTransfer.setData('data', JSON.stringify(selectedJob));
    ev.dataTransfer.effectAllowed = 'movecopy';
    ev.target = '<></>'
  }


  function openContextMenu(e) {
    cm.current.show(e.originalEvent)
  }
  function handleOnSelectionChange(e) {
    setSelectedJob(e.value)
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
          value={unassignJob}
          selectionMode={'checkbox'}
          selection={selectedJob}
          onSelectionChange={handleOnSelectionChange}
          dataKey="Guid"
          scrollable
          scrollHeight="74vh"
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
          filterDisplay="row"
        >
          <Column style={{ minWidth: '50px' }} body={bodyIconContextMenu} ></Column>
          <Column selectionMode="multiple" style={{ minWidth: '50px' }}></Column>
          <Column style={{ minWidth: '50px' }}></Column>
          <Column style={{ minWidth: '50px' }}></Column>
          <Column field="SeqIndex" header="Seq" filter showFilterMenu={false} style={{ minWidth: '50px' }}></Column>
          <Column field="JobNo" header="Job ID" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="ServiceJobTypeNameAbb" header="Type" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="JobStatus" header="Job Status" filter showFilterMenu={false} style={{ minWidth: '200px' }}></Column>
          <Column field="ActionFlag" header="Action" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="LOBAbbrevaitionName" header="LOB" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="STC" header="STC" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="MachineID" header="Machine ID" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="LocationName" header="Location" filter showFilterMenu={false} style={{ minWidth: '300px' }}></Column>
          <Column field="LocationAddress" header="Location Address" filter showFilterMenu={false} style={{ minWidth: '200px' }}></Column>
          <Column field="Country" header="Province/State" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="District" header="District/City" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="RouteGroupDetailName" header="Route Group" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="WindowsTimeServiceTimeStart" header="Time" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="ActualTime" header="Actual Time" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
          <Column field="UserModifed" header="Modify By" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
        </DataTable>
      </div>
    </>
  )
}

export default GridUnassign
