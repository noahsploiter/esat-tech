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
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          <img src={thumbup} />
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>
          lead generation website{" "}
        </span>
        <span className="span">
          This site is designed primarily to generate leads through an online
          presence. SEO and targeted marketing techniques play a huge role in
          bringing in new customers. Sales take place, however, offline.
        </span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          <img src={thumbup} />
        </div>
        <span style={{ color: darkMode ? "white" : "" }}> utility website</span>
        <span className="span">
          Utility websites function more like a tool than a standard website.
          These sites don't necessarily generate sales and leads. This includes
          blogging and software like services.
        </span>
      </div>
    </div>
  );
};

export default Experience;
