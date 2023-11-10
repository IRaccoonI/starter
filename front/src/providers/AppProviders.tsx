import { PropsWithChildren } from 'react';
import theme from '@/src/const/defaultTheme';
import { ThemeProvider } from '@mui/material/styles';
import { RecoilProvider } from '@/src/providers/recoilProvider';
import { QueryProvider } from '@/src/providers/queryProvider';
import SafeHydrate from '@/src/providers/SafeHydrate';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <SafeHydrate>
      <RecoilProvider>
        <QueryProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryProvider>
      </RecoilProvider>
    </SafeHydrate>
  );
};

export default AppProviders;
