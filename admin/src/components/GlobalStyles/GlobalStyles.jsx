import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.scss";

const GlobalStyles = ({ children }) => {
   return (
      <>
         {children}
         <ToastContainer />
      </>
   );
};

export default GlobalStyles;
