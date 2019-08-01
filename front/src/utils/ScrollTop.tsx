import React, { useEffect, Fragment } from 'react';
import { RouteProps, withRouter } from 'react-router-dom';

const ScrollToTop: React.FC = ({ location, children }: RouteProps) => {
  const pathname: string = (!!location) ? location.pathname : '';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (<Fragment>{children}</Fragment>);
};

export default withRouter(ScrollToTop);