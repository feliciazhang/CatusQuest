import * as React from "react";
import { Helmet } from "react-helmet";
import console from '../images/console.svg';
import "../styles/main.scss"

// markup
const GamePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catu's Quest</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto+Mono&family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main className="game-content">
        <img src={console} className="game-console"/>
      </main>
    </div>
  );
};

export default GamePage;
