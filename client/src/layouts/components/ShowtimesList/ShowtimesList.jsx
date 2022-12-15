import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ShowtimesList = ({ showtimesList }) => {
   return (
      <div className={styles.showTimeList}>
         {showtimesList.map((showTimes) => (
            <Link
               preventScrollReset={true}
               key={showTimes.maLichChieu}
               to={`/checkout/${showTimes.maLichChieu}`}
            >
               {" "}
               <div className={styles.showTimeItem}>
                  <strong>{showTimes.ngayChieuGioChieu.timeStart}</strong> ~{" "}
                  {showTimes.ngayChieuGioChieu.timeEnd}
               </div>
            </Link>
         ))}
      </div>
   );
};

export default ShowtimesList;
