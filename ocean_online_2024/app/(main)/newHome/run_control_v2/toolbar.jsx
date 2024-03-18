import React, { useRef, useState } from 'react'
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';
import { TieredMenu } from 'primereact/tieredmenu';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



function Toolbar(props) {
    const mockSiteToSelect = {
        th: [
            { id: 1, name: '- Brinks Regina' },
            { id: 2, name: '0010 - Tum_Test' },
            { id: 3, name: '0499 - Phetchaburi' },
            { id: 4, name: '0500 - RAMA 9' },
            { id: 5, name: '0501 - Thailand Cultural Center' },
            { id: 6, name: '0502 - Huai Khwang' },
            { id: 7, name: '0666 - THE 666' },
            { id: 8, name: "0804 - Kang Brink's Site" },
            { id: 9, name: '0834 - Mikko_site' },
            { id: 10, name: "0999 - Kang Brink's Site (Test Brink's Site)" },
            { id: 11, name: '1001 - East Blue' },
            { id: 12, name: '1092 - Stark Tower' },
            { id: 13, name: '1106 - Algorand Mainnet' },
            { id: 14, name: '9989 - Rama OO' },
            { id: 15, name: '9993 - Thonburi' },
        ],
        ca: [
            { id: 16, name: '0001 - NO FLM Service 3' },
            { id: 17, name: '0002 - NCR' },
            { id: 18, name: '0003 - CASHTEC' },
            { id: 19, name: '0007 - Brinks Security' },
        ]
    }
    const menu = useRef(null);
    const [date, setDate] = useState(new Date);
    const [openBrinkSite, setOpenBrinkSite] = useState(false);
    const [products, setProducts] = useState([...mockSiteToSelect.th]);
    const [selectCountry, setSelectCountry] = useState({ name: 'THAILAND', code: 'th' });
    const [selectBrinkCompany, setSelectBrinkCompany] = useState({ name: 'Brink Thailand 1' });
    const [checkboxBrink, setCheckboxBrink] = useState({ id: 2, name: '0010 - Tum_Test' });
    const country = [
        { name: 'THAILAND', code: 'th' },
        { name: 'CANADA', code: 'ca' },
        { name: 'UNITED STATES', code: 'us' },
        { name: 'SPAIN', code: 'sp' },
        { name: 'STARFISH', code: 'st' },
        { name: 'SWITZERLAND', code: 'sw' },
        { name: 'Paris', code: 'pr' }
    ];
    const brinkCompany = {
        th: [
            { name: 'Brink Thailand 1' },
            { name: 'Brink Thailand 2' },
            { name: 'Brink Thailand 3' },
            { name: 'Brink Thailand 4' },
        ],
        ca: [
            { name: 'Brinks Canada 1' },
            { name: 'Brinks Canada 2' },
            { name: 'Brinks Canada 3' },
            { name: 'Brinks Canada 4' },
        ],
        us: [
            { name: 'Brinks United States 1' },
            { name: 'Brinks United States 2' },
            { name: 'Brinks United States 3' },
            { name: 'Brinks United States 4' },
        ],
    }
    const [days, setDays] = useState(7);
    // const [selectedJob, setSelectedJob] = useState({ name: 'Job', code: 'J' });
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.checked && <span className="ml-auto p-1"><i className="pi pi-check" ></i></span>}
        </a>
    );

    const [selectedJob, setSelectedJob] = useState([
        {
            label: 'Job',
            checked: true,
            template: itemRenderer,
            command: () => setSelectedJob(prev => {
                prev[0].checked = true
                prev[1].checked = false
                prev[2].checked = false
                return prev
            })
        },
        {
            label: 'Service Stop',
            checked: false,
            template: itemRenderer,
            command: () => setSelectedJob(prev => {
                prev[0].checked = false
                prev[1].checked = true
                prev[2].checked = false
                return prev
            })
        },
        {
            label: 'Vehicle Stop',
            checked: false,
            template: itemRenderer,
            command: () => setSelectedJob(prev => {
                prev[0].checked = false
                prev[1].checked = false
                prev[2].checked = true
                return prev
            })
        },
    ]);
    const [selectedSystem, setSelectedSystem] = useState({ name: 'Both', code: 'B' });
    const system = [
        { name: 'Ocean CT', code: 'OCT' },
        { name: 'Starfish', code: 'SF' },
        { name: 'Both', code: 'B' },
    ]




    function refreshPage() {
        props.onRefreshPage();
    }

    const footerContent = (
        <div>
            <Button size='small' label="Cancel" icon="pi pi-times" onClick={() => setOpenBrinkSite(false)} className="p-button-text" />
            <Button size='small' label="Submit" icon="pi pi-check" onClick={() => setOpenBrinkSite(false)} autoFocus />
        </div>
    );

    const DialogContent = () => {
        return (
            <>
                <div className="flex pt-5 justify-content-between gap-2">
                    <div className="flex-1 flex justify-content-center ">
                        <span className="p-float-label w-full">
                            <div className="flex ">
                                <Dropdown
                                    id='country'
                                    value={selectCountry}
                                    onChange={(e) => {
                                        setSelectCountry(e.value)
                                        setSelectBrinkCompany(null)
                                    }}
                                    options={country}
                                    optionLabel="name"
                                    placeholder="Please Select..."
                                    className="w-full"
                                    style={{ fontSize: "14px", lineHeight: "8px" }}
                                />
                                <label htmlFor="country"> &nbsp; Country</label>
                            </div>
                        </span>
                    </div>
                    <div className="flex-1 flex justify-content-center ">
                        <span className="p-float-label w-full">
                            <div className="flex ">
                                <Dropdown
                                    id='brinkCompany'
                                    value={selectBrinkCompany}
                                    onChange={(e) => {
                                        setSelectBrinkCompany(e.value)
                                        setProducts([...mockSiteToSelect[selectCountry?.code]]);
                                    }}
                                    options={brinkCompany[selectCountry?.code]}
                                    optionLabel="name"
                                    placeholder="Please Select..."
                                    className=" w-full"
                                    style={{ fontSize: "14px", lineHeight: "8px" }}
                                />
                                <label htmlFor="brinkCompany"> &nbsp;Brink's Company</label>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex pt-3">
                    <DataTable
                        value={products}
                        scrollable
                        scrollHeight="50vh"
                        size='small'
                        showGridlines
                        stripedRows
                        selectionMode={'radiobutton'}
                        selection={checkboxBrink}
                        onSelectionChange={(e) => setCheckboxBrink(e.value)}
                        dataKey="id"
                    >
                        <Column field="select" selectionMode="single" style={{ width: '40px' }}></Column>
                        <Column field="name" header="Name" style={{ width: '480px' }}></Column>
                    </DataTable>
                </div>
            </>
        )
    }

    const headerContent = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="text-sm text-white">Select Brink's Site</span>
        </div>
    );


    return (
        <>
            <Dialog
                headerStyle={{ background: 'var(--primary-color)', padding: "3px 3px 3px 6px", color: 'white' }}
                header={headerContent}
                pt={{
                    closeButtonIcon: {
                        style: {
                            color: 'white'
                        }
                    }
                }}
                visible={openBrinkSite}
                style={{ width: '575px' }}
                onHide={() => setOpenBrinkSite(false)}
                footer={footerContent}

            >
                <DialogContent />
            </Dialog>
            <div className="flex flex-wrap  gap-3 p-fluid pt-5 pl-5 pb-3" style={{
                paddingRight: 28
            }}>
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
                            <Button icon="pi pi-search" className="p-button-primary" style={{ borderRadius: "0px 5px 5px 0px" }} onClick={() => setOpenBrinkSite(true)} />
                            <label htmlFor="brinkSite">Brink's Site</label>
                        </div>
                    </span>
                </div >
                <div className="flex h-2rem">
                    <span className="p-float-label">
                        <div className="flex h-2rem">
                            <Calendar id='test' value={date} onChange={(e) => setDate(e.value)} showIcon className='md:w-16rem' dateFormat="dd, MM yy" />
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
                        <Checkbox id='overNight' onChange={e => props.setChecked(e.checked)} checked={props.checked}></Checkbox>
                    </div>


                </div>
                <div className="flex h-2rem">
                    <span className="p-float-label">
                        <div className="flex h-2rem">
                            <InputNumber id='days' inputId="minmax-buttons" value={days} onValueChange={(e) => setDays(e.value)} mode="decimal" min={0} max={100} className='md:w-4rem' disabled={!props.checked} />
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
                    <div className="flex justify-content-center align-items-center mr-2">
                        {/* <span className="p-float-label">
                            <div>
                                <Dropdown id='displayJob' value={selectedJob} onChange={(e) => setSelectedJob(e.value)} options={jobList} optionLabel="name"
                                    placeholder="Display : Job" className="md:w-10rem " style={{ fontSize: "16px", lineHeight: "8px" }} />
                                <label htmlFor="displayJob">Display</label>
                            </div>
                        </span> */}
                        <i className="pi pi-desktop text-2xl font-bold  text-blue-500 p-link" onClick={(e) => menu.current.toggle(e)}></i>
                    </div>
                    <div className="flex justify-items-end  align-items-center h-2rem ml-2 tooltip-info-status-job"
                        data-pr-position="left" data-pr-my="right top">
                        <i className="pi pi-info-circle text-2xl font-bold  text-blue-500" ></i>
                    </div>
                </div>
            </div >
            <TieredMenu model={selectedJob} popup ref={menu} breakpoint="767px" />
            <Tooltip
                target=".tooltip-info-status-job"
                autoHide={false}
                showDelay={300}
                pt={{
                    text: {
                        className: 'bg-white'
                    }
                }}
            >
                <ul style={{
                    listStyle: 'none',
                    listStylePosition: 'inside',
                    padding: 0,
                    margin: 0,
                    background: '#fff',
                    color: 'gray'
                }}>
                    <li className='text-xs font-bold text-red-500  border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5'>Cancel Jobs</li>
                    <li className='text-xs font-bold text-red-300  border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Unable To Service</li>
                    <li className='text-xs font-bold text-yellow-500 border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Delay Time</li>
                    <li className='text-xs font-bold text-blue-500 border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Next Stop</li>
                    <li className='text-xs font-bold text-white bg-gray-300  border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Crew Break</li>
                    <li className='text-xs font-bold border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' ><span className='bg-red-500'>&emsp;</span> Dolphin not sync yet</li>
                    <li className='text-xs font-bold border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' ><span className='bg-green-500'>&emsp;</span> Dolphin sync completed</li>
                    <li className='text-xs font-bold border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' ><span className='bg-blue-500'>&emsp;</span> Dolphin job done</li>
                    <li className='text-xs font-bold text-white bg-blue-400  border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Current Date</li>
                    <li className='text-xs font-bold text-white bg-red-500  border-1 border-900 mb-1 pt-1 pb-1 pl-1 pr-5' >Over Night</li>
                </ul>
            </Tooltip>

        </>


    )
}

export default Toolbar
