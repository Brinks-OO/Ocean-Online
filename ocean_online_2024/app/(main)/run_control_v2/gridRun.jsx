"use client";
import { MultiSelect } from 'primereact/multiselect';
import React, { useEffect, useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { mockRunControl } from './mock';
import { Skeleton } from 'primereact/skeleton';
import { Tooltip } from 'primereact/tooltip';
import { useResizeListener } from 'primereact/hooks';

function GridRun(props) {

  // const [eventData, setEventData] = useState({ width: 0, height: 0 });

  // const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
  //   listener: (event) => {
  //     const gridRun = document.querySelector("#gridRun>.p-datatable-wrapper")
  //     gridRun ? gridRun.style.height = `${window.innerHeight - 175}px` : ""
  //     setEventData({
  //       width: event.currentTarget.innerWidth,
  //       height: event.currentTarget.innerHeight
  //     });
  //   }
  // });

  // useEffect(() => {
  //   bindWindowResizeListener();
  //   return () => {
  //     unbindWindowResizeListener();
  //   };
  // }, [bindWindowResizeListener, unbindWindowResizeListener]);

  const items = Array.from({ length: 5 }, (v, i) => i);
  const refGridRun = useRef(null);
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (props.overNight) {
      setTimeout(() => {
        const rows = document.querySelectorAll('.over-night');
        rows.forEach(row => {
          row.closest('tr').style.background = "red"
        });
      }, 500);
    }
  }, [props.overNight])


  useEffect(() => {
    if (props?.gridRun?.length != 0) {
      setGridData(props.gridRun);
      const allGroupIndexes = props.gridRun.reduce((indexes, item, index) => {
        if (index === 0 || item.MasterRouteGroupName !== props.gridRun[index - 1].MasterRouteGroupName) {
          indexes.push(item);
        }
        return indexes;
      }, []);
      setExpandedRows([...allGroupIndexes]);
      setOriginalGridData(props.gridRun);
      setTimeout(() => {
        const rows1 = document.querySelectorAll('.shuttle-run');
        rows1.forEach(row => {
          row.closest('tr').style.background = "#6eb542"
        });
        const rows2 = document.querySelectorAll('.over-night');
        rows2.forEach(row => {
          row.closest('tr').style.background = "red"
        });
      }, 1000);
    }
  }, [props.gridRun])

  function handleBeforeShowToolTip(da) {
    const detail = da.target.children[0].alt.split("|")
    setDetailTooptip(prev => ({
      role: detail[1],
      employeeId: detail[2],
      fullname: detail[3],
    }))
  }

  const employeeBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex align-items-center gap-2 custom-tooltip-btn" data-pr-position="top">
          <img alt={rowData.DetailRun} src='/Images/RunControl/Crews.png' width={32} />
        </div>
      </>
    );
  };

  const carBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img alt={rowData.DailyStatusName} src={rowData.PathPicModeOfTransport} width={32} />
      </div>
    );
  };

  const headerTemplate = (data, el) => {
    const customerClass = 'vertical-align-middle ml-2 font-bold line-height-3 ' + (data.FlagOverNight ? "over-night" : "") + " " + (data.FlagShuttleRun ? "shuttle-run" : "");
    return (
      <React.Fragment>
        <span className={customerClass}>{data.MasterRouteGroupName}</span>
      </React.Fragment>
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
    ev.currentTarget.style.background = "#eae27a"
  }


  function onDragLeave(ev) {
    ev.currentTarget.style.background = ""
  }



  function handleDrop(ev) {
    ev.preventDefault();
    var jobsSelectData = JSON.parse(ev.dataTransfer.getData("data"));
    var from = JSON.parse(ev.dataTransfer.getData("from")); // 1 from assign, 2 from unassign
    const runTargetGuid = ev.currentTarget.children[0].innerHTML;
    props.handleJobDropOnRun(runTargetGuid, jobsSelectData, from);
    ev.currentTarget.style.background = ""
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

  useEffect(() => {
    if (props.flagRefreshPage) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [props.flagRefreshPage])

  return (
    <>
      <div style={{
        // width: '1660px',
        width: `300px`,
        overflow: 'hidden'
      }}>
        <Tooltip
          target=".custom-tooltip-btn"
          onBeforeShow={handleBeforeShowToolTip}
          showDelay={300}
          autoHide={false}
        >
          <table id='tooltip' className='text-sm' >
            <thead>
              <tr >
                <th>Role</th>
                <th>EMP ID</th>
                <th>Full Name</th>
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
                  style: { height: '2.5rem', lineHeight: "12px" }
                },
              }}
            />

          </div>
          <div className="flex align-items-center justify-content-center ">
            {
              loading ?
                <DataTable style={{ width: '100%' }} id='gridRun' size='small' value={gridData} className="p-datatable-striped" showGridlines>
                  <Column field="Guid" header="ID" style={{ display: 'none' }} />
                  <Column field="PathPicModeOfTransport" body={<Skeleton />}></Column>
                  <Column field="MasterRouteGroupDetailName" body={<Skeleton />}></Column>
                  <Column field="DetailRun" body={<Skeleton />}></Column>
                </DataTable>
                :
                <DataTable
                  ref={refGridRun}
                  id='gridRun'
                  size='small'
                  value={gridData}
                  rowGroupMode="subheader"
                  groupRowsBy="MasterRouteGroupName"
                  scrollable
                  scrollHeight={window.innerHeight - 175}
                  style={{
                    width: '100%',
                  }}
                  expandableRowGroups
                  expandedRows={expandedRows}
                  onRowToggle={(e) => setExpandedRows(e.data)}
                  rowGroupHeaderTemplate={headerTemplate}
                  showHeaders={false}
                  selectionMode="single"
                  selection={props.selectRun}
                  dataKey="Guid"
                  metaKeySelection={true}
                  onSelectionChange={handleOnSelectRun}
                  showGridlines
                  pt={{
                    // wrapper: {
                    //   style: {
                    //     scrollbarWidth: 'thin'
                    //   }
                    // },
                    bodyRow: {
                      onDrop: handleDrop,
                      onDragOver: allowDrop,
                      onDragLeave: onDragLeave,
                      onMouseOut: onDragLeave
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
      </div>

    </>
  )
}

export default GridRun
