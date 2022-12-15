import PropTypes from "prop-types";
import classnames from "classnames/bind";

import styles from "./styles.module.scss";
const cn = classnames.bind(styles);

const Divider = ({
   children,
   orientation = "horizontal",
   textAlign = "center",
   variant = "fullWidth",
}) => {
   const customClass = cn("divider", {
      [orientation]: orientation,
      [textAlign]: textAlign,
      [variant]: variant,
      content: children,
   });

   return children ? (
      <div className={customClass}>
         <span>{children}</span>
      </div>
   ) : (
      <hr className={customClass} />
   );
};

Divider.propTypes = {
   children: PropTypes.node,
   orientation: PropTypes.string,
   textAlign: PropTypes.string,
   variant: PropTypes.string,
};

export default Divider;
