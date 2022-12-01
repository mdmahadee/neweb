import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>300+</div>
        <span  style={{color: darkMode?'white':''}}>Html/Css </span>
        <span>Learning Days</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>30+</div>
        <span  style={{color: darkMode?'white':''}}>Java Script </span>
        <span>Learning Days</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>React JS </span>
        <span>Learning Days</span>
      </div>
    </div>
  );
};

export default Experience;
