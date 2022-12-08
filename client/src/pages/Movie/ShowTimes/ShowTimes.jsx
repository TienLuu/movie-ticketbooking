// Import Library's Hook
import { useState, useEffect } from "react";

// Import Components
import MovieTheaters from "../../../layouts/MovieTheaters";
import CinemaSelect from "../CinemaSelect";
import Empty from "../../../layouts/Empty/Empty";

// Import Module Css
import styles from "./styles.module.scss";

const ShowTimes = ({ movieShowTimes }) => {
   const [cinemaShowtimes, setCinemaShowtimes] = useState([]);
   const [cinemaClusterId, setCinemaClusterId] = useState();
   const [cinemaBranchSelected, setCinemaBranchSelected] = useState();

   useEffect(() => {
      try {
         if (!movieShowTimes) return;

         // Find cinema cluster by movie is selected
         const cinemaClusterExist = movieShowTimes.heThongRapChieu.filter(
            (item) => item.maHeThongRap === cinemaClusterId
         );

         if (cinemaClusterExist.length !== 0) {
            // Update cinem show times
            setCinemaShowtimes(cinemaClusterExist);

            // Set cinem branch is selected at position 0
            setCinemaBranchSelected(cinemaClusterExist[0].cumRapChieu[0]);
         } else {
            setCinemaShowtimes([]);
            setCinemaBranchSelected([]);
         }
      } catch (error) {
         console.log(error);
      }
   }, [cinemaClusterId, movieShowTimes]);

   // Update cinema cluster is selected at position 0
   const handleInitialCinemaCluster = (cinemaClusterId) => {
      setCinemaClusterId(cinemaClusterId);
   };

   // Update cinema branch is selected
   const handleSelectCinemaBranch = (cinemaBranchId) => {
      const cinemaBranch = cinemaShowtimes[0].lstCumRap.find(
         (item) => item.maCumRap === cinemaBranchId
      );
      setCinemaBranchSelected(cinemaBranch);
   };

   // Update cinema cluster is selected
   const handleSelectCinemaCluster = (cinemaClusterId) => {
      setCinemaClusterId(cinemaClusterId);
   };

   return (
      <>
         <div className={styles.showTimes}>
            <div className={styles.container}>
               <div className={styles.title}>
                  <h2>Show times</h2>
               </div>

               <div className={styles.showTimeDetail}>
                  <MovieTheaters
                     onSelect={handleSelectCinemaCluster}
                     initialCinemaCluster={handleInitialCinemaCluster}
                  />
                  <div className={styles.cinemaSelectGroup}>
                     {!cinemaShowtimes[0] ? (
                        <Empty />
                     ) : (
                        cinemaShowtimes[0].cumRapChieu.map((item) => (
                           <CinemaSelect
                              key={item.maCumRap}
                              logo={cinemaShowtimes[0].logo}
                              cinemaBranch={item}
                              onSelectCinemaBranch={handleSelectCinemaBranch}
                              isActive={
                                 item.maCumRap ===
                                    cinemaBranchSelected.maCumRap ||
                                 !cinemaBranchSelected
                              }
                           />
                        ))
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ShowTimes;
