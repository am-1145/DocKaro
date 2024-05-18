import React, { useContext, useState } from "react";
import logo from "./../../public/Brimston.jpg";
import profile from "./../../public/profile.png";
import SidebarItems from "./SidebarItems";
import { MdOutlineApps } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbReportMedical } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { FaUserInjured } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { CiSquareMore } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
// import "./../../Styles/Scrollbar.css";
import "./../../Styles/Sidebar.css";
import ColorContext from "../../Context/colormode/colorContext";

//w-[4.5rem]when closed and w-[250px]when open
const Sidebar = () => {
  const iconStyle = { fontSize: "30px" };
  const [hovered, setHovered] = useState(false);
  const { lightMode } = useContext(ColorContext);

  return (
    <aside
      className={`${
        hovered ? "md:w-[250px]" : "md:w-[73px]"
      }   text-nowrap  w-[0px] opacity-0 md:opacity-100  fixed h-screen max-h-screen transition-all ease-in-out duration-300  shadow-xl shadow-black    ${
        lightMode ? "bg-white text-black" : "bg-[#283046] text-gray-200"
      } font-roboto font-medium  z-30`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="box-border w-0 md:w-full flex items-center justify-start py-[13px] px-[8px] border-b-[2px] border-gray-600">
        <img
          src={logo}
          alt=""
          className="md:w-[35px] h-[35px] w-0 mr-[8px] my-[-4px] border border-gray-400 rounded-lg bg-black "
        />
        <span
          className={`${
            hovered ? "max-w-[1000px]  opacity-100" : "max-w-0  opacity-0"
          } text-base transition-all ease-in-out duration-300`}
        >
          DoctKaro
        </span>
      </div>
      <div className="box-border md:w-full flex items-center justify-start py-[13px] px-[8px] border-b-[2px] border-gray-600">
        <img
          src={profile}
          alt=""
          className="w-[40px] h-[40px] rounded-full mr-[8px] "
        />
        <span
          className={`${
            hovered ? "max-w-[1000px]  opacity-100" : "max-w-0  opacity-0"
          } transition-all ease-in-out duration-300`}
        >
          Super Admin
        </span>
      </div>

      <ul className="box-border w-full pt-[13px] overflow-y-scroll overflow-x-hidden pr-[8px]   sidebaritems">
        <SidebarItems
          icon={<FaRegPlusSquare style={iconStyle} />}
          name="New Registration"
          path={"/patients/create"}
          hovered={hovered}
        />
        <SidebarItems
          icon={<MdOutlineApps style={iconStyle} />}
          name="Dashboard"
          path={"/dashboard"}
          hovered={hovered}
        />
        <SidebarItems
          icon={<LiaFileInvoiceDollarSolid style={iconStyle} />}
          name="Invoice"
          path={"/invoices"}
          hovered={hovered}
        />
        <SidebarItems
          icon={<TbReportMedical style={iconStyle} />}
          name="Medical Report"
          path={"/report"}
          hovered={hovered}
        />
        <SidebarItems
          icon={<BiTestTube style={iconStyle} />}
          name="Tests"
          hovered={hovered}
          subitems={[
            { name: "All Tests", link: "/tests" },
            { name: "Category", link: "/category" },
            { name: "Packages", link: "/packages" },
          ]}
        />

        <SidebarItems
          icon={<FaUserInjured style={iconStyle} />}
          name="Patients"
          path={"/patients"}
          hovered={hovered}
        />
        <SidebarItems
          icon={<FaUserDoctor style={iconStyle} />}
          name="Doctors"
          hovered={hovered}
          subitems={[
            { name: "All Doctors", link: "/doctors" },
            { name: "Doctors Report", link: "/doctors/reports" },
          ]}
        />
        <SidebarItems
          hovered={hovered}
          icon={<FaUserEdit style={iconStyle} />}
          name="Role and Users"
          path="/roles"
        />
        <SidebarItems
          icon={<CiSquareMore style={iconStyle} />}
          name="More"
          hovered={hovered}
          subitems={[
            { name: "Contract", link: "/contracts" },
            { name: "Home Visit", link: "/homevisit" },
            { name: "Branches", link: "/branches" },
          ]}
        />
        <SidebarItems
          icon={<IoSettingsSharp style={iconStyle} />}
          name="Settings"
          hovered={hovered}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
