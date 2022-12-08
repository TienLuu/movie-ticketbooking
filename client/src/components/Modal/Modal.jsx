// Import Library's Component
import cn from "classnames";

// Import Custom Hook
import useBodyScroll from "../../hooks/useBodyScroll";

// Import Module Css
import styles from "./styles.module.scss";

const Modal = ({ title, isOpen, onClose, children }) => {
   // Disable scroll
   useBodyScroll(isOpen);

   return (
      <>
         <div className={cn({ [styles.popup]: true, [styles.active]: isOpen })}>
            <div className={styles.modal}>
               <button className={styles.close} onClick={() => onClose()}>
                  <span>X</span>
               </button>
               <div className={styles.header}>
                  <h3>{title}</h3>
               </div>
               <div className={styles.body}>{children}</div>
               <div className={styles.footer}>
                  <button onClick={() => onClose()}>Đóng</button>
               </div>
            </div>
            <div className={styles.overlay}></div>
         </div>
      </>
   );
};

export default Modal;
