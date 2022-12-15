import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";
import localService from "../services/localService";

const initialState = {
   user: localService.user.get() || null,
   loading: false,
   error: null,
};

export const signin = createAsyncThunk("auth/signin", async (values) => {
   try {
      const data = await authAPI.signin(values);

      if (data.maLoaiNguoiDung !== "QuanTri") throw "Insufficient access";
      localService.user.set(data);

      return data;
   } catch (error) {
      throw error;
   }
});

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logout: (state, action) => {
         localService.user.remove();
         localService.theme.remove();

         return { ...state, user: null };
      },
   },
   extraReducers: (builder) => {
      builder.addCase(signin.pending, (state, action) => {
         return { ...state, loading: true, error: null };
      });

      builder.addCase(signin.fulfilled, (state, action) => {
         return {
            ...state,
            loading: false,
            error: null,
            user: action.payload,
         };
      });

      builder.addCase(signin.rejected, (state, action) => {
         return {
            ...state,
            loading: false,
            error: action.error.message,
            user: null,
         };
      });
   },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
