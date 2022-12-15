import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

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
