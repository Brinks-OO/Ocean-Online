
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function MultipleSelect() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [selectedCities2, setSelectedCities2] = useState(null);
    const cities2 = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <>
            <h1>Multiple Select</h1>
            <div className="card flex justify-content-center">
                <MultiSelect showClear value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
            </div>

            <div className="card flex justify-content-center">
                <span className="p-float-label w-full md:w-20rem">
                    <MultiSelect filter showClear value={selectedCities2} onChange={(e) => setSelectedCities2(e.value)} options={cities2} optionLabel="name" maxSelectedLabels={3} className="w-full" display="chip"/>
                    <label htmlFor="ms-cities">Select Cities</label>
                </span>
            </div>
        </>
    );
}
        