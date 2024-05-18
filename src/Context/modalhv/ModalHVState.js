import { useState } from "react";
import ModalhvContext from "./modalhvContext";
const ModalHVState = (props) => {
  const [openhvModal, setOpenhvModal] = useState(false);
  return (
    <ModalhvContext.Provider value={{ openhvModal, setOpenhvModal }}>
      {props.children}
    </ModalhvContext.Provider>
  );
};

export default ModalHVState;
