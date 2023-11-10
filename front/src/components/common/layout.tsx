import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import Header from '@/src/components/common/header';
import Footer from '@/src/components/common/footer';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box flexShrink={0}>
        <Header />
      </Box>
      <Box flexGrow={1} my={2} position="relative" overflow="auto" sx={{ scrollbarGutter: 'stable' }}>
        <Box position="absolute" left={0} top={0} width="100%" height="100%">
          <Container>{children}</Container>
        </Box>
      </Box>
      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Box>
  );
};
