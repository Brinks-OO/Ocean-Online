
import React from 'react';
// import dynamic from 'next/dynamic'
import { ProgressSpinner } from 'primereact/progressspinner';
// const { ProgressSpinner } = dynamic(() => import('primereact/progressspinner'))

export default function LoadingDemo() {
    return (
        <div className="">
            <ProgressSpinner className='absolute left-0 right-0 top-0 bottom-0 mt-auto mb-auto' />
        </div>
    );
}
        