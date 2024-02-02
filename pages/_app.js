import { useEffect, useState } from 'react';
import { GTagManager } from '@/components/analytics/analytics';
import AppContentContext from '@/components/layout/appcontentcontext';
import { PrimeReactProvider } from 'primereact/api';
import Layout from '@/components/layout/layout';
import 'primeicons/primeicons.css';
import '@/styles/tailwind/tailwind.css';
import '@/styles/layout/layout.scss';
import Lara from '@/presets/lara';
import Wind from '@/presets/wind';
import { useUpdateEffect } from 'primereact/hooks';

function AppContent({ component: Component, pageProps }) {
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    } else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default function MyApp({ Component, pageProps }) {
    const isProduction = process.env.NODE_ENV === 'production';
    const [darkMode, setDarkMode] = useState(false);
    const [preset, setPreset] = useState(Lara);
    const [newsActive, setNewsActive] = useState(false);
    const [announcement, setAnnouncement] = useState(null);

    const appState = {
        darkMode: darkMode,
        preset: preset,
        newsActive: newsActive,
        announcement: announcement,
        changePreset: (newValue) => {
            if (newValue === 'lara') setPreset(Lara);
            else if (newValue === 'wind') setPreset(Wind);
        },
        toggleDarkMode: () => {
            const root = document.documentElement;
            setDarkMode((prevState) => {
                if (!prevState) {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }

                return !prevState;
            });
        },
        showNews: (message) => {
            setNewsActive(true);
            setAnnouncement(message);
        },
        hideNews: () => {
            setNewsActive(false);
        }
    };

    const primereactConfig = {
        ripple: false,
        unstyled: true,
        pt: preset
    };

    return (
        <AppContentContext.Provider value={appState}>
            <PrimeReactProvider value={primereactConfig}>
                {isProduction && <GTagManager />}
                <AppContent component={Component} pageProps={pageProps} />
            </PrimeReactProvider>
        </AppContentContext.Provider>
    );
}
