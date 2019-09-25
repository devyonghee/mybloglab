import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollTop';
import routes from './constatnts/routes.json';
import { history } from './store/configure';
import Home from './containers/Home';
import Search from './containers/Search';

const router: React.FC = (): React.ReactElement => (
  <Router history={history}>
    <ScrollToTop>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.SEARCH} component={Search} />
        {/* <Route exact path='/dashboard' component={Dashboard}/> */}
        {/* <Route exact path='/signup' component={Signup}/> */}
        {/* <Route exact path='/wizard' component={Wizard}/> */}
        {/* <Route exact path='/cards' component={Cards}/> */}
      </Switch>
    </ScrollToTop>
  </Router>
);

export default router;
