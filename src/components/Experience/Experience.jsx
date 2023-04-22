import React, { useContext } from "react";
import { themeContext } from "../../Context";
import thumbup from "../../img/thumbup.png";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          <img src={thumbup} />
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>
          portfolio website{" "}
        </span>
        <span className="span">
          A portfolio website provides an online presence and an overview of
          your company. Potential customers can go to this site to find out what
          work you have done and how they can contact you.
        </span>
      </div>
    </div>
  );
};

export default Experience;
