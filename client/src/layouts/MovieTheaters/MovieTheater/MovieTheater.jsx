// Import Module Css
import styles from "./styles.module.scss";

const MovieTheater = ({ logo, cinemaClusterId, isActive, setActive }) => {
   return (
      <>
         <div
            className={`${styles.movieTheaterInfor} ${
               isActive ? `${styles.active}` : ""
            } `}
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
