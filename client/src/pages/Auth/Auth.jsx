// Import Library's Hooks
import { Outlet } from "react-router-dom";

// Import Module Css
import styles from "./styles.module.scss";

const Auth = () => {
   return (
      <section className={styles.authentication}>
         <div className={styles.container}>
            <Outlet />
         </div>
      </section>
   );
};

export default Auth;
