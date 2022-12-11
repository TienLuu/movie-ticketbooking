// Import Library's Hook
import { useEffect, useState } from "react";

// Import Custom Hook
import useRequest from "../../../hooks/useRequest";

// Import Components
import FilmSlide from "./FilmSilde/FilmSlide";
import Empty from "../../../layouts/Empty";

// Import API Config
import movieAPI from "../../../services/movieAPI";

// Import Module Css
import styles from "./styles.module.scss";

const FilmList = () => {
   const [movies, setMovies] = useState([]);
   const getMovies = useRequest(movieAPI.getMovies, { manual: true });

   // Get movie list
   useEffect(() => {
      getMovies
         .runAsync()
         .then((data) => {
            setMovies(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   // Filter movie now showing
   const movieNShowing = movies.filter((movie) => movie.dangChieu === true);

   // Filter movie coming soon
   const moviesCSoon = movies.filter(
      (movie) => movie.dangChieu === false && movie.sapChieu === true
   );

   if (!getMovies.data) {
      return <Empty />;
   }
   return (
      <>
         <section className={styles.filmList}>
            <div className={styles.wrapper}>
               <div className={styles.nowShowing}>
                  <h2>
                     <span>Now</span> showing
                  </h2>
                  <FilmSlide
                     btnPrevClass="nowShowing__prev"
                     btnNextClass="nowShowing__next"
                     swiperClass="nowShowing__film"
                     movies={movieNShowing}
                  />
               </div>

               <div className={styles.comingSoon}>
                  <h2>
                     <span>Coming</span> soon
                  </h2>
                  <FilmSlide
                     btnPrevClass="comingSoon__prev"
                     btnNextClass="comingSoon__next"
                     swiperClass="comingSoon__film"
                     movies={moviesCSoon}
                  />
               </div>
            </div>
         </section>
      </>
   );
};

export default FilmList;
