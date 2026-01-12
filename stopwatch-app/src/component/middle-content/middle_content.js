import React, { useRef, useEffect } from "react";
import "./middle_content.scss";
import TextBox from "../ui-components/textBox/textBox";
import White_dots from "../assets/white_dots.png";
import web_dev from "../assets/image/web_dev1.avif";

import SVGComponent from "./svgcomp";
import SalaryCalculator from "../salary_calculator";

const MiddleContent = () => {
  return (
    <div className="middle_wrapper section is-dark">
      {/* <div className="section_1">
        <SalaryCalculator />
      </div> */}
      {/* <div className="section_2">
        <div className="button_with_animation">Hello</div>
        <img src={web_dev} />
      </div>
      <div className="section_3 gallery-title">HOW WE DO It</div>
      <div className="section_4">
        <TextBox child={"LET'S"} className={""} />
        <TextBox child={"CHAT"} className={""} />
        <SVGComponent />
        <div class="line-title-footer"></div>
      </div> */}
    </div>
  );
};

export default MiddleContent;
