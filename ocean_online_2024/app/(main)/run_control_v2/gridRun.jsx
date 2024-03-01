"use client";
import { MultiSelect } from 'primereact/multiselect';
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { mockRunControl } from './mock';
import { Skeleton } from 'primereact/skeleton';

function GridRun(props) {
  const items = Array.from({ length: 5 }, (v, i) => i);
  const [loading, setLoading] = useState(true);
  const [runDropDown, setRunDropDown] = useState([])
  const [originalGridData, setOriginalGridData] = useState([])
  const [gridData, setGridData] = useState([])
  const [selectedRunDropDown, setSelectedRunDropDown] = useState(null);


  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    var dropDown = mockRunControl.getRunDropDown();
    setRunDropDown(dropDown)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <img alt={rowData.DetailRun} src='/Images/RunControl/Crews.png' width={32} />
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

  return (
    <>
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
          {
            loading ?
              <DataTable value={items} className="p-datatable-striped">
                <Column field="Guid" header="ID" style={{ display: 'none' }}/>
                <Column field="PathPicModeOfTransport" body={<Skeleton />}></Column>
                <Column field="MasterRouteGroupDetailName" body={<Skeleton />}></Column>
                <Column field="DetailRun" body={<Skeleton />}></Column>
              </DataTable>
              :
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
          }
        </div>
      </div>
    </>
  )
}

export default GridRun
