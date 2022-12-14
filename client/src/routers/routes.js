import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import UserProtected from "./UserProtected";

import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const Movie = lazy(() => import("../pages/Movie"));
const User = lazy(() => import("../pages/User/User"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Auth = lazy(() => import("../pages/Auth"));

const routes = createHashRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         // Homepage
         { index: true, element: <Home /> },

         // Movie
         { path: "/movie/:movieId", element: <Movie /> },

         // User
         {
            path: "/user",
            element: (
               <UserProtected>
                  <User />
               </UserProtected>
            ),
         },

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
