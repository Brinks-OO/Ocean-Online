
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function ToggleButtonDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <>
        <h1>Toggle Button</h1>
        <div className="card flex justify-content-center">
            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
        </>
    );
}
        