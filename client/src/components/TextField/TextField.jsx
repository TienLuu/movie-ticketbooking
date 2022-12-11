// Import Library's Hook
import { forwardRef } from "react";

// Import Library's Component
import PropTypes from "prop-types";

// Import Module Css
import styles from "./styles.module.scss";

const TextField = forwardRef(
   (
      {
         type = "text",
         label,
         onChange,
         className,
         error,
         placeholder,
         ...passProp
      },
      ref
   ) => {
      let Component = "input";

      if (type === "textarea") {
         Component = "textarea";
         type = null;
      }

      return (
         <div>
            {label && <label>{label}</label>}
            <Component
               className={styles.input}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               {...passProp}
               ref={ref}
            />
            {error && <span className={styles.errorMess}>{error}</span>}
         </div>
      );
   }
);

TextField.propTypes = {
   type: PropTypes.string,
   label: PropTypes.string,
   onChange: PropTypes.func,
   placeholder: PropTypes.string,
};

export default TextField;
