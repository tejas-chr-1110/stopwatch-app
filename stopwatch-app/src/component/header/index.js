import React from "react";
import styles from "./Header.module.scss";
import Button from "../ui-components/button";
import { useNavigate } from "react-router-dom";
const Header = ({ className }) => {
  const navigate = useNavigate();
  const onbuttonClick = (navi) => {
    navigate(navi);
  };

  return (
    <header className={[styles.header, className].join(" ")}>
      <h1 className={[styles.left_warpper].join(" ")}>Tejas Chorge</h1>
      <div className={[styles.right_warpper].join(" ")}>
        <div
          className={[styles.headerButtonComponent].join(" ")}
          onClick={() => onbuttonClick("/")}
        >
          Home
        </div>
        <div
          className={[styles.headerButtonComponent].join(" ")}
          onClick={() => onbuttonClick("/projects")}
        >
          Projects
        </div>

        <Button
          className={[styles.headerbutton].join(" ")}
          callbackFunction={() => {
            onbuttonClick("/contact");
            console.log("hello");
          }}
          child={"Contact"}
        ></Button>
      </div>
    </header>
  );
};

export default Header;
