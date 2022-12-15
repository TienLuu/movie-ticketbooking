// Import Library's Component
import classnames from "classnames/bind";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const CinemaItem = ({ cinemaBranch, onSelect, isActive, logo }) => {
   return (
      <>
         <div
            className={cn("cinemaItem", {
               active: isActive,
            })}
            onClick={() => onSelect(cinemaBranch.maCumRap)}
         >
            <div className={styles.wrapper}>
               <div className={styles.img}>
                  <img src={logo} alt={cinemaBranch.maCumRap} />
               </div>
               <div className={styles.text}>{cinemaBranch.tenCumRap}</div>
               <div className={styles.icon}>
                  <KeyboardArrowRightIcon />
               </div>
            </div>
         </div>
      </>
   );
};

export default CinemaItem;
