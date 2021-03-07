import React from 'react'
import { Helmet } from "react-helmet";
import "styles/main.scss"
import favicon from 'assets/favicon.ico';

export const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Catu's Quest</title>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
    <main>{children}</main>
  </div>
);

export default Layout;
