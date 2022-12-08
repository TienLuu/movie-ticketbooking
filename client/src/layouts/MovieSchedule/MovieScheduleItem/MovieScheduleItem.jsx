// Import Library's Component
import cn from "classnames";

// Import Module Css
import styles from "./styles.module.scss";

const MovieShceduleItem = ({ day, isActive, setActive }) => {
   return (
      <>
         <div
            className={cn({
               [styles.movieScheduleItem]: true,
               [styles.active]: isActive,
            })}
            onClick={() => setActive(day.dd)}
         >
            <div className={styles.header}>{day.dd}</div>
            <div className={styles.footer}>{day.text}</div>
         </div>
      </>
   );
};

export default MovieShceduleItem;
