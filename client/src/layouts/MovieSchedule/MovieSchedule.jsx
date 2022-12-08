// Import Library's Hook
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Components
import MovieScheduleItem from "./MovieScheduleItem";

// Import Module Css
import formatDate from "../../utils/formatDate";
import styles from "./styles.module.scss";

const days = [
   { dd: 25, text: "Thứ hai" },
   { dd: 26, text: "Thứ ba" },
   { dd: 27, text: "Thứ tư" },
   { dd: 28, text: "Thứ năm" },
   { dd: 29, text: "Thứ sáu" },
   { dd: 30, text: "Thứ bảy" },
   { dd: 1, text: "Chủ nhật" },
];

const MovieSchedule = ({ rb, cinemaBranchSelected }) => {
   const [activeId, setActiveId] = useState();
   const [showtimes, setShowtimes] = useState();

   useEffect(() => {
      // for (const item in cinemaBranchSelected?.danhSachPhim) {
      //    for (const item1 in cinemaBranchSelected?.danhSachPhim[item]
      //       .lstLichChieuTheoPhim) {

      //    }
      //    cinemaBranchSelected?.danhSachPhim[item].lstLichChieuTheoPhim.map(
      //       (item) => {
      //          return {
      //             ...item,
      //             ngayChieuGioChieu: formatDate(item.ngayChieuGioChieu),
      //          };
      //       }
      //    );
      // }
      if (!cinemaBranchSelected) {
         return;
      }

      // Filter movie by day
      const movies = cinemaBranchSelected?.danhSachPhim.map((item) => item);

      // Format date
      let newMovies = [];

      for (const key in movies) {
         const showtimes = movies[key].lstLichChieuTheoPhim.map((item) => {
            return {
               ...item,
               ngayChieuGioChieu: formatDate(item.ngayChieuGioChieu),
            };
         });
         const movie = { ...movies[key], lstLichChieuTheoPhim: showtimes };

         newMovies.push(movie);
      }
   }, [cinemaBranchSelected]);

   const handleSelect = (movieScheduleId) => {
      setActiveId(movieScheduleId);
   };
   return (
      <>
         <div className={styles.movieSchedule}>
            <div>
               <Swiper
                  breakpoints={rb}
                  spaceBetween={2}
                  speed={300}
                  navigation={true}
                  modules={[Navigation]}
                  className="movieSchedule-slide"
               >
                  {days.map((item, index) => (
                     <SwiperSlide key={index} className="movieSchedule-item">
                        <MovieScheduleItem
                           day={item}
                           isActive={
                              item.dd === activeId ||
                              (item.dd === 25 && !activeId)
                           }
                           setActive={handleSelect}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   );
};

export default MovieSchedule;
