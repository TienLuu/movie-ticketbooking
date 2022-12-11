// Import Library's Component
import classnames from "classnames/bind";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const InputSelectCinema = ({
   isMobile,
   isIcon,
   logo,
   cinemaBranchName,
   cinemaBranchAddress,
}) => {
   return (
      <>
         <div
            className={cn("InputSelectCinema", {
               isSelect: isMobile,
            })}
         >
            <span>Select Cinema</span>
            <div className={styles.container}>
               <div>
                  <div className={styles.image}>
                     <img src={logo} alt={cinemaBranchName} />
                  </div>
                  <div className={styles.inforDetails}>
                     <h4>{cinemaBranchName}</h4>
                     <div className={styles.address}>
                        <p>{cinemaBranchAddress}</p>
                     </div>
                  </div>
                  <div className={styles.icon}>
                     {isIcon ? <KeyboardArrowDownIcon /> : ""}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default InputSelectCinema;
