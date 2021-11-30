import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    brand: {
      main: '#14493E',
      red: '#CC3D55',
      yellow: '#FED24C',
      white: '#E8E8E8',
      btn: '#A32541',
    },
  },
});

export default theme;
