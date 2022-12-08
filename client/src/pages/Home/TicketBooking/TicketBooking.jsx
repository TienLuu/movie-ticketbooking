// Import Library's Hook
import { useState, useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";

// Import Components
import Movietheaters from "../../../layouts/MovieTheaters";
import InputSelectCinema from "../../../layouts/InputSelectCinema";
import CinemaList from "../../../layouts/CinemaList";
import MovieList from "../../../layouts/MovieList";
import Modal from "../../../components/Modal";

// Import Services
import cinemaAPI from "../../../services/cinemaAPI";

// Import Module Css
import formatDate from "../../../utils/formatDate";
import styles from "./styles.module.scss";

const TicketBooking = () => {
   const [cinemaClusterId, setCinemaClusterId] = useState();
   const [cinemaShowtimes, setCinemaShowtimes] = useState([]);
   const [cinemaBranchSelected, setCinemaBranchSelected] = useState();
   const [movieShowtimes, setMovieShowtimes] = useState([]);

   const [isOpenModal, setIsOpenModal] = useState(false);
   const { width } = useWindowSize();

   useEffect(() => {
      (async () => {
         try {
            // Get cinema show times list by cinema cluster id
            const cinemaShowtimes = await cinemaAPI.getCinemaShowtimes(
               cinemaClusterId
            );
            console.log(cinemaShowtimes);

            const movies = formatMovieShowTimes(
               cinemaShowtimes[0].lstCumRap[0]
            );

            // Update cinema show times
            setCinemaShowtimes(cinemaShowtimes);

            // Setup movie show time, cinema branch is selected at position 0
            setMovieShowtimes(movies);
            setCinemaBranchSelected(cinemaShowtimes[0].lstCumRap[0]);
         } catch (error) {
            console.log(error);
         }
      })();
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
      setIsOpenModal(!isOpenModal);
   };

   // Closed modal when click cinema branch
   const handleSelectCinemaBranchInModal = () => {
      setIsOpenModal(false);
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
                     isOpen={isOpenModal}
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
