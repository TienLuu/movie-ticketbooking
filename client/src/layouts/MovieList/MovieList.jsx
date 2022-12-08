// Import Library's Component
import cn from "classnames";

// Import Components
import ShowtimesList from "../ShowtimesList";
import Empty from "../Empty/Empty";

// Import Module Css
import styles from "./styles.module.scss";

const MovieList = ({ movieList = [] }) => {
   // Filter movie Nowshowing
   const moviesNowShowing = movieList.filter((item) => item.dangChieu === true);

   if (moviesNowShowing.length === 0) {
      return <Empty />;
   }
   return (
      <>
         <div className={styles.movieList}>
            <div className={styles.container}>
               {moviesNowShowing.map((item) => (
                  <div className={styles.movieItem} key={item.tenPhim}>
                     <div className={styles.wrapper}>
                        <div className={styles.movieItemDetails}>
                           <div className={styles.image}>
                              <img src={item.hinhAnh} alt={item.tenPhim} />
                           </div>
                           <div className={styles.text}>
                              <div className={styles.ageLimit}>
                                 <span
                                    className={cn({
                                       [styles.under18]: !item.hot,
                                    })}
                                 >
                                    {item.hot ? "18+" : "16+"}
                                 </span>
                              </div>
                              <h3 className={styles.title}>{item.tenPhim}</h3>
                              <p className={styles.subtitle}>
                                 hành động, gây cấn
                              </p>
                           </div>
                           <div className={styles.showTime}>
                              <div className={styles.showTimeDetails}>
                                 <span>2D Phụ đề</span>
                                 <ShowtimesList
                                    showtimesList={item.lstLichChieuTheoPhim}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default MovieList;
