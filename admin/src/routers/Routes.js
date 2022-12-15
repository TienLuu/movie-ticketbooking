import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/RootLayout";
import Entry from "../pages/Entry";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserList from "../pages/UserLists";
import UnderDevelopment from "../pages/UnderDevelopment";
import UserDetail from "../pages/UserDetail";
import UserNew from "../pages/UserNew";
import MovieNew from "../pages/MovieNew";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound/NotFound";
import UserProtected from "./UserProtected";

const routes = () => {
   return (
      <Routes>
         {/* Route */}
         {/* Route Public */}
         <Route path="/" element={<Entry />} />

         {/* Route Authen */}
         <Route path="/login" element={<Login />} />

         {/* Route Private */}
         <Route
            path="/admin"
            element={
               <UserProtected>
                  <DefaultLayout />
               </UserProtected>
            }
         >
            <Route index element={<Home />} />
            {/* User*/}
            <Route path="users" element={<UserList />} />
            <Route path="users/new" element={<UserNew />} />
            <Route path="users/:id" element={<UserDetail />} />
            {/* Movie */}
            <Route path="movies" element={<MovieList />} />
            <Route path="movies/new" element={<MovieNew />} />
            <Route path="movies/:id" element={<MovieDetail />} />

            {/* Underdevelopment*/}
            <Route path="*" element={<UnderDevelopment />} />
         </Route>

         <Route path="*" element={<NotFound />} />
      </Routes>
   );
};

export default routes;
