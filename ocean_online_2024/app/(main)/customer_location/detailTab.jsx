import React, { useState } from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";

export default function DetailTab() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  return (
    <>
      {/* <div className="flex flex-wrap gap-5 align-items-center justify-content-center mt-2">
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="customer"
              value={value1}
              className="w-full"
              onChange={(e) => setValue1(e.target.value)}
            />
            <label htmlFor="customer">Customer</label>
          </span>
        </div>
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="reference"
              value={value2}
              className="w-full"
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor="reference">Reference</label>
          </span>
        </div>
        <div className="flex-auto">
          <span className="p-float-label">
            <InputText
              id="isa"
              value={value3}
              className="w-full"
              onChange={(e) => setValue3(e.target.value)}
            />
            <label htmlFor="isa">ISA Client Code</label>
          </span>
        </div>
        <div className="flex-auto ">
          <span className="p-float-label">
            <InputText
              id="refcode"
              value={value4}
              className="w-full"
              onChange={(e) => setValue4(e.target.value)}
            />
            <label htmlFor="refcode">24/7 Reference Code</label>
          </span>
        </div>
      </div> */}

      {/* <Divider /> */}
      <div className="grid ">
        <div className="col-4 mt-2">
          <span className="p-float-label">
            <InputText
              id="customer"
              value={value1}
              className="w-full border-2"
              onChange={(e) => setValue1(e.target.value)}
            />
            <label htmlFor="customer">Customer</label>
          </span>
        </div>
        <div className="col-4 mt-2">
          <span className="p-float-label">
            <InputText
              id="reference"
              value={value2}
              className="w-full border-2"
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor="reference">Reference</label>
          </span>
        </div>
        <div className="col-4 mt-2">
          <span className="p-float-label">
            <InputText
              id="isa"
              value={value3}
              className="w-full border-2"
              onChange={(e) => setValue3(e.target.value)}
            />
            <label htmlFor="isa">ISA Client Code</label>
          </span>
        </div>
        <div className="col-4 mt-3">
          <span className="p-float-label">
            <InputText
              id="refcode"
              value={value4}
              className="w-full border-2"
              onChange={(e) => setValue4(e.target.value)}
            />
            <label htmlFor="refcode">24/7 Reference Code</label>
          </span>
        </div>
      </div>
      <Divider />
      <div>

      </div>
    </>
  );
}
