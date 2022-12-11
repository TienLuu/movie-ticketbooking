// Import Library's Hook
import { Link } from "react-router-dom";

// Import Library's Component
import Typography from "@mui/material/Typography";

// Import Module Css
import styles from "./styles.module.scss";

const Brand = () => {
   return (
      <>
         <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block" } }}
            id={styles.navBrand}
         >
            <Link to="/">
               <strong>watch</strong>trailer
            </Link>
         </Typography>
      </>
   );
};

export default Brand;
