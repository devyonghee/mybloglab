import React, { ReactNode } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout: React.FC = ({ children }: React.PropsWithChildren<ReactNode>): React.ReactElement => (
  <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header />
      <Navigation />

      <main>{children}</main>

      <Footer />
    </Container>
  </>
);

export default Layout;
