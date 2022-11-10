import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePic: null,
  loginInfo: null,
  isAuthenticated: false,
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
    login: (state, loginInfo) => {
      state.loginInfo = loginInfo.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.loginInfo = null;
      state.isAuthenticated = false;
    },
    resetUser: (state) => {
      state.profilePic = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProfilePic, resetProfilePic, resetUser, login, logout } =
  userSlice.actions;

export default userSlice.reducer;
