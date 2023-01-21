import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentCalendarDate: new Date(),
  lastAvailableDailyWordDate: new Date(),
  lastUpdated: new Date(),
  fontSize: 0,
  themeMode: 0,
  tasksOpen: true,
  aptitudeOpen: true,
  nonTechOpen: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    default: (state) => {
      return {
        ...state,
      };
    },
    setCurrentCalendarDate: (state, date) => {
      state.currentCalendarDate = date.payload;
    },
    setLastAvailableDailyWordDate: (state, date) => {
      state.lastAvailableDailyWordDate = date.payload;
    },
    setLastUpdated: (state, date) => {
      state.lastUpdated = date.payload;
    },
    setFontSize: (state, value) => {
      state.fontSize = parseInt(value.payload);
    },
    setThemeMode: (state, value) => {
      state.themeMode = parseInt(value.payload);
    },
    setTasksOpen: (state, value) => {
      state.tasksOpen = value.payload;
    },
    setAptitudeOpen: (state, value) => {
      state.aptitudeOpen = value.payload;
    },
    setNonTechOpen: (state, value) => {
      state.nonTechOpen = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentCalendarDate,
  setLastAvailableDailyWordDate,
  setLastUpdated,
  setFontSize,
  setThemeMode,
  setTasksOpen,
  setAptitudeOpen,
  setNonTechOpen,
} = appSlice.actions;

export default appSlice.reducer;
