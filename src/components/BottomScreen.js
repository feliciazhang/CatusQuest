import React from "react";

const BottomScreen = ({ scene, descriptionIdx, showQuestion, sceneEndMessage }) => {
  const { descriptions, question, options } = scene;

  const messageToShow = sceneEndMessage || (!showQuestion && descriptions[descriptionIdx].text)

  return (
    <div className="bottom-screen disable-selection">

      {messageToShow ? (
        <p>{messageToShow}</p>
      ) : (
        <div>
          <p>{question}</p>
          <ol type="A">
            {options.map((o, idx) => (
              <li key={`option-${idx}`}>{o.text}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default BottomScreen;
