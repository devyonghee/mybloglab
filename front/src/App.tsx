import React from 'react';
import { configureStore, history } from './store/configure';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Router from './router';
import theme from './layouts/base/theme';
import { ThemeProvider } from '@material-ui/styles';

const store = configureStore();

const App = (): React.ReactElement => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Router/>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
);

export default App;
