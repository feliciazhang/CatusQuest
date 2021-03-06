import React, { useState } from "react";
import Console from "assets/svg/Console";
import BottomScreen from "components/BottomScreen";
import { scenes } from "data/scenes";

const COLOR = "COLOR";

// markup
const GamePage = () => {
  const [pageId, setPageId] = useState(COLOR);
  const [consoleColor, setConsoleColor] = useState("#4D31BF");
  const [descriptionIdx, setDescriptionIdx] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const scene = scenes.zachsCave;

  const handleNextClick = () => {
    if (descriptionIdx < scene.descriptions.length - 1) {
      setDescriptionIdx(descriptionIdx + 1);
    } else {
      setShowQuestion(true);
    }
  }

  return (
    <div className="game-page">
      <div className="console-wrapper">
        <Console />
        <div className="top-screen"></div>
        <BottomScreen
          scene={scene}
          descriptionIdx={descriptionIdx}
          showQuestion={showQuestion}
        />
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default GamePage;
