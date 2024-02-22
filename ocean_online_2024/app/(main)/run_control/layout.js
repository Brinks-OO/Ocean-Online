"use client";
import Header from './header'
import NavigationBar from './tabMenu1.jsx';
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.css";
import './style.css'

export default function Layout({ children }) {
  return (
    <>
      <div  className="flex flex-column h-screen">
        <div >
          {/* <Header /> */}
          <NavigationBar />
        </div>
        <div className='p-2 flex flex-column h-screen'>
          {children}  
        </div>
      </div>
    </>
  )
}