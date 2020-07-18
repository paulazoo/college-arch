// Redux
import store from './index.js';

// Theme
import { createMuiTheme } from '@material-ui/core/styles';

// set up theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#92E1E4',
      main: '#004BAD',
      dark: '#00306F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#B3F363',
      main: '#81C437',
      contrastText: '#FFFFFF',
    },
    contrastText: '#fff',
    warning: {
      light: '#FF6961',
      main: '#DC453D',
      dark: '#C33C23',
    },
    common: {
      white: 'white',
      black: 'black',
      gray: 'gray',
      yellow: '#ffde59',
      muted: '#84c6c8',
      green: '#93E3E6',
      blue: '#92e1e4',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Work Sans',
  },
  spacing: 8,
});
