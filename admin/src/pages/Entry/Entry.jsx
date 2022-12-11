// Import Components
import Button from "../../components/Button";

// Import Module Css
import styles from "./styles.module.scss";

const Entry = () => {
   return (
      <div className={styles.wrapper}>
         <h1>WELCOME</h1>
         <h3>Thanks you for visiting admin web page</h3>
         <p>To access, please login</p>
         <Button solid large to="/login">
            Go to Login
         </Button>
      </div>
   );
};

export default Entry;
