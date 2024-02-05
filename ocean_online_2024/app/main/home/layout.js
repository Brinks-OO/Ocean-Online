"use client";
import dynamic from 'next/dynamic';
const SidebarDemo = dynamic(() => import('../../components/Sidebar'))
 
export default function Layout({ children }) {
  return (
    <div className="">
        <SidebarDemo />
      <div className="mx-4 my-4">{children}</div>
    </div>
  );
}