import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function CalendarIconDemo() {
  const [date, setDate] = useState(null);
  const [dates2, setDates2] = useState(null);
  const [dates3, setDates3] = useState(null);

  return (
    <>
    <h2 className="mx-4">Basic</h2>
      <div className="card flex flex-wrap gap-3 p-fluid justify-content-center">
        <div className="justify-content-center">
          <label htmlFor="buttondisplay" className="font-bold block mb-2">
            Date
          </label>

          <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
        {/* <div>{date}</div> */}
      </div>
      <h2 className="mx-4">Date Range</h2>
      <div className="card flex justify-content-center">
        <span className="p-float-label">
          <Calendar
            value={dates2}
            onChange={(e) => setDates2(e.value)}
            selectionMode="range"
            readOnlyInput
            showIcon
            className="w-18rem"
            inputId="birth_date2" 
            showButtonBar
          />
          <label htmlFor="birth_date2">Data Range</label>
        </span>
      </div>
      <h2 className="mx-4">Float label</h2>
      <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar inputId="birth_date" value={dates3} onChange={(e) => setDates3(e.value)} showIcon/>
                <label htmlFor="birth_date">Birth Date</label>
            </span>
        </div>
    </>
  );
}
