import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from 'primereact/card';

export const InputTextDemo = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <span className="p-float-label" style={{ marginTop: "20px" }}>
        <InputText
          id="in"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="in">Username</label>
      </span>

      <div>
        <div className="card flex justify-content-center">
          <Button label="Check" icon="pi pi-check" />
        </div>
      </div>

      <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    </>
  );
};

// export default function BasicDemo() {
//   return (
//     <div className="card flex justify-content-center">
//       <Button label="Check" icon="pi pi-check" />
//     </div>
//   );
// }
