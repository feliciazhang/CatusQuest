import React, { useState } from "react";
import Console from "assets/svg/Console";

const COLOR = "COLOR"

// markup
const GamePage = () => {
  const [pageId, setPageId] = useState(COLOR);
  const [consoleColor, setConsoleColor] = useState("#4D31BF")

  return (
    <div className="game-page">
      <div className="console-wrapper">
        <Console />
        <div className="top-screen">

        </div>
        <div className="bottom-screen">
          {}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
