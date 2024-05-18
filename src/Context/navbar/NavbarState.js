import { useState } from "react";
import NavbarContext from "./navbarContext";

const NavbarState = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
