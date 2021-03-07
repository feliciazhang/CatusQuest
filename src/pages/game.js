import React, { useState } from "react";
import { Layout } from "./index";
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
  const [sceneEndMessage, setSceneEndMessage] = useState("");
  const [optionSelectedIdx, setOptionSelectedIdx] = useState(null);
  const [roomAudio, setRoomAudio] = useState(null);
  const [optionAudio, setOptionAudio] = useState(null);

  const resetScene = (scene) => {
    roomAudio && roomAudio.pause()
    optionAudio && optionAudio.pause()
    setScene(scene);
    setDescriptionIdx(0);
    setShowQuestion(false);
    setSceneEndMessage("");
    setOptionSelectedIdx(null);
    const newRoomAudio = new Audio(scene.audio)
    setRoomAudio(newRoomAudio)
    setOptionAudio(null)
    newRoomAudio.play()
  };

  const handleNextClick = () => {
    if (!scene) {
      resetScene(scenes["catusRoom"]);
    } else if (sceneEndMessage) {
      const { leadsTo } = scene.options[optionSelectedIdx];
      if (!leadsTo) {
        setShowQuestion(true);
        setSceneEndMessage("");
        setOptionSelectedIdx(null);
      } else {
        resetScene(scenes[leadsTo]);
      }
    } else if (descriptionIdx < scene.descriptions.length - 1) {
      setDescriptionIdx(descriptionIdx + 1);
    } else {
      setShowQuestion(true);
    }
  };

  const handleOptionSelect = (idx) => {
    if (!showQuestion || idx >= scene.options.length) {
      return;
    }
    const { audio, message } = scene.options[idx];
    if (audio) {
      const audioFile = new Audio(audio);
      setOptionAudio(audioFile)
      audioFile.play()
    }
    setSceneEndMessage(message);
    setOptionSelectedIdx(idx);
  };

  return (
    <Layout>
      <div className="game-page">
        <div className="console-wrapper">
          <Console color={consoleColor} />
          <div className="top-screen"></div>
          <div className="arrows">
            <Arrows onClick={handleNextClick} />
          </div>
          {!scene ? (
            <ColorPicker color={consoleColor} setColor={setConsoleColor} />
          ) : (
            <BottomScreen
              scene={scene}
              descriptionIdx={descriptionIdx}
              showQuestion={showQuestion}
              sceneEndMessage={sceneEndMessage}
            />
          )}
          <div className="answer-btn-group">
            {["A", "B", "C", "D"].map((option, idx) => (
              <button
                key={`option-btn-${idx}`}
                className={`answer-btn ${
                  scene && showQuestion && idx >= scene.options.length && "answer-btn-disabled"
                }`}
                onClick={() => handleOptionSelect(idx)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GamePage;
