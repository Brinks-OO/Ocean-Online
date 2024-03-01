"use client";
import Header from './header'
import NavigationBar from './tabMenu1.jsx';
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.css";
import './style.css'
import { useEffect, useState } from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [])

  return (
    <>
      {
        loading ?
          <div className="border-round border-1 surface-border p-4 surface-card">
            <Skeleton width="100%" height="10vh"></Skeleton>
            <Skeleton className='mt-1' width="100%" height="5vh"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="12%" height="70vh"></Skeleton>
              <Skeleton width="85%" height="70vh"></Skeleton>
            </div>
          </div>
          :
          <div className="flex flex-column h-screen">
            <div >
              {/* <Header /> */}
              <NavigationBar />
            </div>
            <div className=' p-2 flex flex-column h-screen'>
              {children}
            </div>
          </div>
      }
    </>
  )
  // return (
  //   <>
  //     <div className="flex flex-column h-screen">
  //       <div >
  //         {/* <Header /> */}
  //         {/* <NavigationBar /> */}
  //       </div>
  //       <div className='flex flex-column h-screen'>
  //         {children}
  //       </div>
  //     </div>
  //   </>
  // )
}