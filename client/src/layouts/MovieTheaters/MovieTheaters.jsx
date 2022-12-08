// Import Library's Hook
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Components
import MovieTheater from "./MovieTheater";

// Import API Config
import cinemaAPI from "../../services/cinemaAPI";

// Import Module Css
import styles from "./styles.module.scss";

const MovieTheaters = ({ onSelect, initialCinemaCluster }) => {
   const [cinemaClusters, setCinemaClusters] = useState([]);
   const [activeId, setActiveId] = useState();

   useEffect(() => {
      (async () => {
         try {
            // Get movie theater list
            const cinemaClusters = await cinemaAPI.getCinemaClusters();

            // Set cinema cluster is active at position 0
            initialCinemaCluster(cinemaClusters[0].maHeThongRap);

            // Update cinema cluster list
            setCinemaClusters(cinemaClusters);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   const handleSelect = (cinemaClusterId) => {
      // Update cinema cluster list by movie cluster
      onSelect(cinemaClusterId);

      // Set cinema cluster is selected
      setActiveId(cinemaClusterId);
   };

   return (
      <div className={styles.movieClusters}>
         <div className={styles.container}>
            {cinemaClusters.length !== 0 ? (
               <Swiper
                  breakpoints={{
                     0: {
                        slidesPerView: `${cinemaClusters.length - 2}` * 1,
                     },
                     380: {
                        slidesPerView: `${cinemaClusters.length - 1}` * 1,
                     },
                     460: {
                        slidesPerView: `${cinemaClusters.length}` * 1,
                     },
                     500: {
                        slidesPerView: `${cinemaClusters.length + 1}` * 1,
                     },
                  }}
                  spaceBetween={2}
                  speed={300}
                  navigation={true}
                  modules={[Navigation]}
                  className="movieClusters-slide"
               >
                  {cinemaClusters.map((item, index) => (
                     <SwiperSlide
                        key={item.maHeThongRap}
                        className="movieClusters-item"
                     >
                        <MovieTheater
                           logo={item.logo}
                           cinemaClusterId={item.maHeThongRap}
                           isActive={
                              activeId === item.maHeThongRap ||
                              (index === 0 && !activeId)
                           }
                           setActive={handleSelect}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            ) : (
               ""
            )}
         </div>
      </div>
   );
};

export default MovieTheaters;
