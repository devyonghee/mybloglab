import React, { Component } from 'react';
import Routes from './router';
import { createMuiTheme } from '@material-ui/core';
import { blue, indigo } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { configureStore, history } from './store/configure';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const theme = createMuiTheme({
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

const store = configureStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <Routes/>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
