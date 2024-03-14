

'use client';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { LayoutProvider } from '../../../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';

import { Metadata } from 'next';
// import Layout from '../../layout/layout';
import Layout from '../../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

// export const metadata: Metadata = {
//     title: 'PrimeReact Sakai',
//     description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
//     robots: { index: false, follow: false },
//     viewport: { initialScale: 1, width: 'device-width' },
//     openGraph: {
//         type: 'website',
//         title: 'PrimeReact SAKAI-REACT',
//         url: 'https://sakai.primereact.org/',
//         description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
//         images: ['https://www.primefaces.org/static/social/sakai-react.png'],
//         ttl: 604800
//     },
//     icons: {
//         icon: '/favicon.ico'
//     }
// };

// export default function AppLayout({ children }: AppLayoutProps) {
//     return <Layout>{children}</Layout>;
// }

// import { LayoutProvider } from '../layout/context/layoutcontext';

// import '../styles/layout/layout.scss';
// import '../../../styles/layout/layout.scss';
// import '../../../styles/demo/Demos.scss';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link 
                // id="theme-css" 
                href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <PrimeReactProvider>
                    <LayoutProvider>
                        <Layout>{children}</Layout>;
                    </LayoutProvider>
                </PrimeReactProvider>
            </body>
        </html>
    );
}
