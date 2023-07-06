import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button
        onClick={() => {
          toggleState();
        }}
      >
        {isToggled ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Toggle;
