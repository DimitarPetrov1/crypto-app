import React, { useState } from "react";

const Settings = () => {
  const [mode, setMode] = useState("dark");
  return (
    <div>
      {/* dark/light mode */}
      <div>{mode} mode</div>
      {/* Switch */}

      <input type="radio" name="" id="" />
      <input type="radio" name="" id="" />
    </div>
  );
};

export default Settings;
