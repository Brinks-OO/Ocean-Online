<<<<<<< HEAD
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}
 
=======
import React from 'react'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from './Home';

function page() {
  return (
    <PrimeReactProvider>
      <Home />
    </PrimeReactProvider>
  )
}

export default page
>>>>>>> ef3e8da20cba80002d638ba1effe5e4fb7af180a
