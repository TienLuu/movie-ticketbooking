// Import Library's Hook
import { configureStore } from "@reduxjs/toolkit";

// Import Slice
import auth from "./slices/authSlice";

const store = configureStore({
   reducer: { auth },
});

export default store;
