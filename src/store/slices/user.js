import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
   data: {
      role: "",
   },
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserData: (state, action) => {
         state.data = {
            role: action.payload.role,
         };
      },
   },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
