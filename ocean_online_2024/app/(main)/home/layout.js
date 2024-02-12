"use client";
import dynamic from 'next/dynamic';
const SidebarDemo = dynamic(() => import('../../components/Sidebar'))
 
export default function Layout({ children }) {
  return (
    <div className="">
        <SidebarDemo />
      <div className="px-4 py-4">{children}</div>
    </div>
  );
}