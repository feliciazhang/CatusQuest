import * as React from "react";
import Console from "../assets/svg/Console";
import "../styles/main.scss";

// markup
const GamePage = () => {
  return (
    <div className="game-page">
      <div className="console-wrapper">
        <Console />
      </div>
    </div>
  );
};

export default GamePage;
