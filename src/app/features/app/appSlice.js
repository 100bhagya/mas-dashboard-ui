import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const initialState = {
  currentCalendarDate: new Date(),
  lastAvailableDailyWordDate: new Date(),
  lastUpdated: new Date(),
  tasksOpen: true,
  aptitudeOpen: true,
  nonTechOpen: true,
  markedDates: {},
  studentData: [],
  currentMonthAndYear: moment().format("MM-YYYY"),
  testData: [
    {
      testLink: "https://forms.gle/C6hdv2JbkEJpeoHC6",
      deadline: "17-05-2023",
    },
    {
      testLink: "https://forms.gle/mECq4ft5PWSm56nq9",
      deadline: "18-05-2023",
    },
    {
      testLink: "https://forms.gle/7Nm5mDwt6a2VCvqB8",
      deadline: "19-05-2023",
    },
    {
      testLink: "https://forms.gle/Pt4HAsXe3Wi8ea2e7",
      deadline: "20-05-2023",
    },
    {
      testLink: "https://forms.gle/4CVFd91aDEG1xLpQA",
      deadline: "21-05-2023",
    },
    {
      testLink: "https://forms.gle/YRfA8zHUe7wpwdhW7",
      deadline: "24-05-2023",
    },
    {
      testLink: "https://forms.gle/Kbao49488722v5M5A",
      deadline: "25-05-2023",
    },
    {
      testLink: "https://forms.gle/GNrmUptvGpS4WzDB6",
      deadline: "26-05-2023",
    },
    {
      testLink: "https://forms.gle/iQKvqqTqdEh9i36f7",
      deadline: "27-05-2023",
    },
    {
      testLink: "https://forms.gle/fkWcKw7ud21Ce1DH8",
      deadline: "28-05-2023",
    },
    {
      testLink: "https://forms.gle/BZthDZCH93zwW1GN9",
      deadline: "01-06-2023",
    },
    {
      testLink: "https://forms.gle/5bq5R7K7dRZBZ4W17",
      deadline: "02-06-2023",
    },
    {
      testLink: "https://forms.gle/fxGBMK7PdCN7tVSWA",
      deadline: "03-06-2023",
    },
    {
      testLink: "https://forms.gle/ZBL4Ko2L7sjkAfPA6",
      deadline: "04-06-2023",
    },
    {
      testLink: "https://forms.gle/hZRxdLcddBxmC2B87",
      deadline: "05-06-2023",
    },
    {
      testLink: "https://forms.gle/hZRxdLcddBxmC2B87",
      deadline: "08-06-2023",
    },
    {
      testLink: "https://forms.gle/MSFCnkxsoQme8Dir9",
      deadline: "09-06-2023",
    },
    {
      testLink: "https://forms.gle/Us8JjeP89Q6rSoSN6",
      deadline: "10-06-2023",
    },
    {
      testLink: "https://forms.gle/ayMvCTh69xzn9Hzv8",
      deadline: "11-06-2023",
    },
    {
      testLink: "https://forms.gle/xeJzHwiFUfjwRPze8",
      deadline: "12-06-2023",
    },
    {
      testLink: "https://forms.gle/NSxTg6SYX2ampEzD6",
      deadline: "15-06-2023",
    },
    {
      testLink: "https://forms.gle/vQPdpJQ9tJexsKen7",
      deadline: "16-06-2023",
    },
    {
      testLink: "https://forms.gle/u6ok9HmQGACtauux8",
      deadline: "17-06-2023",
    },
    {
      testLink: "https://forms.gle/WrDudU4XVsQ3gFfz8",
      deadline: "18-06-2023",
    },
  ],
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
    setStudentData: (state, studentData) => {
      state.studentData = [...studentData.payload];
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
  setStudentData,
} = appSlice.actions;

export default appSlice.reducer;
