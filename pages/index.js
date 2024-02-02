import AppContentContext from '@/components/layout/appcontentcontext';
import Topbar from '@/components/layout/topbar';
import { useMountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import NewsSection from '@/components/news/newssection';
import Head from 'next/head';
import { useContext } from 'react';

export default function Home() {
    const { newsActive, darkMode, changePreset } = useContext(AppContentContext);
    const landingClass = classNames('landing', { 'layout-light': !darkMode, 'layout-dark': darkMode, 'layout-news-active': newsActive });

    const toggleDarkMode = () => {
        const newTheme = darkMode ? 'lara-light-cyan' : 'lara-dark-cyan';

        //changeTheme(newTheme, !darkMode);
    };

    useMountEffect(() => {
        //changeTheme(darkMode ? 'lara-dark-cyan' : 'lara-light-cyan', darkMode);
    });

    return (
        <div className={landingClass}>
            <Head>
                <title>Tailwind CSS based React UI Component Library</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeReact components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@primereact" />
                <meta name="twitter:title" content="Tailwind CSS based React UI Component Library" />
                <meta name="twitter:description" content="Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeReact components." />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Tailwind CSS based React UI Component Library"></meta>
                <meta property="og:url" content="https://tailwind.primereact.org"></meta>
                <meta property="og:description" content="Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeReact components." />
                <meta property="og:image" content="https://primefaces.org/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
            </Head>
            <NewsSection />
            <Topbar onDarkSwitchClick={toggleDarkMode} />
            <div>Intro</div>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
