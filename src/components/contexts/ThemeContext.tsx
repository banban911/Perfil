import { createContext, ReactNode, useState } from "react";
import { PropTypes } from "@mui/material";

interface ThemeContextProps {
  children: ReactNode;
}
interface themeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const themeContextDefaultData = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<themeContextDefault>(
  themeContextDefaultData
);

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(
    themeContextDefaultData.theme
  );

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  const themeDisplay = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeDisplay}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
