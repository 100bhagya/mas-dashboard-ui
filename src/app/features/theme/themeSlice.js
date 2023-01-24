import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fontSize: 0,
  themeMode: 0,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    default: (state) => {
      return {
        ...state,
      };
    },

    setFontSize: (state, value) => {
      state.fontSize = parseInt(value.payload);
    },
    setThemeMode: (state, value) => {
      state.themeMode = parseInt(value.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFontSize, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
