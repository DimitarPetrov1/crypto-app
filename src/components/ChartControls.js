import React from "react";
import { dark } from "../defs";

const ChartControls = ({ handleDays }) => {
  return (
    <div style={style.chartControls}>
      <button value="7" style={style.chartControls.button} onClick={handleDays}>
        7D
      </button>
      <button
        value="14"
        style={style.chartControls.button}
        onClick={handleDays}
      >
        14D
      </button>
      <button
        value="30"
        style={style.chartControls.button}
        onClick={handleDays}
      >
        1M
      </button>
      <button
        value="90"
        style={style.chartControls.button}
        onClick={handleDays}
      >
        3M
      </button>
      <button
        value="180"
        style={style.chartControls.button}
        onClick={handleDays}
      >
        6M
      </button>
    </div>
  );
};

const style = {
  chartControls: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",

    button: {
      width: 40,
      height: 40,
      border: 0,
      backgroundColor: dark.app.altBg,
      borderRadius: 6,
      color: dark.app.text,
      fontWeight: 900
    }
  }
};

export default ChartControls;
