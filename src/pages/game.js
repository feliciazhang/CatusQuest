import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import { Layout } from "components/Layout";
import ColorPicker from "components/ColorPicker";
import TopScreen from "components/TopScreen";
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

  useEffect(() => {
    return () => {
      roomAudio && roomAudio.pause();
      optionAudio && optionAudio.pause();
    };
  }, [roomAudio, optionAudio]);

  const resetScene = (scene) => {
    roomAudio && roomAudio.pause();
    optionAudio && optionAudio.pause();
    setScene(scene);
    setDescriptionIdx(0);
    setShowQuestion(false);
    setSceneEndMessage("");
    setOptionSelectedIdx(null);
    if (scene && scene.audio) {
      const newRoomAudio = new Audio(`../${scene.audio}`);
      setRoomAudio(newRoomAudio);
      newRoomAudio.play();
    }
    setOptionAudio(null);
  };

  const handleNextClick = () => {
    if (!scene) {
      resetScene(scenes["finalScene"]);
    } else if (scene === scenes["youDie"]) {
      resetScene(null);
    } else if (sceneEndMessage && scene === scenes["finalScene"]) {
      navigate("/end");
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
    const { audio, audioTime = 0, message } = scene.options[idx];
    if (audio) {
      const audioFile = new Audio(audio);
      setOptionAudio(audioFile);
      audioFile.currentTime = audioTime;
      audioFile.play();
      if (roomAudio) {
        roomAudio.volume = 0.2;
      }
      setTimeout(() => {
        audioFile.pause();
        if (roomAudio) {
          roomAudio.volume = 1;
        }
      }, 3000);
    }
    setSceneEndMessage(message);
    setOptionSelectedIdx(idx);
  };

  const showOptions = scene && showQuestion && scene.options;

  return (
    <Layout>
      <div className="game-page">
        <Link className="home-btn" to="/">
          HOME
        </Link>
        <div className="console-wrapper">
          <Console color={consoleColor} />
          {!scene ? (
            <div className="top-screen">
              <p className="top-screen-instructions">
                SELECT A CONSOLE COLOR THEN PRESS THE RIGHT ARROW TO BEGIN
              </p>
            </div>
          ) : (
            <TopScreen scene={scene} descriptionIdx={descriptionIdx} />
          )}
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
                  showOptions && idx >= scene.options.length
                    ? "answer-btn-disabled"
                    : ""
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
