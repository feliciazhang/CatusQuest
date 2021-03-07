import React from 'react'
import { Link } from "gatsby"
import Layout from 'components/Layout';
import "styles/main.scss"

const App = () => (
  <Layout>
    <IndexPage />
  </Layout>
);

const IndexPage = () => {
  return (
    <div className="title-page">
      <h1 className='title'>CATU'S<br/>QUEST</h1>
      <Link to="/game" className='start-btn'>PRESS START</Link>
    </div>
  );
};

export default App;
