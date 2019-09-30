import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollTop';
import routes from './constatnts/routes.json';
import { history } from './store/configure';
import Home from './containers/Home';
import BLOG from './containers/Blog';
import Keyword from './containers/Keyword';

const router: React.FC = (): React.ReactElement => (
  <Router history={history}>
    <ScrollToTop>
      <Switch>
        <Route exact path={routes.HOME.href} component={Home} />
        <Route exact path={routes.KEYWORD.href} component={Keyword} />
        <Route exact path={routes.BLOG.href} component={BLOG} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default router;
