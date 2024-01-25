
import React from 'react'
import Link from 'next/link'

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/menu">Menu</Link>
                    <ul>
                        <li>
                            <Link href="/navigation_bar">Navigation Bar</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Context Menu</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Tabs</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/data_display">Data Disaply</Link>
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
                </li>
                <li>
                    <Link href="/input">Input</Link>
                    <ul>
                        <li>
                            <Link href="/navigation_bar">Textbox / Textbox Search</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">TextArea</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Numeric Textbox</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">DatePicker / TimePicker</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">DropDownList / Multiple select</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Toggle Switch</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Button</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">Radio Button</Link>
                        </li>
                        <li>
                            <Link href="/navigation_bar">List box</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Home

