import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div>
            <h1>Data Display</h1>
            <ul>
                <li>
                    <Link href="/data_display/grid_view">Grid View</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Label</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Tooltip</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Notification</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Modal</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Tree view</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Card / Paper</Link>
                </li>
                <li>
                    <Link href="/navigation_bar">Page Splitter</Link>
                </li>
            </ul>
        </div>
    )
}

export default page
