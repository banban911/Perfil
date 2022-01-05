import React, { useContext } from "react";
import { Fab } from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";
import CSS from "csstype";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";

function ButtonToggleTheme() {
  const ButtonToggleThemeStyle: CSS.Properties = {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    toggleTheme(theme === "primary" ? "secondary" : "primary");
  };
  return (
    <Fab
      color='primary'
      variant='extended'
      className='toggleTheme_Btn'
      style={ButtonToggleThemeStyle}
      onClick={handleThemeToggle}
    >
      {theme === "primary" ? "Date" : "Hate"}
      {/*<DarkModeIcon /> : <LightModeIcon />*/}
    </Fab>
  );
}

export default ButtonToggleTheme;
