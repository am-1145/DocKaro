import { useState } from "react";
import ColorContext from "./colorContext";

const ColorState = (props) => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <ColorContext.Provider value={{ lightMode, setLightMode }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
