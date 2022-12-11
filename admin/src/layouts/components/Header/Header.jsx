// Import Library's Component
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

// Import Components
import SearchBar from "../../../components/SearchBar";
import ThemeToggle from "./ThemeToggle";
import Button from "../../../components/Button";
import AccountMenu from "./AccountMenu";

// Import Module Css
import styles from "./styles.module.scss";

const Header = () => {
   return (
      <div className={styles.wrapper}>
         <SearchBar />
         <div className={styles.control}>
            <ThemeToggle />
            <Button className={styles.notificates}>
               <NotificationsNoneOutlinedIcon fontSize="inherit" />
            </Button>
            <AccountMenu />
         </div>
      </div>
   );
};

export default Header;
