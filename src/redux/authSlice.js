import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  allUsers: [], 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      state.allUsers = action.payload.allUsers || [];
    },
    removeUser: (state) => {
      state.user = null;
      state.allUsers = [];
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;