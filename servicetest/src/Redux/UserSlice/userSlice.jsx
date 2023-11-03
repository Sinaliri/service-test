import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      // Update the user data with the new values
      state.user = { ...state.user, ...action.payload };
    },
  },
});
export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
