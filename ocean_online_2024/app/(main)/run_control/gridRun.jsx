"use client";
import { MultiSelect } from 'primereact/multiselect';
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../../services/CustomerService';


function GridRun() {
  const gridItem = [
    {
      "Guid": "32c7f0a5-5450-08b4-b87e-3f5f7d5385f7",
      "MasterRunResourceShift": 1,
      "VehicleNumber": "00001",
      "MasterRouteGroup_Detail_Guid": "d3dbd06f-71c5-6357-070f-6feb3c1f1bfa",
      "MasterRouteGroupDetailName": "CP-001",
      "MasterRouteGroupName": "Canopy",
      "ModeOfTransport": "Vehicle",
      "RunResourceDailyStatusID": 3,
      "RunResourceDailyStatusName": "Closed Run",
      "TotalJobInRun": 1,
      "TotalJobNotSync": 1,
      "MasterRunResource_Guid": "a036a512-896a-4bdc-bd94-aaabd088c973",
      "VehicleNumberFullName": "00001",
      "WorkDate": "/Date(1708362000000)/",
      "strWorDate": "20-02-2024",
      "MasterGroupGuid": "89a3f8f9-6716-48a5-a00a-a1275150f4be",
      "ModeOfTransportGuid": "5076ef79-0c77-42c6-8737-7eb39cf1bacc",
      "DailyStatusID": 3,
      "DailyStatusName": "Closed Run",
      "PathPicModeOfTransport": "../Images/RunControl/vehicle_C_not_sync.png",
      "FlagUseMobile": 1,
      "FlagOverNight": false,
      "DetailRun": "../images/CrewManagement/Crew.png|CC|990009|Super  Nova|CC",
      "FlagRouteBalanceDone": false,
      "FlagAlarmLock": false,
      "ModeOfTransportID": 1,
      "LiabilityLimitCurrency_Guid": "82011826-b47d-4747-a533-a89f42decf24",
      "LiabilityLimitCurrencyAbb": "USD",
      "FlagShuttleRun": false,
      "FlagPercentageLiabilityLimitAlert": false
    },
    {
      "Guid": "4d948591-0807-a018-9fed-b0ef1c003159",
      "MasterRunResourceShift": 2,
      "VehicleNumber": "00001",
      "MasterRouteGroup_Detail_Guid": "00152332-3819-a734-c071-ba2030991879",
      "MasterRouteGroupDetailName": "CNPY-001",
      "MasterRouteGroupName": "CNPY",
      "ModeOfTransport": "Vehicle",
      "RunResourceDailyStatusID": 2,
      "RunResourceDailyStatusName": "Dispatch Run",
      "TotalJobInRun": 1,
      "TotalJobNotSync": 1,
      "MasterRunResource_Guid": "a036a512-896a-4bdc-bd94-aaabd088c973",
      "VehicleNumberFullName": "00001 (S2)",
      "WorkDate": "/Date(1708362000000)/",
      "strWorDate": "20-02-2024",
      "MasterGroupGuid": "31fff18f-fb7a-4a81-8432-c8e9b79144d3",
      "ModeOfTransportGuid": "5076ef79-0c77-42c6-8737-7eb39cf1bacc",
      "DailyStatusID": 2,
      "DailyStatusName": "Dispatch Run",
      "PathPicModeOfTransport": "../Images/RunControl/vehicle_D_not_sync.png",
      "FlagUseMobile": 1,
      "FlagOverNight": false,
      "DetailRun": "../images/CrewManagement/Crew.png|CC|IMPORT01|IMPORT01  IMPORT01|CC",
      "FlagRouteBalanceDone": false,
      "FlagAlarmLock": false,
      "ModeOfTransportID": 1,
      "LiabilityLimitCurrency_Guid": "82011826-b47d-4747-a533-a89f42decf24",
      "LiabilityLimitCurrencyAbb": "USD",
      "FlagShuttleRun": false,
      "FlagPercentageLiabilityLimitAlert": false
    },
    {
      "Guid": "57b65efa-1b55-5a7c-1633-ff636e98c5f3",
      "MasterRunResourceShift": 3,
      "VehicleNumber": "00001",
      "MasterRouteGroup_Detail_Guid": "53c689b4-c1b4-7755-f4eb-81d6728b4b8e",
      "MasterRouteGroupDetailName": "R1",
      "MasterRouteGroupName": "Tum Group",
      "ModeOfTransport": "Vehicle",
      "RunResourceDailyStatusID": 2,
      "RunResourceDailyStatusName": "Dispatch Run",
      "TotalJobInRun": 1,
      "TotalJobNotSync": 1,
      "MasterRunResource_Guid": "a036a512-896a-4bdc-bd94-aaabd088c973",
      "VehicleNumberFullName": "00001 (S3)",
      "WorkDate": "/Date(1708362000000)/",
      "strWorDate": "20-02-2024",
      "MasterGroupGuid": "63416f54-5bc9-4154-a924-e5031027dd3e",
      "ModeOfTransportGuid": "5076ef79-0c77-42c6-8737-7eb39cf1bacc",
      "DailyStatusID": 2,
      "DailyStatusName": "Dispatch Run",
      "PathPicModeOfTransport": "../Images/RunControl/vehicle_D_not_sync.png",
      "FlagUseMobile": 1,
      "FlagOverNight": false,
      "DetailRun": "../images/CrewManagement/Crew.png|CC|T0002|Emp12 test last1|CC",
      "FlagRouteBalanceDone": false,
      "FlagAlarmLock": false,
      "ModeOfTransportID": 1,
      "LiabilityLimitCurrency_Guid": "82011826-b47d-4747-a533-a89f42decf24",
      "LiabilityLimitCurrencyAbb": "USD",
      "FlagShuttleRun": false,
      "FlagPercentageLiabilityLimitAlert": false
    },
    {
      "Guid": "66f709ab-4ced-f5fe-d3eb-5ae2874a4aae",
      "MasterRunResourceShift": 1,
      "VehicleNumber": "0003",
      "MasterRouteGroup_Detail_Guid": "e8486d3c-ccec-478c-ab65-baa7e097d47a",
      "MasterRouteGroupDetailName": "TUM-RD 200x10 SRC",
      "MasterRouteGroupName": "TUM SRC",
      "ModeOfTransport": "Vehicle",
      "RunResourceDailyStatusID": 1,
      "RunResourceDailyStatusName": "Ready",
      "TotalJobInRun": 3,
      "TotalJobNotSync": 3,
      "MasterRunResource_Guid": "5be8aa73-1ab4-40d1-a227-c95d66db79fb",
      "VehicleNumberFullName": "0003",
      "WorkDate": "/Date(1708362000000)/",
      "strWorDate": "20-02-2024",
      "MasterGroupGuid": "745ceaa5-dc3b-408b-b5e1-f0b0bebf7468",
      "ModeOfTransportGuid": "5076ef79-0c77-42c6-8737-7eb39cf1bacc",
      "DailyStatusID": 1,
      "DailyStatusName": "Ready",
      "PathPicModeOfTransport": "../Images/RunControl/vehicle_R_mobile.png",
      "FlagUseMobile": 1,
      "FlagOverNight": false,
      "DetailRun": "../images/CrewManagement/Crew.png|CC|990006|SuperManod  Manod|CC",
      "FlagRouteBalanceDone": false,
      "FlagAlarmLock": false,
      "ModeOfTransportID": 1,
      "LiabilityLimitCurrency_Guid": "4e51a9fa-2b5b-4ce1-a52a-7b412fcbff2f",
      "LiabilityLimitCurrencyAbb": "THB",
      "FlagShuttleRun": false,
      "FlagPercentageLiabilityLimitAlert": false
    }
  ]
  const [cities, setCities] = useState([])
  const [gridData, setGridData] = useState([...gridItem])
  const [selectedCities, setSelectedCities] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [expandedRows, setExpandedRows] = useState(gridItem);

  useEffect(() => {
    var newDat = gridItem.map((item) => {
      return {
        name: item.MasterRouteGroupDetailName,
        guid: item.Guid
      }
    })
    setCities(newDat)
  }, []);

  useEffect(() => {
    console.log(selectedProduct);
  }, [selectedProduct])


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
    console.log(JSON.parse(data));
    // ev.target.appendChild(document.getElementById(data));
  }

  function handleOnChangeSelectRun(e) {
    setSelectedCities(e.value)
    var newGrid = [];
    e.value.forEach((item) => {
      let dat = gridData.find((gridItem) => {
        return item.guid === gridItem.Guid;
      })
      if (dat) newGrid.push(dat);
    })
    newGrid.length != 0 ? setGridData((prev) => [...newGrid]) : setGridData((prev) => [...gridItem]);
  }

  return (
    <>
      <div className="flex flex-column w-full">
        <div className="flex align-items-center justify-content-center">
          <MultiSelect

            value={selectedCities}
            onChange={handleOnChangeSelectRun}
            options={cities}
            optionLabel="name"
            filter
            placeholder="=== Please Select ==="
            maxSelectedLabels={3}
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
            style={{  width: '100%' }}
            expandableRowGroups
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowGroupHeaderTemplate={headerTemplate}
            showHeaders={false}
            onDrop={drop}
            onDragOver={allowDrop}
            selectionMode="single"
            selection={selectedProduct}
            onSelectionChange={(e) => setSelectedProduct(e.value)}
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
