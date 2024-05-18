import { useState } from "react";
import DoctorModalContext from "./doctormodalContext";
const DoctorModalState = (props) => {
  const [opendModal, setOpendModal] = useState(false);
  return (
    <DoctorModalContext.Provider value={{ opendModal, setOpendModal }}>
      {props.children}
    </DoctorModalContext.Provider>
  );
};

export default DoctorModalState;
