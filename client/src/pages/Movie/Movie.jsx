// Import Library's Hook
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import Components
import Poster from "./Poster";
import ShowTimes from "./ShowTimes";
import Loading from "../../layouts/Loading";

// Import Custom Hook
import useRequest from "../../hooks/useRequest";

// Import Services
import cinemaAPI from "../../services/cinemaAPI";

// Import Module Css
import styles from "./styles.module.scss";

const Movie = () => {
   const [movieShowtimes, setMovieShowtimes] = useState();
   const { movieId } = useParams();
   const getMoviesShowtimes = useRequest(cinemaAPI.getMoviesShowtimes, {
      manual: true,
   });

   // Update movie showtimes by movie is selected
   useEffect(() => {
      getMoviesShowtimes
         .runAsync(movieId)
         .then((data) => {
            setMovieShowtimes(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [movieId]);

   if (!movieShowtimes) return <Loading />;

   return (
      <section className={styles.movie}>
         <Poster movieInfor={movieShowtimes} />
         <ShowTimes movieId={movieId} movieShowTimes={movieShowtimes} />
      </section>
   );
};

export default Movie;
