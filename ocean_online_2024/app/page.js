// import React from 'react'
// import 'primeicons/primeicons.css';
// import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/primereact.css';
// import "primereact/resources/themes/mdc-light-indigo/theme.css";
// import Home from './Home';
// import SidebarDemo from './Sidebar';

// function page() {
//   return (
//     <PrimeReactProvider>
//       <Home />
//       {/* <SidebarDemo /> */}
//     </PrimeReactProvider>
//   )
// }

// export default page

// pages/page.js
"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import Home from "./Home";
import Link from 'next/link';
import Login from "./(main)/login/Login";
// import page from '../app/(main)/home/page'

function page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <PrimeReactProvider>
      {/* {isLoggedIn && <SidebarDemo />}  */}
      {isLoggedIn ? <Link to="/v2/home" />  : <Login onLoginSuccess={handleLoginSuccess} />}
      {/* <page /> */}
    </PrimeReactProvider>
  );
}

export default page;
