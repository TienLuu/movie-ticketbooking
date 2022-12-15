import classnames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const MovieTheater = ({ logo, cinemaClusterId, isActive, setActive }) => {
   return (
      <>
         <div
            className={cn("movieTheaterInfor", { active: isActive })}
            onClick={() => setActive(cinemaClusterId)}
         >
            <div className={styles.image}>
               <img src={logo} alt={cinemaClusterId} />
            </div>
            <div className={styles.text}>{cinemaClusterId}</div>
         </div>
      </>
   );
};

export default MovieTheater;
