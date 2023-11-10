import { Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: 32, backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="body2" align="center" color="white">
        ©My App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
