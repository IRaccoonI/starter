import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <Typography variant="h6" noWrap>
          <Link href="/">Главная</Link>
        </Typography>
        <Typography variant="h6" noWrap>
          <Link href="/pods-monitoring">Мониторинг</Link>
        </Typography>
        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
