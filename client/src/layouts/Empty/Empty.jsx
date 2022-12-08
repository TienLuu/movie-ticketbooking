// Import Module Css
import styles from "./styles.module.scss";

const Empty = () => {
   return (
      <div className={styles.empty}>
         <img
            src="https://res.cloudinary.com/dzzfmvtiu/image/upload/v1670227365/movie-ticketbooking/151-1519416_pool-parties-in-bangalore-no-data-found-images_ul7xbg.png"
            alt=""
         />
      </div>
   );
};

export default Empty;
