import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}
