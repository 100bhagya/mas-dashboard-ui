import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentCalendarDate: new Date(),
  lastAvailableDailyWordDate: new Date(),
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
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentCalendarDate, setLastAvailableDailyWordDate } =
  appSlice.actions;

export default appSlice.reducer;
