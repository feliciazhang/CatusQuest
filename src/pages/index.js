import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from "gatsby"
import "../styles/main.scss"

const Layout = ({ children }) => (
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

const App = () => (
  <Layout>
    <IndexPage />
  </Layout>
);

const IndexPage = () => {
  return (
    <div>
      <main>
        <h1 className='title'>CATU'S<br/>QUEST</h1>
        <Link to="/game" className='start-btn'>PRESS START</Link>
      </main>
    </div>
  );
};

export default App;
