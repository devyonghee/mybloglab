import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, indigo } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

export default theme;