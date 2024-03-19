"use client";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react'
import { mockRunControl } from './mock';
import { ContextMenu } from 'primereact/contextmenu';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Tag } from 'primereact/tag';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from './../../services/CarService'
import { useResizeListener } from 'primereact/hooks';

function GridUnassign(props) {

  // const [eventData, setEventData] = useState({ width: 0, height: 0 });

  // const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
  //   listener: (event) => {
  // const grdUnassign = document.querySelector("#grdUnassign>.p-datatable-wrapper")
  // const gridUnAssignContainer = document.querySelector("#gridUnAssignContainer")
  // grdUnassign ? grdUnassign.style.height = `${window.innerHeight - 211}px` : ""
  // gridUnAssignContainer ? gridUnAssignContainer.style.width = `${window.innerWidth - 300}px` : ""
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


  const menu = useRef(null);
  const [loading, setLoading] = useState(true);
  const items = [
    { label: 'Create Adhoc Jobs' },
    { separator: true },
    {
      label: 'Action Job',
      items: [
        { label: 'Cancel Jobs', },
        { separator: true },
        { label: 'Assign To Run', },
        { separator: true },
        { label: 'Change Work Date', },
        { label: 'Automatic assign jobs to Run', },
      ]
    },
    { separator: true },
    {
      label: 'Options',
      items: [
        { label: 'Hide/Show Filter', },
        { label: 'Column Setting', },
      ]
    },
  ];
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedJob, setSelectedJob] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cm = useRef(null);

  const menuModel = [
    { label: 'Edit Job Details' },
    { separator: true },
    { label: 'Assign To Run' },
    { separator: true },
    { label: 'Job Properties' }
  ];

  const optionMenu = useRef(null);

  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.checked && <span className="ml-auto p-1"><i className="pi pi-check" ></i></span>}
    </a>
  );

  const [optionJob, setOptionJob] = useState([
    {
      label: 'Show Interbranch job with missing items',
      checked: false,
      template: itemRenderer,
      command: () => setOptionJob(prev => {
        prev[0].checked = !prev[0].checked
        return prev
      })
    },
    {
      label: 'Show Cancel Jobs',
      checked: false,
      template: itemRenderer,
      command: () => setOptionJob(prev => {
        prev[1].checked = !prev[1].checked
        return prev
      })
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      resizePage();
    }, 300);
  }, [loading])


  useEffect(() => {
    if (props.flagRefreshPage) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [props.flagRefreshPage])

  function handleOnSelectionChange(e) {
    setSelectedJob(e.value)
  }

  useEffect(() => {
    setSelectedJob(null);
    setTimeout(() => {
      resizePage();
    }, 300);
  }, [props.gridUnassign])

  function resizePage() {
    const contentCriteria = document.querySelector(".p-toggleable-content")
    const gridUnAssign = document.querySelector("#grdUnassign>.p-datatable-wrapper");
    if (contentCriteria == null) {
      gridUnAssign ? gridUnAssign.style.height = `${window.innerHeight - 131}px` : ""
      gridUnAssign ? gridUnAssign.style.maxHeight = `${window.innerHeight - 131}px` : ""
    } else {
      gridUnAssign ? gridUnAssign.style.height = `${window.innerHeight - 211}px` : ""
      gridUnAssign ? gridUnAssign.style.maxHeight = `${window.innerHeight - 211}px` : ""
    }
  }



  function onDragStart(ev) {
    if (Array.isArray(selectedJob) && selectedJob.length) {
      // ev.dataTransfer.setData('data', JSON.stringify(selectedJob));
      const dataSelectJob = selectedJob.map(item => {
        return {
          jobGuid: item.Guid,
          masterRunGuid: item.MasterRunResource_Guid
        }
      })
      ev.dataTransfer.setData('data', JSON.stringify(dataSelectJob));
      ev.dataTransfer.setData('from', 2); // 1 from assign, 2 from unassign
      ev.dataTransfer.effectAllowed = 'movecopy';

      const customElement = document.createElement('div');
      customElement.id = 'dragIcon'
      customElement.innerHTML = onDragIcon(selectedJob.length);
      document.body.appendChild(customElement);
      ev.dataTransfer.setDragImage(customElement, 0, 0)
    } else {
      ev.preventDefault();
    }
  }

  function handleOnDragEnd() {
    document.querySelector("#dragIcon").remove();
  }

  function onDragIcon(countItem = 0) {
    return `
        <div style="background-color: #eae27a; color: black; width:100px;height:30px; text-align:center; font-size:15px;">
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
    let colorFlag = 'transparent';
    let textFlag = '';
    switch (rowData.FlagSyncToMobile) {
      case 0:
        colorFlag = "var(--red-500)";
        textFlag = "not sync"
        break;
      case 1:
      case 3:
      case 4:
      case 5:
      case 6:
      case 6:
      case 77:
      case 88:
      case 99:
        colorFlag = "var(--green-500)";
        textFlag = "sync completed"
        break;
      case 2:
        colorFlag = "var(--blue-500)"
        textFlag = "job done"
        break;
      case 7:
        colorFlag = "var(--yellow-400)"
        textFlag = "waiting"
        break;
      default:
        break;
    }
    return (
      <div className="flex align-items-center">
        {/* <Tag value={textFlag} severity={colorFlag} ></Tag> */}
        <Tag value={textFlag} style={{ background: colorFlag }}></Tag>
        {/* {rowData.FlagJobClose ? <img alt='close' src='/Images/RunControl/job_closed.png' width={16} /> : <img alt='close' src='/Images/RunControl/job_ontruck.png' width={16} />} */}
      </div>
    );
  };


  const header = (data) => {
    const dat = data.props.value[0];
    // const runData = mockRunControl.getRunByGuid(dat?.MasterRunResource_Guid || "")[0];
    return (
      <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-sm font-light">
          <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
          <Button size="small" style={{ border: 'none', background: 'transparent', height: '1.7rem' }} onClick={(e) => menu.current.toggle(e)} >Action<i className="pi pi-angle-down"></i></Button>
        </span>
        <span className="text-sm font-light">
          Unassigned Job(s) | Total Job(s): {data?.props?.value?.length} | Total STC:{0} | Total Selected(s): {selectedJob?.length} | Total STC Selected : {0}
        </span>
        <span className="font-light mr-2">
          <div className="flex align-items-center">
            {/* <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={e => setChecked(e.checked)} checked={checked} />
            <label htmlFor="ingredient1" className="ml-2">Show Cancel Jobs.</label> */}
            <i className="pi pi-sliders-h text-xl  text-white" onClick={(e) => optionMenu.current.toggle(e)}></i>

          </div>
        </span>
        <TieredMenu model={optionJob} popup ref={optionMenu} breakpoint="860px" style={{ width: '25rem' }} />
        {/* <span className="text-sm font-light ">
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={e => setChecked(e.checked)} checked={checked} />
            <label htmlFor="ingredient1" className="ml-2">Show Interbranch job with missing items</label>
          </div>
        </span>
        <span className="text-sm font-light ">
          <div className="flex align-items-center">
            <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={e => setChecked2(e.checked)} checked={checked2} />
            <label htmlFor="ingredient1" className="ml-2">Show Cancel Jobs.</label>
          </div>

        </span> */}
      </div>
    )
  };

  // const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
  // const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
  // const [lazyLoading, setLazyLoading] = useState(false);
  // let loadLazyTimeout = null;

  // const loadCarsLazy = (event) => {
  //   !lazyLoading && setLazyLoading(true);

  //   if (loadLazyTimeout) {
  //     clearTimeout(loadLazyTimeout);
  //   }

  //   //simulate remote connection with a timeout
  //   loadLazyTimeout = setTimeout(() => {
  //     let _virtualCars = [...virtualCars];
  //     let { first, last } = event;

  //     //load data of required page
  //     const loadedCars = cars.slice(first, last);

  //     //populate page of virtual cars
  //     Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

  //     setVirtualCars(_virtualCars);
  //     setLazyLoading(false);
  //   }, Math.random() * 1000 + 250);
  // };

  // const loadingTemplate = (options) => {
  //   return (
  //     <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
  //       <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
  //     </div>
  //   );
  // };

  return (
    <>
      <div id='gridUnAssignContainer' style={{
        // width: '1660px',
        width: `${window.innerWidth - 300}px`,
        overflow: 'hidden'
      }}>
        <ContextMenu model={menuModel} ref={cm} style={{ width: '230px' }} onHide={() => setSelectedProduct(null)} />
        {
          loading ?
            <DataTable value={props.gridUnassign} className="p-datatable-striped" header={header} scrollable
              scrollHeight={window.innerHeight - 211}
              pt={{
                // wrapper: {
                //   style: {
                //     scrollbarWidth: 'thin'
                //   }
                // },
                header: {
                  style: {
                    padding: 4,
                    background: 'var(--primary-color)',
                    color: '#fff',
                    fontWeight: 100
                  }
                }
              }}>
              <Column draggable={true} selectionMode="multiple" style={{ minWidth: '50px' }} body={<Skeleton />}></Column>
              <Column draggable={true} style={{ minWidth: '50px' }} body={<Skeleton />} ></Column>
              <Column field="SeqIndex" header="Seq" filter showFilterMenu={false} style={{ minWidth: '50px' }} body={<Skeleton />} ></Column>
              <Column field="JobNo" header="Job ID" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="ServiceJobTypeNameAbb" header="Type" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="JobStatus" header="Job Status" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="ActionFlag" header="Action" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="LOBAbbrevaitionName" header="LOB" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="STC" header="STC" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="MachineID" header="Machine ID" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="LocationName" header="Location" filter showFilterMenu={false} style={{ minWidth: '300px' }} body={<Skeleton />} ></Column>
              <Column field="LocationAddress" header="Location Address" filter showFilterMenu={false} style={{ minWidth: '200px' }} body={<Skeleton />} ></Column>
              <Column field="Country" header="Province/State" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="District" header="District/City" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="RouteGroupDetailName" header="Route Group" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="WindowsTimeServiceTimeStart" header="Time" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="ActualTime" header="Actual Time" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="DepartTime" header="Departune Time" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="UserModifed" header="Modify By" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
              <Column field="Remarks" header="Remarks" filter showFilterMenu={false} style={{ minWidth: '100px' }} body={<Skeleton />} ></Column>
            </DataTable>
            :
            <DataTable
              size='small'
              value={props.gridUnassign}
              selectionMode={'checkbox'}
              selection={selectedJob}
              onSelectionChange={handleOnSelectionChange}
              dataKey="Guid"
              scrollable
              scrollHeight={window.innerHeight - 211}
              id='grdUnassign'
              draggable={true}
              onDragStart={onDragStart}
              onDragEnd={handleOnDragEnd}
              // dragSelection={true}
              onContextMenu={openContextMenu}
              contextMenuSelection={selectedProduct}
              onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
              columnResizeMode="expand"
              resizableColumns
              showGridlines
              stripedRows
              filterDisplay="row"
              header={header}
              // virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 20, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
              pt={{
                // wrapper: {
                //   style: {
                //     scrollbarWidth: 'thin'
                //   }
                // },
                header: {
                  style: {
                    padding: 4,
                    background: 'var(--primary-color)',
                    color: '#fff',
                    fontWeight: 100
                  }
                }
              }}
            >
              {/* <Column draggable={true} style={{ minWidth: '50px' }} body={bodyIconContextMenu} ></Column> */}
              <Column draggable={true} selectionMode="multiple" style={{ minWidth: '50px' }} ></Column>
              <Column draggable={true} body={jobStatusFlag} style={{ minWidth: '50px' }}></Column>
              {/* <Column draggable={true} style={{ minWidth: '50px' }}></Column> */}
              <Column field="SeqIndex" header="Seq" filter showFilterMenu={false} style={{ minWidth: '50px' }}></Column>
              <Column field="JobNo" header="Job ID" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
              <Column field="ServiceJobTypeNameAbb" header="Type" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
              <Column field="JobStatus" header="Job Status" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
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
              <Column field="DepartTime" header="Departune Time" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
              <Column field="UserModifed" header="Modify By" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
              <Column field="Remarks" header="Remarks" filter showFilterMenu={false} style={{ minWidth: '100px' }}></Column>
            </DataTable>
        }

      </div>
    </>
  )
}

export default GridUnassign
