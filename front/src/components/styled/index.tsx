import { Box, styled } from '@mui/material';

export const DefaultColumntWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const DefaultRowWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;
