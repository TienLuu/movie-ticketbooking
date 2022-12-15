import { Link } from "react-router-dom";

import CardSkeleton from "../../components/CardSkeleton";
import styles from "./styles.module.scss";

const NotFound = () => {
   return (
      <section className={styles.notFound}>
         <div className={styles.wrapper}>
            <div className={styles.image}>
               <img
                  src="https://res.cloudinary.com/dzzfmvtiu/image/upload/v1670326080/movie-ticketbooking/page-not-found_zkirlp.svg"
                  alt="PageNotFound"
               />
            </div>
            <div className={styles.text}>
               <h2>We can't find that page</h2>
               <p>
                  We're fairly sure that page used to be here, but seems to have
                  gone missing. We do apologise on it's behalf.
               </p>
               <Link to="/">
                  <button>Home</button>
               </Link>
            </div>
            <CardSkeleton />
         </div>
      </section>
   );
};

export default NotFound;
