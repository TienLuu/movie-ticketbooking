// Import Library's Hook
import { createHashRouter } from "react-router-dom";

// Import Components
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import UserProtected from "./UserProtected";
import Checkout from "../pages/Checkout";
import Auth from "../pages/Auth";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";

const routes = createHashRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         // Homepage
         { index: true, element: <Home /> },

         // Movie
         { path: "/movie/:movieId", element: <Movie /> },

         // Checkout
         {
            path: "/checkout/:checkoutId",
            element: (
               <UserProtected>
                  <Checkout />
               </UserProtected>
            ),
         },

         // Authentication
         {
            path: "",
            element: <Auth />,
            children: [
               { path: "/signin", element: <Signin /> },
               { path: "/signup", element: <Signup /> },
            ],
         },
      ],
   },

   { path: "*", element: <NotFound /> },
]);

export default routes;
