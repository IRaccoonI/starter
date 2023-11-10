import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@/src/mocks';

import '@/src/styles/index.scss';
import '@/src/styles/font.scss';
import { Layout } from '@/src/components/common/layout';
import AppProviders from '@/src/providers/AppProviders';

import { Chart as ChartJS, ChartData, registerables } from 'chart.js';
import { dougnutPlugins } from '@/src/lib/charts/plugins';

ChartJS.register(...registerables, ...dougnutPlugins);

// @ts-expect-error
export default function MyApp({ Component, pageProps }) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
