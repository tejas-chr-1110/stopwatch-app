import React, { useState, useEffect } from "react";

const Button = ({ child, className, callbackFunction }) => {
  return (
    <div className={className} onClick={callbackFunction}>
      {child}
    </div>
  );
};
export default Button;
