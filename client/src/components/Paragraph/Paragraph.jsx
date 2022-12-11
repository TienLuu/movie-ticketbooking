// Import Library's Hook
import { useState } from "react";

// Import Custom Hook
import useToggle from "../../hooks/useToggle";

// Import Module Css
import styles from "./styles.module.scss";

const Paragraph = ({ paragraph, maxCharacters }) => {
   const [value, toggleValue] = useToggle(true);

   if (paragraph.length < maxCharacters) {
      return <p>{paragraph}</p>;
   }

   return (
      <div className={styles.text}>
         <p>
            {value ? paragraph.slice(0, maxCharacters) + "..." : paragraph}
            <span onClick={() => toggleValue(!value)}>
               {value ? "More" : "Less"}
            </span>
         </p>
      </div>
   );
};

export default Paragraph;
