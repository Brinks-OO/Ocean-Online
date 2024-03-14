/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import React, { useContext, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import AppFooter from './AppFooter';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import AppConfig from './AppConfig';
import { LayoutContext } from './context/layoutcontext';
import { PrimeReactContext } from 'primereact/api';
import { ChildContainerProps, LayoutState, AppTopbarRef } from '../types/index';
// types
import { usePathname, useSearchParams } from 'next/navigation';
import styled from "styled-components";

const Layout = ({ children }: ChildContainerProps) => {
    const { layoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    // const { setRipple } = useContext(PrimeReactContext);
    const topbarRef = useRef<AppTopbarRef>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                sidebarRef.current?.isSameNode(event.target as Node) ||
                sidebarRef.current?.contains(event.target as Node) ||
                topbarRef.current?.menubutton?.isSameNode(event.target as Node) ||
                topbarRef.current?.menubutton?.contains(event.target as Node)
            );

            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });

    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        hideMenu();
        hideProfileMenu();
    }, [pathname, searchParams]);

    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                topbarRef.current?.topbarmenu?.isSameNode(event.target as Node) ||
                topbarRef.current?.topbarmenu?.contains(event.target as Node) ||
                topbarRef.current?.topbarmenubutton?.isSameNode(event.target as Node) ||
                topbarRef.current?.topbarmenubutton?.contains(event.target as Node)
            );

            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });

    const hideMenu = () => {
        // setLayoutState((prevLayoutState: LayoutState) => ({
        //     ...prevLayoutState,
        //     overlayMenuActive: false,
        //     staticMenuMobileActive: false,
        //     menuHoverActive: false
        // }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const hideProfileMenu = () => {
        // setLayoutState((prevLayoutState: LayoutState) => ({
        //     ...prevLayoutState,
        //     profileSidebarVisible: false
        // }));
        unbindProfileMenuOutsideClickListener();
    };

    const blockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    useEffect(() => {
        if (layoutState?.overlayMenuActive || layoutState?.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState?.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState?.overlayMenuActive, layoutState?.staticMenuMobileActive]);

    useEffect(() => {
        if (layoutState?.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [layoutState?.profileSidebarVisible]);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });

    const isNotHomePage = pathname === "/newHome/newHome2";

    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig?.menuMode === 'overlay',
        'layout-static': layoutConfig?.menuMode === 'static',
        'layout-static-inactive': !isNotHomePage && layoutState?.staticMenuDesktopInactive && layoutConfig?.menuMode === 'static',
        'layout-overlay-active': layoutState?.overlayMenuActive,
        'layout-mobile-active': layoutState?.staticMenuMobileActive,
        'p-input-filled': layoutConfig?.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig?.ripple
    });

    console.log('containerClass', containerClass)

     // โค้ดเพิ่มเติม: สร้าง useEffect เพื่อซ่อน Sidebar เมื่อเข้าหน้าครั้งแรก
     useEffect(() => {
        if (pathname !== "/newHome/newHome2") { // เช็คว่า asPath ไม่มีค่า (หน้าครั้งแรก)
            setLayoutState((prevLayoutState: LayoutState) => ({
                ...prevLayoutState,
                staticMenuDesktopInactive: true // สั่งให้เมนูที่ฝั่งซ้ายซ่อน
            }));
        }
    }, []);

//     const BackgroundDiv = styled.div`
// //   background-image: url("../public/Loading_Ocean_100x125_1.png");
//   background-image: url("http://localhost:3000/_next/static/media/Loading_Ocean_100x125_1.33ae98ad.png");
//   background-repeat: no-repeat;
//   background-position: center;
//   filter: grayscale(100%) opacity(30%);
// `;
    return (
        <React.Fragment>
            <div id="mainLayout" className={containerClass}>
                {/* <AppTopbar ref={topbarRef} /> */}
                <div ref={sidebarRef} className="layout-sidebar">
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    {/* <BackgroundDiv> */}

                    <div className="layout-main">{children}</div>
                    {/* </BackgroundDiv> */}
                    {/* <AppFooter /> */}
                </div>
                {/* <AppConfig /> */}
                <div className="layout-mask"></div>
            </div>
        </React.Fragment>
    );
};

export default Layout;
