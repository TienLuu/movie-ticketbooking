import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../services/userAPI";

const initialState = {
   user: null,
   loading: false,
   error: null,
};

// Thunk Action
export const getUserInfor = createAsyncThunk("user/getUserInfor", async () => {
   try {
      const data = await userAPI.getUserInfor();
      return data;
   } catch (error) {
      throw error;
   }
});

const userSlice = createSlice({
   name: "user",
   initialState,

   extraReducers: (builder) => {
      builder.addCase(getUserInfor.pending, (state, action) => {
         return { ...state, loading: true, error: null };
      });

      builder.addCase(getUserInfor.fulfilled, (state, action) => {
         return { ...state, loading: false, user: action.payload, error: null };
      });

      builder.addCase(getUserInfor.rejected, (state, action) => {
         return { ...state, loading: false, error: action.error.message };
      });
   },
});

export default userSlice.reducer;
