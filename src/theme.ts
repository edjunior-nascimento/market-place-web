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
    grey: {
      400: '#BDBDBD',
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
    
    MuiStepper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

      
      MuiStepConnector: {
        styleOverrides: {        
          root: {
            top: 10,
            left: 'calc(-50% + 12px)',
            right: 'calc(50% + 12px)',            
            '&.Mui-active .MuiStepConnector-line': {
              borderColor: '#B50303',
            },
            '&.Mui-completed .MuiStepConnector-line': {
              borderColor: '#B50303',
            },
          },
          line: {
            borderTopWidth: 4,
            borderColor: '#BDBDBD',
            borderRadius: 1,
          },
        },
      },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: 24,
          height: 24,
          borderRadius: '50%',
          color: '#BDBDBD',

          '&.Mui-active': {
            color: '#B50303',
          },

          '&.Mui-completed': {
            color: '#B50303',
          },
        },
        text: {
          fill: '#fff',
          fontWeight: 600,
        },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        label: {
          marginTop: 8,
          fontSize: 14,
          color: '#BDBDBD',

          '&.Mui-active': {
            color: '#B50303',
            fontWeight: 500,
          },

          '&.Mui-completed': {
            color: '#B50303',
          },
        },
      },
    },

  },
});

export default theme;