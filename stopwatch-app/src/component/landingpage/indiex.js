import React, { useRef, useEffect } from "react";

import "../../App.css";
import "./landingpage.scss";

import Header from "../header";
import Footer from "../footer";
import videoFile from "../assets/main-circle-heavy.mp4";
import MiddleContent from "../middle-content/middle_content";

const LandingPage = () => {
  return (
    <div className="landing_page section is-dark">
      <Header className="header_components" />
      <MiddleContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
