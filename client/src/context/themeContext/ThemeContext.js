import { createContext, useState } from "react";
import styles from "./styles.module.scss";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState("light-theme");

   return (
      <ThemeContext.Provider value={[theme]}>
         <div className={styles.theme}>{children}</div>
      </ThemeContext.Provider>
   );
};

export default ThemeContext;
