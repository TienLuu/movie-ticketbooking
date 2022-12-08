// Import Library's Hook
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Import API Config
import authAPI from "../services/authAPI";

const initialState = {
   user: JSON.parse(localStorage.getItem("user")) || null,
   loading: false,
   error: null,
};

// Thunk Action
export const signin = createAsyncThunk("author/signin", async (values) => {
   try {
      const data = await authAPI.signin(values);
      localStorage.setItem("user", JSON.stringify(data));

      return data;
   } catch (error) {
      throw error;
   }
});

const authSlice = createSlice({
   name: "author",
   initialState,
   reducers: {
      logout: (state, action) => {
         localStorage.removeItem("user");
         return { ...state, user: null };
      },
      resetState: (state, action) => {
         return { ...state, error: null };
      },
   },

   extraReducers: (builder) => {
      builder.addCase(signin.pending, (state, action) => {
         return { ...state, loading: true, error: null };
      });

      builder.addCase(signin.fulfilled, (state, action) => {
         return { ...state, loading: false, user: action.payload, error: null };
      });

      builder.addCase(signin.rejected, (state, action) => {
         return { ...state, loading: false, error: action.error.message };
      });
   },
});

export default authSlice.reducer;
export const { logout, resetState } = authSlice.actions;
