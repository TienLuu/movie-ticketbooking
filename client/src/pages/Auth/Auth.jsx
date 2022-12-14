import { Outlet } from "react-router-dom";
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
