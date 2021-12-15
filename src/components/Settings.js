import React, { useState } from "react";
import Toggle from "./Toggle";

const Settings = () => {
  const [dark, setDark] = useState(false);

  const handleTheme = () => setDark(!dark);

  return (
    <div>
      {/* dark/light mode */}
      <Toggle
        handleToggle={handleTheme}
        position={dark}
        label={"Switch theme"}
      />
    </div>
  );
};

export default Settings;
