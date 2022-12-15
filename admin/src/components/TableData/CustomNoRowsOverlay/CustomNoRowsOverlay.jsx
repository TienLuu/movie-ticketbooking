import React from "react";

import { NoDocument } from "../../SVG";
import styles from "./styles.module.scss";

const CustomNoRowsOverlay = () => {
   return (
      <div className={styles.wrapper}>
         <NoDocument />
         <p>No Data Available</p>
      </div>
   );
};

export default CustomNoRowsOverlay;
