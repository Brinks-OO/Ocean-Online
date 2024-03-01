"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
