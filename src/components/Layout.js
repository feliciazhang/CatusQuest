import React from 'react'
import { Helmet } from "react-helmet";
import "styles/main.scss"

export const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Catu's Quest</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono&family=Audiowide&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <main>{children}</main>
  </div>
);

export default Layout;
