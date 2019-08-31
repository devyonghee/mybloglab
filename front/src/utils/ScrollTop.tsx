import React, { useEffect } from 'react';
import { RouteProps, withRouter } from 'react-router-dom';

const ScrollToTop: React.FC = ({ children }: RouteProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
