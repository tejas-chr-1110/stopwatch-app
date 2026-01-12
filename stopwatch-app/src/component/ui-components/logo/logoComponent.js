import React, { useState, useEffect } from "react";
import "./logoCompo.scss";
import { ReactComponent as Logo } from "../../../logo.svg";
const ReactLogo = () => {
  return (
    <div className="icon_wrapper">
      <div className="App-logo">
        <Logo className="App-logo1" />
      </div>
    </div>
  );
};
export default ReactLogo;
