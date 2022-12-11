// Import Library's Hook
import { useState, useEffect } from "react";

// Import Custom Hook
import useRequest from "../../../hooks/useRequest";
import useToggle from "../../../hooks/useToggle";
import useWindowSize from "../../../hooks/useWindowSize";

// Import Components
import Movietheaters from "../../../layouts/MovieTheaters";
import InputSelectCinema from "../../../layouts/InputSelectCinema";
import CinemaList from "../../../layouts/CinemaList";
import MovieList from "../../../layouts/MovieList";
import Modal from "../../../components/Modal";

// Import Services
import cinemaAPI from "../../../services/cinemaAPI";

// Import Util
import formatDate from "../../../utils/formatDate";

// Import Module Css
import styles from "./styles.module.scss";
import Empty from "../../../layouts/Empty/Empty";

const TicketBooking = () => {
   const [cinemaClusterId, setCinemaClusterId] = useState();
   const [cinemaShowtimes, setCinemaShowtimes] = useState([]);
   const [cinemaBranchSelected, setCinemaBranchSelected] = useState();
   const [movieShowtimes, setMovieShowtimes] = useState([]);

   const [value, toggleValue] = useToggle(false);
   const getCinemaShowtimes = useRequest(cinemaAPI.getCinemaShowtimes, {
      manual: true,
   });
   const { width } = useWindowSize(300);

   useEffect(() => {
      // Get cinema show times list by cinema cluster id
      getCinemaShowtimes
         .runAsync(cinemaClusterId)
         .then((data) => {
            const movies = formatMovieShowTimes(data[0].lstCumRap[0]);

            // Update cinema show times
            setCinemaShowtimes(data);

            // Setup movie show time, cinema branch is selected at position 0
            setMovieShowtimes(movies);
            setCinemaBranchSelected(data[0].lstCumRap[0]);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [cinemaClusterId]);

   // Format show times
   const formatMovieShowTimes = (cinemaBranch) => {
      const movies = { ...cinemaBranch.danhSachPhim };
      let newMovies = [];

      for (const key in movies) {
         // Format ngayChieuGiochieu
         const showtimes = movies[key].lstLichChieuTheoPhim.map((item) => {
            return {
               ...item,
               ngayChieuGioChieu: formatDate(item.ngayChieuGioChieu),
            };
         });
         const movie = {
            ...movies[key],
            lstLichChieuTheoPhim: showtimes,
         };

         newMovies.push(movie);
      }
      return newMovies;
   };

   // Open/Close modal
   const handleSelect = () => {
      toggleValue(!value);
   };

   // Closed modal when click cinema branch
   const handleSelectCinemaBranchInModal = () => {
      toggleValue(false);
   };

   const handleSelectCinemaBranch = (cinemaBranchId) => {
      // Find cinema branch is selected
      const cinemaBranch = cinemaShowtimes[0].lstCumRap.find(
         (item) => item.maCumRap === cinemaBranchId
      );

      // Format show times
      const movies = formatMovieShowTimes(cinemaBranch);

      // Update cinema branch's movie show times
      setCinemaBranchSelected(cinemaBranch);
      setMovieShowtimes(movies);
   };

   // Initialize the cinema value at position 0
   const handleInitialCinemaCluster = (cinemaClusterId) => {
      setCinemaClusterId(cinemaClusterId);
   };

   const handleSelectCinemaCluster = (cinemaClusterId) => {
      setCinemaClusterId(cinemaClusterId);
   };

   if (!getCinemaShowtimes.data) {
      return <Empty />;
   }

   return (
      <section className={styles.ticketBooking}>
         <div className={styles.wrapper}>
            <div className={styles.supTitle}>
               <h2>Cinema Schedule</h2>
            </div>
            <div className={styles.main}>
               <div>
                  {width <= 768 ? undefined : (
                     <Movietheaters
                        onSelect={handleSelectCinemaCluster}
                        initialCinemaCluster={handleInitialCinemaCluster}
                     />
                  )}
               </div>
               <div className={styles.cinemaList}>
                  {width <= 768 ? (
                     <div onClick={handleSelect}>
                        <InputSelectCinema
                           isMobile={true}
                           isIcon={true}
                           cinemaBranchName={cinemaBranchSelected?.tenCumRap}
                           cinemaBranchAddress={cinemaBranchSelected?.diaChi}
                           logo={cinemaShowtimes[0]?.logo}
                        />
                     </div>
                  ) : undefined}
                  <Modal
                     title="Danh sách rạp"
                     isOpen={value}
                     onClose={handleSelect}
                  >
                     <Movietheaters
                        onSelect={handleSelectCinemaCluster}
                        initialCinemaCluster={handleInitialCinemaCluster}
                     />
                     <CinemaList
                        onSelect={handleSelectCinemaBranchInModal}
                        onSelectCinemaBranch={handleSelectCinemaBranch}
                        cinemaCluster={cinemaShowtimes[0]}
                        cinemaBranchId={cinemaBranchSelected?.maCumRap}
                     />
                  </Modal>
               </div>
               <div className={styles.desktop}>
                  <div className={styles.desktopAdress}>
                     {width <= 768 ? (
                        ""
                     ) : (
                        <CinemaList
                           onSelect={handleSelectCinemaBranchInModal}
                           onSelectCinemaBranch={handleSelectCinemaBranch}
                           cinemaCluster={cinemaShowtimes[0]}
                           cinemaBranchId={cinemaBranchSelected?.maCumRap}
                        />
                     )}
                  </div>
                  <div className={styles.desktopDetails}>
                     <div className={styles.desktopDetailsWrapper}>
                        {width <= 768 ? (
                           ""
                        ) : (
                           <InputSelectCinema
                              isMobile={false}
                              isIcon={false}
                              cinemaBranchName={cinemaBranchSelected?.tenCumRap}
                              cinemaBranchAddress={cinemaBranchSelected?.diaChi}
                              logo={cinemaShowtimes[0]?.logo}
                           />
                        )}
                        <div>
                           <MovieList movieList={movieShowtimes} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TicketBooking;
