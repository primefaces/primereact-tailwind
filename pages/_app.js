import { useContext, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import Layout from '@/components/layout';
import { PresetProvider, PresetContext } from '@/providers/presetProvider';
import { NewsProvider } from '@/providers/newsProvider';
import { GTagManager } from '@/components/analytics/analytics';
import 'primeicons/primeicons.css';
import '@/styles/tailwind/tailwind.css';
import '@/styles/layout/layout.scss';
import lara from '@/presets/lara';

function AppContent({ component: Component, pageProps }) {
    const primereactConfig = {
        ripple: false,
        unstyled: true,
        pt: lara
    };

    return (
        <PrimeReactProvider value={primereactConfig}>
            {Component.getLayout ? (
                Component.getLayout(<Component {...pageProps} />)
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </PrimeReactProvider>
    );
}

export default function MyApp({ Component, pageProps }) {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <PresetProvider>
            <NewsProvider>
                {isProduction && <GTagManager />}
                <AppContent component={Component} pageProps={pageProps} />
            </NewsProvider>
        </PresetProvider>
    );
}
