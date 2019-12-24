import React from "react";
import './theme.css';
import ThemeSnowImage from "../img/theme-snow.png";
import ThemeCleanImage from "../img/theme-swachh-bharat.png";
import ThemeClimateImage from "../img/theme-climate-change.png";
import ThemeFarmImage from "../img/theme-farm.png";
import ThemeTechImage from "../img/theme-tech.png";
import ThemeTreesImage from "../img/theme-trees.png";
import ThemePoliceImage from "../img/theme-police.png";
import ThemeCityImage from "../img/theme-smart-city.png";
import ThemeConstructionImage from "../img/theme-construction.png";

const Theme = () => (
  <div
    className="section theme-body-background"
  >
    <div className="row theme-body">
      <h3 className={"theme-header center"}>Theme</h3>
      <div className={"theme-container"}>
        <img className={"theme-image theme-image-animate-one"} src={ThemeSnowImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-two"} src={ThemeCleanImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-three"} src={ThemeClimateImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-four"} src={ThemeFarmImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-five"} src={ThemeTechImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-six"} src={ThemeTreesImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-seven"} src={ThemePoliceImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-eight"} src={ThemeCityImage} alt={"theme-presentation"}/>
        <img className={"theme-image theme-image-animate-nine"} src={ThemeConstructionImage}
             alt={"theme-presentation"}/>
      </div>
    </div>
  </div>
);

export default Theme;