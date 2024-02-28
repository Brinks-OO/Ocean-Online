"use client";
import { MultiSelect } from 'primereact/multiselect';
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { mockRunControl } from './mock';


function GridRun(props) {

  const [cities, setCities] = useState([])
  const [originalGridData, setOriginalGridData] = useState([])
  const [gridData, setGridData] = useState([])
  const [selectedCities, setSelectedCities] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    var dropDown = mockRunControl.getRunDropDown();
    setCities(dropDown)
    var runResource = mockRunControl.getRun();
    setGridData(runResource);
    setExpandedRows(runResource);
    setOriginalGridData(runResource);
  }, []);


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

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("data");
    console.log(data);
    // ev.target.appendChild(document.getElementById(data));
  }

  function handleOnChangeSelectRun(e) {
    setSelectedCities(e.value)
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
    setSelectedProduct(e.value)
    var indexData = originalGridData.findIndex(item => item?.Guid === e?.value?.Guid)
    var newGrid = mockRunControl.getJobOnRun(indexData+1);
    console.log(newGrid);
    props.setGridJobOnRun(newGrid)
  }

  return (
    <>
      <div className="flex flex-column w-full">
        <div className="flex align-items-center justify-content-center">
          <MultiSelect
            id='selectRun'
            value={selectedCities}
            onChange={handleOnChangeSelectRun}
            options={cities}
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
            onDrop={drop}
            onDragOver={allowDrop}
            selectionMode="single"
            selection={selectedProduct}
            onSelectionChange={handleOnSelectRun}
            showGridlines
          >
            <Column ></Column>
            <Column field="PathPicModeOfTransport" body={carBodyTemplate}></Column>
            <Column field="MasterRouteGroupDetailName" ></Column>
            <Column field="DetailRun" body={employeeBodyTemplate}></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default GridRun
