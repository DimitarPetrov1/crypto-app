import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "brightness(0) invert(1)"
      }}
    >
      <img
        style={style.wheel}
        className="spinner"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Floader-png-load-icon-png-image-7953-500.png&f=1&nofb=1"
        alt="O"
      />
    </div>
  );
};

const style = {
  wheel: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
};

export default Loader;
