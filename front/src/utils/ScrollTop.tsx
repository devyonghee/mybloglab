import React, { Fragment, useEffect } from 'react';
import { RouteProps, withRouter } from 'react-router-dom';

const ScrollToTop: React.FC = ({ children }: RouteProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (<Fragment>{children}</Fragment>);
};

export default withRouter(ScrollToTop);