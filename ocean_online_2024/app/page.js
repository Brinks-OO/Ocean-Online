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
