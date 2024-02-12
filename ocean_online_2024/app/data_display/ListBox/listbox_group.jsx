
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function ListBoxGroupDemo() {
    const [selectedCity, setSelectedCity] = useState(null);

    console.log('selectedCity', selectedCity)
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <>
        <h1>List Box (filter, group)</h1>
            <div className="card flex justify-content-center">
                <ListBox filter multiple value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                    optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
            </div>
        </>
    )
}
        