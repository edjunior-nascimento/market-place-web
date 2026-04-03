import { createTheme } from '@mui/material/styles';

// Tema customizado para a aplicação de proteção animal
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B50303',
      light: '#B50303',
      dark: '#B50303',
    },
    secondary: {
      main: '#E2EAFA',
      light: '#E2EAFA',
      dark: '#E2EAFA',
    },
    background: {
      default: '#F5F5F5',
      paper: '#efefef',
    },
    text: {
      primary: '#000000',
      secondary: '#B50303',
      disabled: '#000000dd',
    },
  },
  components: {
      MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Arial, sans-serif',
        },
        h5: {
          fontSize: '18px',
          fontWeight: '600'
        },
        h6: {
          fontSize: '16px',
          fontWeight: '600'
        },
        subtitle1: {
          color: '#000000DD'
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px'
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
        }
      },
    },
  },
});

export default theme;