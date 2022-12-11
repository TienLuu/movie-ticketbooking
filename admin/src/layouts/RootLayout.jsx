// Import Library's Hook
import { Outlet } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Import Module Css
import styles from "./styles.module.scss";

const DefaultLayout = () => {
   return (
      <div className={styles.wrapper}>
         <Sidebar />
         <div className={styles.container}>
            <Header />
            <div className={styles.content}>
               <Outlet />
            </div>
            <Footer />
         </div>
      </div>
   );
};

export default DefaultLayout;
