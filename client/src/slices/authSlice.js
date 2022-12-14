import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";
import localService from "../services/localService";

const initialState = {
   user: localService.user.get() || null,
   loading: false,
   error: null,
};

// Thunk Action
export const signin = createAsyncThunk("author/signin", async (values) => {
   try {
      const data = await authAPI.signin(values);
      localService.user.set(data);

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
         localService.user.remove();
         return { ...state, user: null };
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
