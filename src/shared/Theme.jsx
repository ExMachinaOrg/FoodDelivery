import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#FFF',
    },
    accent: {
      main: '#FC8A06',
    },
    action: {
      main: '#03081F',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 'clamp(3.8rem,5vw,4.4rem)',
      color: '#000',
      fontWeight: '700',
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 'clamp(2.8rem,4vw,3.2rem)',
      color: '#000',
      fontWeight: '700',
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.6rem',
      fontWeight: '400',
    },
    subtitle1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '2.5rem'
    },
  },
});

export default theme;
