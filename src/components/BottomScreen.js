import React, { useEffect, useState } from "react";

const BottomScreen = ({ scene, descriptionIdx, showQuestion }) => {
  const { descriptions, question, options } = scene;

  console.log(descriptions[descriptionIdx].text);
  return (
    <div className="bottom-screen">
      {!showQuestion ? (
        <p>{descriptions[descriptionIdx].text}</p>
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
