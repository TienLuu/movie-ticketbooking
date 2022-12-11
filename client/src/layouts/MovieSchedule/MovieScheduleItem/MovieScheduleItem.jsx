// Import Library's Component
import classnames from "classnames/bind";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const MovieShceduleItem = ({ day, isActive, setActive }) => {
   return (
      <>
         <div
            className={cn("movieScheduleItem", {
               active: isActive,
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
