import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      <title>Next.js Sample App</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout">
      <NavBar />
      <Container className="flex-grow-1 mt-5">{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
