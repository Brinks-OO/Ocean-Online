import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

function Toolbar() {

    const [date, setDate] = useState(new Date);
    const [checked, setChecked] = useState(false);
    const [value3, setValue3] = useState(25);
    const [selectedJob, setSelectedJob] = useState('J');
    const [selectedSystem, setSelectedSystem] = useState('Both');
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
    return (
        <>
            <div className="flex flex-wrap gap-3 p-fluid p-2 ">
                <div className="flex justify-items-center align-items-center h-2rem">
                    <Button className='h-2rem text-sm p-2' label="Refresh" icon="pi pi-refresh" />
                </div>
                <div className="flex justify-items-center align-items-center h-2rem">
                    <label>Work Date</label>
                </div>
                <div className="flex h-2rem">
                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon className='md:w-14rem'/>
                </div>
                <div className="flex justify-items-center align-items-center h-2rem">
                    <div>
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    </div>
                    <div className='ml-2'>
                        <label>Over Night</label>
                    </div>
                </div>
                <div className="flex h-2rem">
                    <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} className='md:w-8rem'/>
                </div>
                <div className="flex justify-items-center align-items-center h-2rem">
                    <label>Brink's Site</label>
                </div>
                <div className="flex h-2rem">
                    <div className="p-inputgroup">
                        <InputText placeholder="Please Select..." />
                        <Button icon="pi pi-search" className="p-button-primary" />
                    </div>
                </div>
                <div className="flex h-2rem">
                    <div className="flex justify-content-center">
                        <Dropdown select={selectedSystem} value={selectedSystem} onChange={(e) => setSelectedSystem(e.value)} options={system} optionLabel="name"
                            placeholder="Please Select..." className=" md:w-10rem " style={{ fontSize: "16px", lineHeight: "8px" }} />
                    </div>
                </div>
                <div className="flex flex-grow-1 justify-content-end justify-end h-2rem">
                    <div className="flex justify-content-center">
                        <Dropdown value={selectedJob} onChange={(e) => setSelectedJob(e.value)} options={jobList} optionLabel="name"
                            placeholder="Display : Job" className="md:w-10rem " style={{ fontSize: "16px", lineHeight: "8px" }} />
                    </div>
                    <div className="flex justify-items-center  align-items-center h-2rem ml-2">
                        <i className="pi pi-info-circle text-2xl font-bold text-blue-500" ></i>
                    </div>
                </div>

            </div>

        </>


    )
}

export default Toolbar
