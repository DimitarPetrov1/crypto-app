import React from "react";
import { Link } from "react-router-dom";
import ErrorSvg from "../assets/svg/undraw_warning_cyit.svg";
import Nav from "./Nav";

const NotFound = () => {
  return (
    <>
      <Nav link="/" />

      <div
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 60px)"
        }}
      >
        <div>
          Oops! Something went wrong, please click{" "}
          <Link style={{ color: "yellow" }} to="/">
            here
          </Link>
        </div>
        <img style={notFound.img} src={ErrorSvg} alt="Error" />
      </div>
    </>
  );
};

const notFound = {
  img: {
    marginTop: 20,
    width: "100%",
    objectFit: "contain"
  }
};

export default NotFound;
