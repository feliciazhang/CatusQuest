import React from "react";
import { Link } from "gatsby";
import Layout from "components/Layout";
import "styles/main.scss";

const EndPage = () => {
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
