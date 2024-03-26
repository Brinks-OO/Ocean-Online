
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);

    const [value4, setValue4] = useState(50);

    const [value11, setValue11] = useState(1500);
    const [value12, setValue12] = useState(2500);
    const [value13, setValue13] = useState(4250);
    const [value14, setValue14] = useState(5002);
    const [value16, setValue16] = useState(10000);
    const [value15, setValue15] = useState();

    return (
        <>
        <div className="card flex flex-wrap flex-column gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal"/>
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits (0-20)</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={10000} />
            </div>
        </div>

        <div className="card flex flex-wrap flex-column gap-3 p-fluid">
            <div className="flex-auto">
                <span className="p-float-label">
                    {/* <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} /> */}
                    <InputNumber inputId="currency-th" value={value15} onValueChange={(e) => setValue15(e.value)} mode="currency" currency="THB" locale="th-TH" minFractionDigits={0}/>
                    <label htmlFor="currency-th" className="font-bold block mb-2">Thailand</label>
                    {/* <label htmlFor="number-input">Number</label> */}
                </span>
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                <InputNumber inputId="currency-us" value={value11} onValueChange={(e) => setValue11(e.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                <InputNumber inputId="currency-germany" value={value12} onValueChange={(e) => setValue12(e.value)} format=",00" mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                <InputNumber inputId="currency-india" value={value13} onValueChange={(e) => setValue13(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                <InputNumber inputId="currency-japan" value={value14} onValueChange={(e) => setValue14(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>
        <div className="card flex flex-wrap flex-column gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="currency-test1" className="font-bold block mb-2">Test 1</label>
                <InputNumber inputId="currency-test1" value={value16} onValueChange={(e) => setValue16(e.value)} mode="currency"  tooltip="test 1 test" autoFocus currency="EUR" locale="de-DE"/>
            </div>
        </div>
        </>
    )
}
        