"use client";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react'
import { mockRunControl } from './mock';
import { ContextMenu } from 'primereact/contextmenu';
import { Row } from 'primereact/row';

function GridJob(props) {

  // const [jobOnRun, setJobOnRun] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cm = useRef(null);

  const menuModel = [
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
  ];

  useEffect(() => {
    // var dat1 = mockRunControl.getJobOnRun(2);
    // setJobOnRun(dat1)
    console.log(props.gridJobOnRun)
  }, [props.gridJobOnRun]);

  function handleOnSelectionChange(e) {
    setSelectedJob(e.value)
  }


  function onDragStart(ev) {
    ev.dataTransfer.setData('data', JSON.stringify(selectedJob));
    ev.dataTransfer.effectAllowed = 'movecopy';

    const customElement = document.createElement('div');
    customElement.innerHTML = onDragIcon(3);
    document.body.appendChild(customElement);

    ev.dataTransfer.setDragImage(customElement, 0, 0)
    // ev.target.style.opacity = '1';
  }

  function onDragIcon(countItem = 0) {
    return `
        <div style="background-color: #eae27a; color: black; width:150px; text-align:center; font-size:15px;">
          <table>
            <tbody>
              <tr>
                <td>
                  <i class="pi pi-truck"></i>
                  <i style="color:green;" class="pi pi-arrow-left" aria-hidden="true"></i> : <b>${countItem}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        `
  }


  function openContextMenu(e) {
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

  const jobStatusFlag = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        {rowData.FlagJobClose ? <img alt='close' src='/Images/RunControl/job_closed.png' width={16} /> : <img alt='close' src='/Images/RunControl/job_ontruck.png' width={16} />}

      </div>
    );
  };

  function test(e) {
    console.log('test');
    console.log(e.data)
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
          value={props.gridJobOnRun}
          selectionMode={'checkbox'}
          selection={selectedJob}
          onSelectionChange={handleOnSelectionChange}
          dataKey="Guid"
          scrollable
          scrollHeight="74vh"
          id='drag'
          draggable={true}
          onDragStart={onDragStart}
          // dragSelection={true}
          onContextMenu={openContextMenu}
          contextMenuSelection={selectedProduct}
          onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
          columnResizeMode="expand"
          resizableColumns
          showGridlines
          stripedRows
          filterDisplay="row"
        // onRowSelect={test}
        >
          <Column draggable={true} style={{ minWidth: '50px' }} body={bodyIconContextMenu} ></Column>
          <Column draggable={true} selectionMode="multiple" style={{ minWidth: '50px' }}></Column>
          <Column draggable={true} body={jobStatusFlag} style={{ minWidth: '50px' }}></Column>
          <Column draggable={true} style={{ minWidth: '50px' }}></Column>
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

export default GridJob
