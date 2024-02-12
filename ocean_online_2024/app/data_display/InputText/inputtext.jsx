
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function TextboxFloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <>
        <h1 className="mx-4">Input Float label</h1>
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
        <h1 className="mx-4">Invalid</h1>
        <div className="card flex justify-content-center">
            <InputText className="p-invalid" />
        </div>
        </>
    )
}
        