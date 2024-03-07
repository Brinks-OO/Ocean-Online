import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';

function Toolbar(props) {

    const [date, setDate] = useState(new Date);
    const [checked, setChecked] = useState(false);
    const [days, setDays] = useState(7);
    const [selectedJob, setSelectedJob] = useState({ name: 'Job', code: 'J' });
    const [selectedSystem, setSelectedSystem] = useState({ name: 'Both', code: 'B' });
    const system = [
        { name: 'Ocean CT', code: 'OCT' },
        { name: 'Starfish', code: 'SF' },
        { name: 'Both', code: 'B' },
    ]
    const jobList = [
        { name: 'Job', code: 'J' },
        { name: 'Service Stop', code: 'SS' },
        { name: 'Vehicle Stop', code: 'VS' },
    ];

    function refreshPage() {
        props.onRefreshPage();
    }


    return (
        <>
            <div className="flex flex-wrap  gap-3 p-fluid pt-5 pl-2 pr-2 pb-3">
                {/* <div className="flex justify-items-center align-items-center h-2rem">
                    <Button className='h-2rem text-sm p-2' label="Refresh" icon="pi pi-refresh" onClick={refreshPage} />
                </div> */}
                {/* <div className="flex justify-items-center align-items-center h-2rem">
                    <label>Work Date</label>
                </div> */}
                <div className="flex h-2rem">
                    <span className="p-float-label">
                        <div className="p-inputgroup h-2rem">
                            <InputText id='brinkSite' placeholder="Please Select..." value='Tum test' />
                            <Button icon="pi pi-search" className="p-button-primary" style={{ borderRadius: "0px 5px 5px 0px" }} />
                            <label htmlFor="brinkSite">Brink's Site</label>
                        </div>
                    </span>
                </div >
                <div className="flex h-2rem">
                    <span className="p-float-label">
                        <div className="flex h-2rem">
                            <Calendar id='test' value={date} onChange={(e) => setDate(e.value)} showIcon className='md:w-16rem' />
                            <label htmlFor="test">Work Date</label>
                        </div>
                    </span>
                </div>
                <div className="flex justify-items-center align-items-center h-2rem flex-column" style={{
                    position: 'relative',
                    top: '-21px',
                    fontSize: '12px'
                }}>
                    <p style={{
                        margin: '0px 0px 10px 0px',
                        padding: 0
                    }}>Over Night</p>
                    <div>
                        <Checkbox id='overNight' onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    </div>


                </div>
                <div className="flex h-2rem">
                    <span className="p-float-label">
                        <div className="flex h-2rem">
                            <InputNumber id='days' inputId="minmax-buttons" value={days} onValueChange={(e) => setDays(e.value)} mode="decimal" min={0} max={100} className='md:w-4rem' disabled={!checked} />
                            <label htmlFor="days">Days</label>
                        </div>
                    </span>
                </div>

                <div className="flex h-2rem">
                    <div className="flex justify-content-center">
                        <span className="p-float-label">
                            <div className="flex h-2rem">
                                <Dropdown id='category' select={selectedSystem} value={selectedSystem} onChange={(e) => setSelectedSystem(e.value)} options={system} optionLabel="name"
                                    placeholder="Please Select..." className=" md:w-10rem " style={{ fontSize: "16px", lineHeight: "8px" }} />
                                <label htmlFor="category">Category</label>
                            </div>
                        </span>
                    </div>
                </div>


                {/* <div className="flex justify-items-center align-items-center h-2rem">
                    <label>Brink's Site</label>
                </div> */}

                <div className="flex justify-items-center align-items-center h-2rem">
                    <Button className='h-2rem text-sm p-2' label="Refresh" icon="pi pi-refresh" onClick={refreshPage} />
                </div>
                <div className="flex flex-grow-1 justify-content-end justify-end h-2rem">
                    <div className="flex justify-content-center">
                        <span className="p-float-label">
                            <div>
                                <Dropdown id='displayJob' value={selectedJob} onChange={(e) => setSelectedJob(e.value)} options={jobList} optionLabel="name"
                                    placeholder="Display : Job" className="md:w-10rem " style={{ fontSize: "16px", lineHeight: "8px" }} />
                                <label htmlFor="displayJob">Display</label>
                            </div>
                        </span>

                    </div>
                    <div className="flex justify-items-end  align-items-center h-2rem ml-2 tooltip-info-status-job"
                        data-pr-position="left" data-pr-my="right top">
                        <i className="pi pi-info-circle text-2xl font-bold text-blue-500" ></i>
                    </div>
                </div>
            </div >
            <Tooltip target=".tooltip-info-status-job"  >
                <ul style={{
                    listStyle: 'none',
                    listStylePosition: 'inside',
                    padding: 0,
                    margin: 0,
                    background: '#fff'
                }}>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Cancel Jobs</li>
                    <li style={{ color: 'var(--red-300)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Unable To Service</li>
                    <li style={{ color: 'var(--yellow-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Delay Time</li>
                    <li style={{ color: 'var(--blue-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Next Stop</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Crew Break</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Dolphin not sync yet</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Dolphin sync completed</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Dolphin job done</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Current Date</li>
                    <li style={{ color: 'var(--red-500)', border: '1px solid #000', background: '#fff', padding: '4px' }}>Over Night</li>
                </ul>
            </Tooltip>
        </>


    )
}

export default Toolbar
