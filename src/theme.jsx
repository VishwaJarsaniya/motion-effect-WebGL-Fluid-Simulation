import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
    //   sm: 600,
      md: 765,
      lg: 1025,
      xl: 1285,
    },
  },
});

export default theme;
