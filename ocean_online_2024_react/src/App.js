import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "primereact/button";
import { InputTextDemo } from "./ui/Input";
import { AdvancedDemo } from "./ui/Card";
import { Home } from "./ui/home";

function App() {
  return (
    <div className="">
      <Home />

      {/* <div class="grid row-gap-6">
        <div class="col-4">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            4
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
        <div class="col">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            1
          </div>
        </div>
      </div>

      <div class="grid">
        <div class="col-2">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            2
          </div>
        </div>
        <div class="col-6">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            6
          </div>
        </div>
        <div class="col-4">
          <div class="text-center p-3 border-round-sm bg-primary font-bold ">
            4
          </div>
        </div>
      </div> */}
      <Button label="Click" icon="pi pi-check" />
      <Button label="Click" icon="pi pi-check" iconPos="right" />
      <Button icon="pi pi-check" iconPos="right" />
      <InputTextDemo />
      {/* <AdvancedDemo /> */}
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Button } from 'primereact/button';
// import { Panel } from 'primereact/panel';
// import { ProgressBar } from 'primereact/progressbar';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Menu } from 'primereact/menu';
// import { Dialog } from 'primereact/dialog';

// export default function App() {
//   const [visible, setVisible] = useState(false);

//   const items = [
//     { label: 'New', icon: 'pi pi-fw pi-plus' },
//     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
//   ];

//   return (
//     <>
//       <div className="d-flex justify-content-center p-4">
//         <h2 className="m-0">Bootstrap Demo</h2>
//       </div>
//       <div className="d-flex flex-column">
//         <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//           <span className="d-block mb-2">Buttons</span>
//           <div className="d-flex flex-shrink-0 w-100 gap-3 flex-wrap">
//             <Button label="Show" />
//             <Button label="Show" severity="success" />
//             <Button label="Show" severity="info" />
//             <Button label="Show" severity="warning" />
//             <Button label="Show" severity="danger" raised />
//             <Button label="Show" disabled />
//           </div>
//         </div>
//         <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//           <span className="d-block mb-2">ProgressBar</span>
//           <ProgressBar value={50}></ProgressBar>
//         </div>

//         <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//           <span className="d-block mb-2">Panel</span>
//           <Panel header="Header" toggleable>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </Panel>
//         </div>
//         <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//           <span className="d-block mb-2">Forms</span>
//           <InputText placeholder="Text input" className="mb-3" />
//           <InputTextarea rows={5} cols={30} placeholder="InputTextarea" />
//         </div>
//         <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//           <span className="d-block mb-2">Dialog</span>
//           <Button label="Show" onClick={() => setVisible(true)} />
//         </div>
//       </div>
//       <div className="d-flex flex-column flex-shrink-0 p-4 w-100">
//         <span className="d-block mb-2">Menu</span>
//         <Menu model={items} />
//       </div>

//       <Dialog
//         visible={visible}
//         modal
//         header="Header"
//         style={{ width: '80vw' }}
//         onHide={() => setVisible(false)}
//       >
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//       </Dialog>
//     </>
//   );
// }
