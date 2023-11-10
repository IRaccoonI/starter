import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

// Disables SSR
const SafeHydrate = dynamic(() => Promise.resolve(({ children }: PropsWithChildren) => <>{children}</>), { ssr: false });

export default SafeHydrate;
