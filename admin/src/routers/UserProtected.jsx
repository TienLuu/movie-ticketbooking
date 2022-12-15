import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProtected = ({ children }) => {
   const { user } = useSelector((state) => state.auth);

   if (!user) {
      return <Navigate to="/login" />;
   } else {
      return children;
   }
};

export default UserProtected;
