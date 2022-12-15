import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const Navigate = ({ navItems }) => {
   return (
      <>
         <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className={styles.navList}
         >
            {navItems.map((item, index) => (
               <Link to="/" preventScrollReset={true} key={index}>
                  <Button
                     key={item}
                     sx={{ color: "#000", mr: 1 }}
                     className={styles.navLink}
                  >
                     {item}
                  </Button>
               </Link>
            ))}
         </Box>
      </>
   );
};

export default Navigate;
