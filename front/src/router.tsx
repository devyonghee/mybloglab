import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollTop';
import routes from './constatnts/routes.json';
import Home from './containers/Home';

const router: React.FC = () => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path={routes.HOME} component={Home}/>
        {/*<Route exact path='/dashboard' component={Dashboard}/>*/}
        {/*<Route exact path='/signup' component={Signup}/>*/}
        {/*<Route exact path='/wizard' component={Wizard}/>*/}
        {/*<Route exact path='/cards' component={Cards}/>*/}
      </Switch>
    </ScrollToTop>
  </HashRouter>
);

export default router;