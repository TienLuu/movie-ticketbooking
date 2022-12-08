// Import Library's Hook
import { Outlet } from "react-router-dom";

// Import Component
import Header from "../Header";
import Footer from "../Footer";

const RootLayout = () => {
   return (
      <div style={{ minHeight: "100vh" }}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default RootLayout;
