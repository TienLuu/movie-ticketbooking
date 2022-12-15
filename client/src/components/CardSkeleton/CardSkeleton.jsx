import Skeleton from "@mui/material/Skeleton";
import styles from "./styles.module.scss";

const CardSkeleton = () => {
   return (
      <div className={styles.cardSkeleton}>
         <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
      </div>
   );
};

export default CardSkeleton;
