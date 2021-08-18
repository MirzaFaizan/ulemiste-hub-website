import 'src/common/styles/globals.css';
import 'src/common/styles/tailwind.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
    console.info(metric);
}

export default MyApp;
