
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

import { InputText } from 'primereact/inputtext';

export default function RemarkPage() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    return (
        <>
            <div className="flex justify-content-center pt-3 row-gap-4 flex-column w-full">
                <div className=" flex justify-content-center">
                    <div className="w-8">

                        <span className="p-float-label w-full">
                            <InputTextarea id="description" className="w-full" value={value} onChange={(e) => setValue(e.target.value)} rows={10} cols={100} />
                            <label htmlFor="description">General Remarks</label>
                        </span>
                    </div>

                </div>
                <div className=" flex justify-content-center">
                    <div className="w-8">
                        <span className="p-float-label">
                            <InputTextarea id="description" className="w-full" value={value2} onChange={(e) => setValue2(e.target.value)} rows={10} cols={100} />
                            <label htmlFor="description">Restrictions</label>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-content-center pt-4 gap-4 w-full">
                <div className=" flex justify-content-end  w-full">
                    <div className="w-8">

                        <span className="p-float-label w-full">
                            <InputText id="username" className="w-full" value={value3} onChange={(e) => setValue3(e.target.value)} />
                            <label htmlFor="username">Activation Code</label>
                        </span>
                    </div>

                </div>
                <div className=" flex w-full justify-content-start ">
                    <div className="w-8">

                        <span className="p-float-label w-full">
                            <InputText id="username" className="w-full" value={value4} onChange={(e) => setValue4(e.target.value)} />
                            <label htmlFor="username">Duress Code</label>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}
