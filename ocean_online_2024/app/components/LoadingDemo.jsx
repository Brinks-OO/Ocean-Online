
import React from 'react';
// import dynamic from 'next/dynamic'
import { ProgressSpinner } from 'primereact/progressspinner';
// const { ProgressSpinner } = dynamic(() => import('primereact/progressspinner'))

export default function LoadingDemo() {
    return (
        <>
        <div style={{ width: "100%" }}>

        <div className='' style={{ width: "30%" }}>

        </div>
        <div className="" style={{ width: "70%" }}>
            <ProgressSpinner 
            className='absolute left-0 right-0 top-0 bottom-0 mt-auto mb-auto' 
            />
        </div>
        </div>

        </>
    );
}
        