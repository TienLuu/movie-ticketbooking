// Import Library's Hook
import { configureStore } from "@reduxjs/toolkit";

// Import Slice
import auth from "./slices/authSlice";
import user from "./slices/userSlice";

const store = configureStore({
   reducer: { auth, user },
});

export default store;
