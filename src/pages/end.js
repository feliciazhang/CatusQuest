import React, { useEffect } from "react";
import { Link } from "gatsby";
import Layout from "components/Layout";
import "styles/main.scss";

const EndPage = () => {
  const audio = new Audio(`../audio/happy-birthday.mp3`);
  useEffect(() => {
    audio && audio.play();

    return () => {
      audio && audio.pause();
    };
  });

  return (
    <Layout>
      <div className="end-page">
        <h1 className="end-title">
          HAPPY
          <br />
          BIRTHDAY
          <br />
          CATU!
        </h1>
        <Link to="../game" className="start-btn">
          PLAY AGAIN
        </Link>
      </div>
    </Layout>
  );
};

export default EndPage;
