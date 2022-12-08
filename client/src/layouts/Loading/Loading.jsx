// Import Custom Hook
import useScrollToTop from "../../hooks/useScrollToTop";

// Import Module Css
import styles from "./styles.module.scss";

const Loading = () => {
   useScrollToTop();
   return (
      <div className={styles.loading}>
         <div className={styles.loadingDualRing}>
            <div className={styles.dualRing}>
               <div></div>
               <div>
                  <div></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Loading;
