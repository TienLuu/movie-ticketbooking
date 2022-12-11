// Import Components
import Button from "../../components/Button";

// Import Module Css
import styles from "./styles.module.scss";
import astronaut from "../../assets/images/astronaut.png";

const NotFound = () => {
   return (
      <div className={styles.wrapper}>
         <h2>404</h2>
         <h3>Page not found.</h3>
         <p>The page you are looking for might have been removed.</p>
         <Button solid primary large to="/login">
            Return to website
         </Button>
         <img src={astronaut} alt="page404" />
      </div>
   );
};

export default NotFound;
