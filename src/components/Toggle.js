import React from "react";

const Toggle = ({ handleToggle, position, label }) => {
  return (
    <div>
      <div>{label}</div>
      <div style={{ position: "relative" }}>
        <label
          style={checkbox.body}
          htmlFor="darkModeSwitch"
          onClick={handleToggle}
        ></label>
        <div
          style={{
            position: "absolute",
            top: 2,
            left: position ? 2 : 30,
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: position ? "red" : "green",
            pointerEvents: "none",
            transition:
              "left 0.2s ease-in-out, background-color 0.2s ease-in-out"
          }}
        ></div>
      </div>

      <input
        style={{ visibility: "hidden", height: 0, pointerEvents: "none" }}
        type="checkbox"
        id="darkModeSwitch"
      />
    </div>
  );
};

const checkbox = {
  body: {
    width: 52,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#fff",
    border: "1px solid #ececec",

    display: "block"
  }
};

export default Toggle;
