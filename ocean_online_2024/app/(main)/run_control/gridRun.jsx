"use client";
import { MultiSelect } from 'primereact/multiselect';
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { mockRunControl } from './mock';
import { Tooltip } from 'primereact/tooltip';


function GridRun(props) {

  const [runDropDown, setRunDropDown] = useState([])
  const [originalGridData, setOriginalGridData] = useState([])
  const [gridData, setGridData] = useState([])
  const [selectedRunDropDown, setSelectedRunDropDown] = useState(null);
  const [detailTooltip, setDetailTooptip] = useState({
    role: '',
    employeeId: '555',
    fullname: ''
  })

  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    var dropDown = mockRunControl.getRunDropDown();
    setRunDropDown(dropDown)
  }, []);

  useEffect(() => {
    if (props?.gridRun?.length != 0) {
      setGridData(props.gridRun);
      setExpandedRows(props.gridRun);
      setOriginalGridData(props.gridRun);
    }
  }, [props.gridRun])



  const employeeBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img className='custom-tooltip-btn'  alt={rowData.DetailRun} src='/Images/RunControl/Crews.png' width={32} />
      </div>
    );
  };

  const carBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img alt={rowData.DailyStatusName} src={rowData.PathPicModeOfTransport} width={32} />
      </div>
    );
  };

  const headerTemplate = (data) => {
    return (
      <>
        <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.MasterRouteGroupName}</span>
      </>
    );
  };

  const carDetailBodyTemplate = (data) => {
    return (
      <>
        <div className="vertical-align-middle ml-2 text-sm">{data.MasterRouteGroupName}</div>
        <div className="vertical-align-middle ml-2 text-sm ">{data.VehicleNumber}</div>
      </>
    );
  };



  function allowDrop(ev) {
    ev.preventDefault();
  }

  function handleDrop(ev) {
    ev.preventDefault();
    var jobsSelectData = JSON.parse(ev.dataTransfer.getData("data"));
    var from = JSON.parse(ev.dataTransfer.getData("from")); // 1 from assign, 2 from unassign
    const runTargetGuid = ev.currentTarget.children[0].innerHTML;
    props.handleJobDropOnRun(runTargetGuid, jobsSelectData, from);
    // mockRunControl.setJobOnRun(runTargetGuid, jobsSelectData, from);
  }

  function handleOnChangeSelectRun(e) {
    setSelectedRunDropDown(e.value)
    var newGrid = [];
    e.value.forEach((item) => {
      let dat = originalGridData.find((gridItem) => {
        return item.Value === gridItem.Guid;
      })
      if (dat) newGrid.push(dat);
    })
    newGrid.length != 0 ? setGridData((prev) => [...newGrid]) : setGridData((prev) => [...originalGridData]);
  }

  function handleOnSelectRun(e) {
    props.setSelectRun(e.value)
  }

  function handleBeforeShowToolTip(da) {
    const detail = da.target.alt.split("|")
    setDetailTooptip(prev => ({
      role: detail[1],
      employeeId: detail[2],
      fullname: detail[3],
    }))
  }

  return (
    <>
      <Tooltip target=".custom-tooltip-btn" onBeforeShow={handleBeforeShowToolTip}>
        <table id='tooltip' className='text-sm' >
          <thead>
            <tr >
              <th>Role</th>
              <th>EMP ID</th>
              <th>Fullnam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detailTooltip.role}</td>
              <td>{detailTooltip.employeeId}</td>
              <td>{detailTooltip.fullname}</td>
            </tr>
          </tbody>
        </table>
        {/* <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" /> */}
      </Tooltip>
      <div className="flex flex-column w-full">
        <div className="flex align-items-center justify-content-center">
          <MultiSelect
            id='selectRun'
            value={selectedRunDropDown}
            onChange={handleOnChangeSelectRun}
            options={runDropDown}
            optionLabel="Text"
            filter
            placeholder="== Please Select =="
            maxSelectedLabels={1}
            className="w-full"
            pt={{
              root: {
                className: 'h-3rem ',
                style: { lineHeight: "24px" }
              },
              filterContainer: {
                className: 'h-3rem ',
                style: { lineHeight: "24px" }
              },
              filterInput: {
                className: 'h-3rem ',
                style: { lineHeight: "24px" }
              },
              headerCheckboxContainer: {
                className: 'h-3rem ',
                style: { lineHeight: "24px" }
              }
            }}
          />

        </div>
        <div className="flex align-items-center justify-content-center ">
          <DataTable
            size='small'
            value={gridData}
            rowGroupMode="subheader"
            groupRowsBy="MasterRouteGroupName"
            scrollable
            scrollHeight="768px"
            style={{ width: '100%' }}
            expandableRowGroups
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowGroupHeaderTemplate={headerTemplate}
            showHeaders={false}
            // onDrop={drop}
            onDragOver={allowDrop}
            selectionMode="single"
            selection={props.selectRun}
            dataKey="Guid"
            metaKeySelection={true}
            onSelectionChange={handleOnSelectRun}
            showGridlines
            pt={{
              bodyRow: {
                onDrop: handleDrop
              }
            }}
          >
            <Column field="Guid" header="ID" style={{ display: 'none' }} />
            <Column field="PathPicModeOfTransport" body={carBodyTemplate}></Column>
            <Column field="MasterRouteGroupDetailName" body={carDetailBodyTemplate}></Column>
            <Column field="DetailRun" body={employeeBodyTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default GridRun
