import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Patients from "./Components/Patients/Patients";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Styles/App.css";
import Doctors from "./Components/Doctors/Doctors";
import CreatePatient from "./Components/Patients/CreatePatient";
import Dashboard from "./Components/Dashboard/Dashboard";
import Tests from "./Components/Tests/Tests";
import CreateTest from "./Components/Tests/CreateTest";
import Contracts from "./Components/Contracts/Contract";
import CreateContract from "./Components/Contracts/CreateContract";
import Packages from "./Components/Packages/Packages";
import CreatePackage from "./Components/Packages/CreatePackage";
import Category from "./Components/Category/Category";
import CreateCategory from "./Components/Category/CreateCategory";
import { useContext } from "react";
import NavbarContext from "./Context/navbar/navbarContext";
import Modal from "./Components/Patients/CreatePatient/Modal";
import ModalContext from "./Context/patientmodal/modalContext";
import Invoices from "./Components/Invoices/Invoices";
import DoctorModalContext from "./Context/doctormodal/doctormodalContext";
import DoctorModal from "./Components/Patients/CreatePatient/DoctorModal";
import MedicalReport from "./Components/MedicalReport/MedicalReport";
import EditReport from "./Components/MedicalReport/EditReport";
import HomeVisit from "./Components/HomeVisits/HomeVisit";
import CreateHomeVisit from "./Components/HomeVisits/CreateHomeVisit";

import ModalhvContext from "./Context/modalhv/modalhvContext";
import ModalHV from "./Components/HomeVisits/ModalHV/ModalHV";
import CreateDoctor from "./Components/Doctors/CreateDoctor/CreateDoctor";
import DoctorsReport from "./Components/DoctorsReport/DoctorsReport";
import EditDoctorsReport from "./Components/DoctorsReport/EditDoctorsReport";
import Branches from "./Components/Branches/Branches";
import CreateBranch from "./Components/Branches/CreateBranch";
import Users from "./Components/RoleAndUsers/Users";
import EditRole from "./Components/RoleAndUsers/EditRole/EditRole";

function App() {
  const { navOpen } = useContext(NavbarContext);
  const { openModal } = useContext(ModalContext);
  const { opendModal } = useContext(DoctorModalContext);
  const { openhvModal } = useContext(ModalhvContext);
  return (
    <div className="w-full">
      {openModal && <Modal />}
      {opendModal && <DoctorModal />}
      {openhvModal && <ModalHV />}
      <Sidebar />
      <div className={`${navOpen ? "navbarexpanded" : "navbarcontracted"}  `}>
        <Navbar />
        <Routes>
          <Route path="/patients" element={<Patients />} />
          <Route path="/report" element={<MedicalReport />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/create" element={<CreateDoctor />} />
          <Route path="/doctors/reports" element={<DoctorsReport />} />
          <Route path="/doctors/reports/edit" element={<EditDoctorsReport />} />
          {/* in doctor report edit you will have to modify route to /:id  */}
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/contracts/create" element={<CreateContract />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/create" element={<CreateBranch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/create" element={<CreateCategory />} />
          <Route path="/packages/create" element={<CreatePackage />} />
          <Route path="/patients/create" element={<CreatePatient />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/tests/create" element={<CreateTest />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/homevisit" element={<HomeVisit />} />
          <Route path="/homevisit/create" element={<CreateHomeVisit />} />
          <Route path="/report/edit" element={<EditReport />} />
          <Route path="/roles" element={<Users />} />
          <Route path="/roles/create" element={<EditRole />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
