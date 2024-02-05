'use client';
import React, { useState } from 'react'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import GridView from './data_display/GridView'
import Label from './data_display/Label';
import Tooltip from './data_display/Tooltip';
import Notification from './data_display/Notification';
import Modal from './data_display/Modal';
import TreeView from './data_display/TreeView';
import Card from './data_display/Card';
import PageSplitter from './data_display/PageSplitter';
import NavigationBar from './data_display/NavigationBar';
import TabsDemo from './data_display/Tabs';
import ContextMenuDemo from './data_display/ContextMenu';



function Home() {
    const [mainContent, setMainContent] = useState(null);

    const items = [
        {
            template: () => {
                return (
                    <>
                        <div className="flex justify-content-center">
                            <Image src="Logo-Ocean_login.png" alt="" height='32px' />
                        </div>
                    </>
                )
            }
        },
        {
            separator: true
        },
        {
            label: 'Menu',
            items: [
                {
                    label: 'Navigation Bar',
                    icon: 'pi pi-plus',
                    command: () => {
                        setMainContent(<NavigationBar />)
                    }
                },
                {
                    label: 'Context Menu',
                    icon: 'pi pi-search',
                    command: () => {
                        setMainContent(<ContextMenuDemo />)
                    }
                },
                {
                    label: 'Tabs',
                    icon: 'pi pi-cog',
                    command: () => {
                        setMainContent(<TabsDemo />)
                    }
                }
            ]
        },
        {
            label: 'Data Display',
            items: [
                {
                    label: 'Grid View',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<GridView />)
                    }
                },
                {
                    label: 'Label',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Tooltip',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Tooltip />)
                    }
                },
                {
                    label: 'Notification',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Notification />)
                    }
                },
                {
                    label: 'Modal',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Modal />)
                    }
                },
                {
                    label: 'Tree view',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<TreeView />)
                    }
                },
                {
                    label: 'Card/Paper',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Card />)
                    }
                },
                {
                    label: 'Page Splitter',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<PageSplitter />)
                    }
                }
            ]
        },
        {
            label: 'Input',
            items: [
                {
                    label: 'Textbox',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'TextArea',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Numeric Textbox',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'DatePicker',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'DropDownList',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Toggle Switch',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Button',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Checkbox',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'Radio Button',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                },
                {
                    label: 'List box',
                    style: { paddingLeft: 24 },
                    command: () => {
                        setMainContent(<Label />)
                    }
                }
            ]
        }
    ];
    return (
        <div>
            <div className="flex flex-column md:flex-row">
                <div className="flex">
                    <ScrollPanel style={{ width: '12.5rem', height: '100vh', padding: 0 }} >
                        <Menu model={items} />
                    </ScrollPanel>
                    {/* <ul style={{ listStyle: 'none' }}>
                        <li>
                            <h3>Menu</h3>
                            <ul style={{ listStyle: 'none' }}>
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
                            <h3>Data Disaply</h3>
                            <ul style={{ listStyle: 'none' }}>
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
                            <h3>Input</h3>
                            <ul style={{ listStyle: 'none' }}>
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
                    </ul> */}
                </div>
                <div className="flex-grow-1">
                    <div className="flex flex-column">
                        {/* <div className="flex ">
                            <div style={{ width: '100%', height: '54px', padding: 0, borderBottom: 'solid 1px rgba(0, 0, 0, .2)' }}>
                                <div className="flex align-items-center flex-row-reverse gap-3 pr-3" style={{ minHeight: "54px" }}>
                                    <div className="flex align-items-center justify-content-center">
                                        <Button label='Theme1' />
                                    </div>
                                    <div className="flex align-items-center justify-content-center">
                                        <Button label='Theme2' />
                                    </div>
                                    <div className="flex align-items-center justify-content-center">
                                        <Button label='Theme3' />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex">
                            <ScrollPanel style={{ width: '100%', height: '93vh', padding: 0 }}>
                                {mainContent}
                            </ScrollPanel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home

