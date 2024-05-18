import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ColorState from "./Context/colormode/ColorState";
import NavbarState from "./Context/navbar/NavbarState";
import ModalState from "./Context/patientmodal/ModalState";
// import DoctorModal from "./Components/Patients/CreatePatient/DoctorModal";
import DoctorModalState from "./Context/doctormodal/DoctorModalState";
import ModalHVState from "./Context/modalhv/ModalHVState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarState>
      <ColorState>
        <ModalState>
          <ModalHVState>
            <DoctorModalState>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </DoctorModalState>
          </ModalHVState>
        </ModalState>
      </ColorState>
    </NavbarState>
  </React.StrictMode>
);
