import React from "react";

const TopScreen = ({ scene, descriptionIdx }) => {
  const { img, descriptions } = scene;
  const imageSrc = descriptions[descriptionIdx].img !== ''
    ? descriptions[descriptionIdx].img
    : img;

  return (<img className="top-screen-img" src={`../${imageSrc}`} />);
};

export default TopScreen;
