// Import Library's Hooks
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Library's Components
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import classnames from "classnames/bind";

// Import Module Css
import styles from "./styles.module.scss";
import CardSkeleton from "../../../../components/CardSkeleton";

const cn = classnames.bind(styles);

const FilmSlide = ({ btnPrevClass, btnNextClass, swiperClass, movies }) => {
   return (
      <div>
         <Swiper
            navigation={{
               prevEl: `.${btnPrevClass}`,
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
            {!movies.length
               ? Array(5)
                    .fill(0)
                    .map((item, index) => (
                       <SwiperSlide key={index}>
                          <CardSkeleton />
                       </SwiperSlide>
                    ))
               : movies.map((movie) => (
                    <SwiperSlide key={movie.maPhim}>
                       <Link to={`/movie/${movie.maPhim}`}>
                          <div className={styles.filmItem}>
                             <div className={styles.itemHeading}>
                                <div className={styles.itemOverlay}>
                                   <span
                                      className={cn({
                                         under18: !movie.hot,
                                      })}
                                   >
                                      {movie.hot ? "18+" : "16+"}
                                   </span>
                                </div>
                                <div className={styles.itemImage}>
                                   <img
                                      src={movie.hinhAnh}
                                      alt={movie.tenPhim}
                                   />
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
            <span className={`${btnPrevClass} ${cn("arrowPrev")}`}>
               <ArrowRightAltIcon />
            </span>
            <span className={`${btnNextClass} ${cn("arrowNext")}`}>
               <ArrowRightAltIcon />
            </span>
         </div>
      </div>
   );
};

export default FilmSlide;
