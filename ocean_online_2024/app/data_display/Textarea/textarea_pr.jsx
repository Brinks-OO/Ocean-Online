import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function TextAreaDemo() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  return (
    <>
      <h1 className="mx-4">Textarea</h1>
      <h2 className="">Basic</h2>
      <div className="card flex justify-content-center">
        <InputTextarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>

      <h2>Auto Resize</h2>
      <div className="card flex justify-content-center">
        <InputTextarea
          autoResize
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
    </>
  );
}
