import * as React from "react";
import console from '../images/console.svg';
import "../styles/main.scss"

// markup
const GamePage = () => {
  return (
    <div>
      <img src={console} className="game-console"/>
    </div>
  );
};

export default GamePage;
