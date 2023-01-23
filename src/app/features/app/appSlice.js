import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const initialState = {
  currentCalendarDate: moment().format("DD-MM-YYYY"),
  lastAvailableDailyWordDate: new Date(),
  lastUpdated: new Date(),
  fontSize: 0,
  themeMode: 0,
  tasksOpen: true,
  aptitudeOpen: true,
  nonTechOpen: true,
  markedDates: {},
  currentMonthAndYear: moment().format("MM-YYYY"),
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
    setMarkedDates: (state, value) => {
      state.markedDates = value.payload;
    },
    setCurrentMonthAndYear: (state, value) => {
      state.currentMonthAndYear = value.payload;
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
  setMarkedDates,
  setCurrentMonthAndYear,
} = appSlice.actions;

export default appSlice.reducer;
