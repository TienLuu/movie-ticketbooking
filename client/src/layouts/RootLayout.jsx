import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

const RootLayout = () => {
   useScrollToTop();

   return (
      <div style={{ minHeight: "100vh" }}>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default RootLayout;
