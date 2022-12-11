// Import Library's Hook
import { useContext } from "react";

// Import Library's Component
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import classname from "classnames/bind";

// Import Context
import themeContext from "../../../../context/themeContext";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classname.bind(styles);

const ThemeToggle = () => {
   const [theme, setTheme] = useContext(themeContext);

   return (
      <div
         className={cn("theme", { [theme]: theme })}
         onClick={() => {
            setTheme((theme) => {
               if (theme === "light-theme") return "dark-theme";
               if (theme === "dark-theme") return "light-theme";
               return theme;
            });
         }}
      >
         <LightModeOutlinedIcon fontSize="inherit" color="inherit" />
         <DarkModeIcon fontSize="inherit" color="inherit" />
      </div>
   );
};

export default ThemeToggle;
