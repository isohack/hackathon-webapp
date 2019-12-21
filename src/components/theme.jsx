import React from "react";
import './theme.css';
import ThemeImage from "../img/themes.png";

const Theme = () => (
  <div
    className="section theme-body-background"
  >
    <div className="row theme-body">
      <h3 className={"theme-header center"}>Theme</h3>
      <img className={"theme-image"} src={ThemeImage} alt={"theme-presentation"} />
    </div>
  </div>
);

export default Theme;