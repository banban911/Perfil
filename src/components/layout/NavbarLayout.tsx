import React, { Fragment, FunctionComponent } from "react";
import ButtonToggleTheme from "../button/ToggleBtn";
import ThemeContextProvider from "../contexts/ThemeContext";
import Navbars from "../navbar/Navbars";

const NavbarLayout: FunctionComponent = () => {
  return (
    <Fragment>
      <ThemeContextProvider>
        <Navbars />
        <ButtonToggleTheme />
      </ThemeContextProvider>
    </Fragment>
  );
};

export default NavbarLayout;
