// Import Library's Hooks
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Library's Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import cn from "classnames";

// Import Module Css
import styles from "./styles.module.scss";

const FilmSlide = ({ btnPrevclass, btnNextClass, swiperClass, movies }) => {
   return (
      <div>
         <Swiper
            navigation={{
               prevEl: `.${btnPrevclass}`,
               nextEl: `.${btnNextClass}`,
            }}
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={2}
            breakpoints={{
               576: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               840: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
               1150: {
                  slidesPerView: 5,
                  spaceBetween: 20,
               },
            }}
            modules={[Navigation]}
            className={swiperClass}
         >
            {movies.map((movie) => (
               <SwiperSlide key={movie.maPhim}>
                  <Link to={`/movie/${movie.maPhim}`}>
                     <div className={styles.filmItem}>
                        <div className={styles.itemHeading}>
                           <div className={styles.itemOverlay}>
                              <span className={cn({ under18: !movie.hot })}>
                                 {movie.hot ? "18+" : "16+"}
                              </span>
                           </div>
                           <div className={styles.itemImage}>
                              <img src={movie.hinhAnh} alt={movie.tenPhim} />
                           </div>
                        </div>
                        <div className={styles.itemBody}>
                           <div className={styles.itemTitle}>
                              <h3>{movie.tenPhim}</h3>
                           </div>
                           <div className={styles.itemSubtitle}>
                              <span>Hành động, gay cấn</span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className={styles.filmNavigate}>
            <span
               className={cn({
                  [styles.arrowPrev]: true,
                  [btnPrevclass]: true,
               })}
            >
               <ArrowRightAltIcon />
            </span>
            <span
               className={cn({
                  [styles.arrowNext]: true,
                  [btnNextClass]: true,
               })}
            >
               <ArrowRightAltIcon />
            </span>
         </div>
      </div>
   );
};

export default FilmSlide;
