// Import Library's Hook
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import Components
import Poster from "./Poster";
import ShowTimes from "./ShowTimes";

// Import Module Css
import styles from "./styles.module.scss";
import cinemaAPI from "../../services/cinemaAPI";

const Movie = () => {
   const [movieShowtimes, setMovieShowtimes] = useState();
   const { movieId } = useParams();

   // Update movie showtimes by movie is selected
   useEffect(() => {
      (async () => {
         try {
            const movieShowtimes = await cinemaAPI.getMoviesShowtimes(movieId);

            setMovieShowtimes(movieShowtimes);
         } catch (error) {
            console.log(error);
         }
      })();
   }, [movieId]);

   return (
      <section className={styles.movie}>
         <Poster movieInfor={movieShowtimes} />
         <ShowTimes movieId={movieId} movieShowTimes={movieShowtimes} />
      </section>
   );
};

export default Movie;
