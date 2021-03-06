import React, { useState } from "react";
import ColorPicker from "components/ColorPicker";
import BottomScreen from "components/BottomScreen";
import { scenes } from "data/scenes";
import Console from "assets/svg/Console";
import Arrows from "assets/svg/Arrows";

// markup
const GamePage = () => {
  const [scene, setScene] = useState(null);
  const [consoleColor, setConsoleColor] = useState("#4D31BF");
  const [descriptionIdx, setDescriptionIdx] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  const handleNextClick = () => {
    console.log(scene);
    if (!scene) {
      setScene(scenes["catusRoom"]);
    } else {
      if (descriptionIdx < scene.descriptions.length - 1) {
        setDescriptionIdx(descriptionIdx + 1);
      } else {
        setShowQuestion(true);
      }
    }
  };

  return (
    <div className="game-page">
      <div className="console-wrapper">
        <Console color={consoleColor} />
        <div className="top-screen"></div>
        <div className="arrows">
          <Arrows onClick={handleNextClick}/>
        </div>
        {!scene ? (
          <ColorPicker color={consoleColor} setColor={setConsoleColor} />
        ) : (
          <BottomScreen
            scene={scene}
            descriptionIdx={descriptionIdx}
            showQuestion={showQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default GamePage;
