import styles from "./styles.module.scss";

const Loading = () => {
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
