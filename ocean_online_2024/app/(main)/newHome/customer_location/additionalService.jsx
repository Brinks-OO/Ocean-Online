import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Tooltip } from "primereact/tooltip";
import { Badge } from "primereact/badge";

import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

import { Dropdown } from "primereact/dropdown";

import { Button } from "primereact/button";

export default function AdditionalService() {
    const categories = [
        {
            name: "Print Receipt (Mandatory for Greece)",
            key: "A",
            noti: "Print Receipt (Mandatory for Greece)",
        },
        {
            name: "Print Receipt for each scanned pickup item",
            key: "M",
            noti: "Print Receipt for each scanned pickup item",
        },
        { name: "Smoke box", key: "P", noti: "Smoke box" },
        {
            name: "POD/Comment Screen required on Dolphin",
            key: "R",
            noti: "POD/Comment Screen required on Dolphin",
        },
        {
            name: "Use Multiple Currency Kist screen for Pickup job",
            key: "L",
            noti: "Use Multiple Currency Kist screen for Pickup job",
        },
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(
                (category) => category.key !== e.value.key
            );

        setSelectedCategories(_selectedCategories);
    };
    const [value, setValue] = useState("");
    const units = [
        { name: "M", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];
    const [unit, setUnit] = useState(units[0]);
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Tooltip target=".custom-target-icon" />
            <Tooltip target=".custom-target-icon2" />
            <div>
                <div className="flex gap-5 pt-2 align-content-start w-8">
                    <div className="flex flex-auto align-items-start">
                        <div className=" flex w-full flex-column gap-5">
                            <div className="flex flex-auto  gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="ceilheight"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="ceilheight">Ceiling Height</label>
                                </span>
                                <span className="p-float-label ">
                                    <Dropdown
                                        inputId="dd-unit"
                                        value={unit}
                                        onChange={(e) => setUnit(e.value)}
                                        options={units}
                                        optionLabel="name"
                                        className="w-8rem border-1 "
                                    />
                                    <label htmlFor="dd-unit">Unit</label>
                                </span>
                            </div>
                            <div className="flex flex-auto gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="preTime">Premise Time</label>
                                </span>
                                <span className="">
                                    <Button
                                        label="Calculate"
                                        icon="pi pi-calculator"
                                        size="small"
                                        style={{ marginTop: "3px" }}
                                    />
                                </span>
                            </div>
                            <div className="flex flex-auto gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="preTime">Waiting (min.)</label>
                                </span>
                            </div>
                            <div className="flex flex-auto flex-column gap-1 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="preTime">Email</label>
                                </span>
                                <div className="flex">
                                    <Checkbox
                                        inputId="email"
                                        onChange={(e) => setChecked(e.checked)}
                                        checked={checked}
                                    ></Checkbox>
                                    <label htmlFor="email" className="ml-2">
                                        Send POD Email
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-auto gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="preTime">POD Reference</label>
                                </span>
                            </div>

                            {/* <div className="flex flex-auto gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-full"
                                    />
                                    <label htmlFor="preTime">Waiting (min.)</label>
                                </span>
                            </div> */}
                        </div>
                    </div>

                    <div className="flex flex-auto gap-3 flex-column">
                        <div className="card flex-auto flex border-1 border-black-alpha-20 w-10">
                            <div className="flex flex-column gap-3">
                                {categories.map((category) => {
                                    return (
                                        <div key={category.key} className="flex align-items-center">
                                            <Checkbox
                                                inputId={category.key}
                                                name="category"
                                                value={category}
                                                onChange={onCategoryChange}
                                                checked={selectedCategories.some(
                                                    (item) => item.key === category.key
                                                )}
                                                className=""
                                            />
                                            <label htmlFor={category.key} className="ml-2">
                                                {category.name}
                                            </label>
                                            {/* <span className=""> */}
                                            <i
                                                className="custom-target-icon pi pi-info p-text-secondary border-white p-overlay-badge 
                                                    ml-1 mb-2 p-1 bg-primary 
                                                    text-white 
                                                    border-circle
                                                    bg-primary border-circle 
                                                    font-bold
                                                    "
                                                data-pr-tooltip={category.noti}
                                                data-pr-position="right"
                                                data-pr-at="right+5 top"
                                                data-pr-my="left center-2"
                                                style={{ fontSize: "10px", cursor: "pointer" }}
                                            >
                                                {/* <Badge severity="danger"></Badge> */}
                                            </i>
                                            {/* </span> */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-auto ">
                            <div className="flex flex-auto flex-column gap-1 w-30rem">
                                <div className="flex">
                                    <span className="p-float-label w-full">
                                        <InputText
                                            id="preTime"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            className="border-1 w-10"
                                        />
                                        <label htmlFor="preTime">Send Email Notification</label>
                                    </span>
                                </div>
                                <div className="flex mb-3">
                                    <Checkbox
                                        inputId="email"
                                        onChange={(e) => setChecked(e.checked)}
                                        checked={checked}
                                    ></Checkbox>
                                    <label htmlFor="email" className="ml-2">
                                        Email Missed Stop Notification
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-auto ">
                            <div className="flex flex-auto flex-column gap-5 w-full">
                                <span className="p-float-label w-full">
                                    <InputText
                                        id="preTime"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="border-1 w-10"
                                        tooltip="Enter Risk Level" tooltipOptions={{ position: 'top' }}
                                    />
                                    <label htmlFor="preTime">Risk Level</label>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-auto mt-3">
                            <div className="flex flex-auto flex-column gap-5 w-full">
                                
                                <span className="p-float-label ">
                                    <Dropdown
                                        inputId="dd-podf"
                                        value={null}
                                        onChange={(e) => setUnit(e.value)}
                                        options={units}
                                        optionLabel="name"
                                        className="w-10 border-1 "
                                        placeholder="Please Select"
                                        tooltip="Enter POD Format" tooltipOptions={{ position: 'top' }}
                                    />
                                    <label htmlFor="dd-podf">POD Format</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
