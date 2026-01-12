import React, { useState, useEffect } from "react";
import "./grid.scss";

const Grid = ({ child, className, callbackFunction }) => {
  return (
    <div class="grid">
      <div class="grid-container">
        <div class="grid-line"></div>
        <div class="grid-line"></div>
        <div class="grid-line"></div>
        <div class="grid-line not-mobile"></div>
        <div class="grid-line not-mobile"></div>
      </div>
    </div>
  );
};
export default Grid;
