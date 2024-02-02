import AppContentContext from '@/components/layout/appcontentcontext';
import Footer from '@/components/layout/footer';
import Menu from '@/components/layout/menu';
import Topbar from '@/components/layout/topbar';
import { PrimeReactContext } from 'primereact/api';
import { DomHandler, classNames } from 'primereact/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import NewsSection from '@/components/news/newssection';

export default function Layout({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const { ripple } = useContext(PrimeReactContext);
    const { theme, darkMode, newsActive, changeTheme } = useContext(AppContentContext);
    const router = useRouter();

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-news-active': newsActive,
        'layout-ripple-disabled': ripple === false
    });

    const toggleDarkMode = () => {
        let newTheme = null;

        if (darkMode) {
            newTheme = theme.replace('dark', 'light');
        } else {
            if (theme.includes('light') && theme !== 'fluent-light') newTheme = theme.replace('light', 'dark');
            else newTheme = 'lara-dark-cyan';
        }

        changeTheme(newTheme, !darkMode);
    };

    useEffect(() => {
        if (sidebarActive) DomHandler.blockBodyScroll('blocked-scroll');
        else DomHandler.unblockBodyScroll('blocked-scroll');
    }, [sidebarActive]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleRouteChangeComplete = (l) => {
            setSidebarActive(false);
        };

        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={wrapperClassName} data-p-theme={theme}>
            <Head>
                <title>PrimeReact - React UI Component Library</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@primereact" />
                <meta name="twitter:title" content="PrimeReact | React UI Component Library" />
                <meta name="twitter:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="PrimeReact | React UI Component Library"></meta>
                <meta property="og:url" content="https://primereact.org"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href="https://primefaces.org/cdn/primereact/images/favicon.ico" type="image/x-icon"></link>
            </Head>
            <NewsSection />
            <Topbar onMenuButtonClick={() => setSidebarActive(true)} />
            <div className={classNames('layout-mask', { 'layout-mask-active': sidebarActive })} onClick={() => setSidebarActive(false)}></div>
            <div className="layout-content">
                <Menu active={sidebarActive} />
                <div className="layout-content-slot">{children}</div>
            </div>
            <Footer />
        </div>
    );
}
