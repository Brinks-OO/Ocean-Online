
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function SelectButtonDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <>
        <h1>Select Button</h1>
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
        </>
    );
}
        