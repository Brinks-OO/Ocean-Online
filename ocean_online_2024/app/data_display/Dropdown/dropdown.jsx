import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DropdownDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <>
        <h1>Dropdown</h1>
            <div className="card flex justify-content-center">
                <span className="p-float-label w-full md:w-14rem">
                    <Dropdown inputId="dd-country"  value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name1" placeholder="Select a Country" 
                        filter showClear valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
                    <label htmlFor="dd-country">Select a Country</label>
                </span>
                    
            </div> 
            <div className="card flex justify-content-center">
                <span className="p-float-label w-full md:w-14rem">
                    <Dropdown filter showClear inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                    <label htmlFor="dd-city">Select a City</label>
                </span>
            </div>   
        </>
    )
}
        


