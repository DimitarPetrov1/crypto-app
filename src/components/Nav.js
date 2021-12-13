import React from "react";
import { Link } from "react-router-dom";
import Settings from "../assets/svg/settings.svg";
import Back from "../assets/svg/chevron-left.svg";
import { dark } from "../defs";

const Nav = ({ link, title }) => {
  return (
    <div style={navStyle.wrap}>
      <Link to={link}>
        <div style={navStyle.squareButton}>
          <img src={link === "/" ? Back : Settings} alt="context-button" />
        </div>
      </Link>
      <div>
        <p>{title}</p>
      </div>
      <div style={navStyle.squareButton}>
        <img
          style={navStyle.avatar}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F9ejbajmx9df11.jpg&f=1&nofb=1"
          alt="Avatar-pic"
        />
      </div>
    </div>
  );
};

const navStyle = {
  wrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: dark.app.bg,
    flexDirection: "row",
    width: "100%",
    height: 60,
    position: "sticky",
    padding: "0 10px",
    top: 0,
    zIndex: 100,
    boxShadow: "1px 9px 30px -20px rgba(0,0,0,0.75)"
  },
  squareButton: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden"
  },
  avatar: {
    width: 40,
    height: 40
  }
};

export default Nav;
