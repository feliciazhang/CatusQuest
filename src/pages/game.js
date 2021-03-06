import React, { useState } from "react";
import Console from "assets/svg/Console";
import ColorPicker from "components/ColorPicker";
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
  };

  return (
    <div className="game-page">
      <div className="console-wrapper">
        <Console color={consoleColor} />
        <div className="top-screen"></div>
        {pageId === COLOR ? (
          <ColorPicker color={consoleColor} setColor={setConsoleColor} />
        ) : (
          <BottomScreen
            scene={scene}
            descriptionIdx={descriptionIdx}
            showQuestion={showQuestion}
          />
        )}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default GamePage;
