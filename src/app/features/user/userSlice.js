import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePic: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    default: (state) => {
      return {
        ...state,
      };
    },
    setProfilePic: (state, profilePic) => {
      state.profilePic = profilePic.payload;
    },
    resetProfilePic: (state) => {
      state.profilePic = null;
    },
    resetUser: (state) => {
      state.profilePic = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfilePic, resetProfilePic, resetUser } = userSlice.actions;

export default userSlice.reducer;
