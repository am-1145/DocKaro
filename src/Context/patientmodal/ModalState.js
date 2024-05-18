import { useState } from "react";
import ModalContext from "./modalContext";
const ModalState = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
