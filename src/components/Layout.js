import React from 'react'
import { Helmet } from "react-helmet";
import "styles/main.scss"
import favicon from 'assets/favicon.ico';

export const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Catu's Quest</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono&family=Audiowide&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
    <main>{children}</main>
  </div>
);

export default Layout;
