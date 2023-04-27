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
        <span className="title" style={{ color: darkMode ? "white" : "" }}>
          key context{" "}
        </span>
        <span className="span">
          Certainly! In terms of key context, it's worth noting that እሳት Tech is
          based in Ethiopia, a country with a rapidly growing tech sector. The
          company is dedicated to promoting technological innovation within
          Ethiopia and beyond, with a focus on creating solutions that address
          local and global challenges. Some of the key services offered by እሳት
          Tech include website design and development, mobile app development,
          software development, and digital marketing. Additionally, the company
          has a strong commitment to social responsibility, supporting various
          community initiatives and promoting sustainable business practices.
        </span>
      </div>
    </div>
  );
};

export default Experience;
