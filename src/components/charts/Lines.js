import React from "react";
import { VictoryLine } from "victory";

const Lines = ({ data, animate, width, stokeWidth }) => {
  return (
    <div
      style={{ width: width, zIndex: 0 }}
      onClick={(e) => e.preventDefault()}
    >
      <VictoryLine
        style={{
          data: {
            stroke: "#fff",
            backgroundColor: "teal",
            strokeWidth: stokeWidth
          },
          parent: { border: 0, zIndex: 0 }
        }}
        width={600}
        data={data}
        animate={animate}
        // "basis", "bundle", "cardinal", "catmullRom", "linear", "monotoneX", "monotoneY", "natural", "step", "stepAfter", "stepBefore"
        interpolation="basis"
      />
    </div>
  );
};

export default Lines;
