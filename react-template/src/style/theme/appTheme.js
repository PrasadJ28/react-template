
import { createTheme } from "@mui/material/styles";
 
export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#673AB7',
      light: '#E1BEE7'
    },
    secondary: {
      main: '#009688'
    },
    error: {
      main: '#F44336'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#424242',
      secondary: '#757575'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none'
    }
  }
});

