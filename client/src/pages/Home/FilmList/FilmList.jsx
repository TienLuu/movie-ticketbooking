// Import Library's Hook
import { useEffect, useState } from "react";

// Import Components
import FilmSlide from "./FilmSilde/FilmSlide";

// Import API Config
import movieAPI from "../../../services/movieAPI";

// Import Module Css
import styles from "./styles.module.scss";

const FilmList = () => {
   const [movies, setMovies] = useState([]);

   // Get movie list
   useEffect(() => {
      (async () => {
         try {
            const data = await movieAPI.getMovies();
            setMovies(data);
         } catch (error) {}
      })();
   }, []);

   // Filter movie now showing
   const movieNShowing = movies.filter((movie) => movie.dangChieu === true);

   // Filter movie coming soon
   const moviesCSoon = movies.filter(
      (movie) => movie.dangChieu === false && movie.sapChieu === true
   );
   console.log(movies);

   return (
      <>
         <section className={styles.filmList}>
            <div className={styles.wrapper}>
               <div className={styles.nowShowing}>
                  <h2>
                     <span>Now</span> showing
                  </h2>

                  <FilmSlide
                     btnPrevclass="nowShowing__prev"
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
                     btnPrevclass="comingSoon__prev"
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
