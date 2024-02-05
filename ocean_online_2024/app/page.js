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
import Login from "./main/login/Login";

function page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('isLoggedIn',isLoggedIn)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <PrimeReactProvider>
      {/* {isLoggedIn && <SidebarDemo />}  */}
      {isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </PrimeReactProvider>
  );
}

export default page;
