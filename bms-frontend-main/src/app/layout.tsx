'use client';

import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/NavBar';
import { Container } from 'reactstrap';
import React, { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import Svgs from "@/app/Svgs";
import Footer from '@/components/Footer';

// @ts-ignore
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      </head>
      <body className={inter.className + ' bg-dark'}>
          <UserProvider>
            <Svgs></Svgs>
            <video id="background-video" autoPlay muted loop playsInline preload="none" poster="">
              <source src="assets/dust.mp4" type="video/mp4" />
            </video>
            <main id="app" className="d-flex flex-column h-100 vh-100 w-100" data-testid="layout">
              <NavBar bgColor="dark"/>
              <Container fluid style={{ zIndex: 2, height:'100%' }} className='p-0 m-0'>{children}</Container>
              {/* <Footer bgColor="dark" /> */}
            </main>
          </UserProvider>
        </body>
      </html>
      );
}
