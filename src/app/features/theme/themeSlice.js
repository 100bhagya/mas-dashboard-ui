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

    toggleThemeMode: (state) => {
      state.themeMode = !state.themeMode;
    },

    setFontSize: (state, value) => {
      state.fontSize = parseInt(value.payload);
    },
    setThemeMode: (state, value) => {
      state.themeMode = parseInt(value.payload);
    },
    increaseFontSize: (state) => {
      state.fontSize < 3 && (state.fontSize = state.fontSize + 1);
    },
    decreaseFontSize: (state) => {
      state.fontSize > 0 && (state.fontSize = state.fontSize - 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFontSize,
  setThemeMode,
  increaseFontSize,
  decreaseFontSize,
  toggleThemeMode,
} = themeSlice.actions;

export default themeSlice.reducer;
