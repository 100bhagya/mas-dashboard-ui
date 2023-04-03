import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCalendarDate,
  setCurrentMonthAndYear,
} from "../app/features/app/appSlice";
import { FiLock } from "react-icons/fi";
import { useState } from "react";
import "../index.css"

export default function App() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [minDate, setMinDate] = useState(new Date("2023-01-01"));// this minDate is our Course Starting day

  return (
    <>
      <Calendar
        value={moment(app.currentCalendarDate).toDate()}
        onChange={(e) => {
          dispatch(setCurrentCalendarDate(e));
        }}
        tileClassName={({ date }) => {
          if (moment(date).isBefore(moment(minDate)) === true)// disable all the days, months, years before the minDate
          return "disable-word react-calendar__tile--prev-month";

          if (
            moment(date).isAfter(moment()) === true &&
            moment(date).day() !== 6 &&
            moment(date).day() !== 0
          )
            return "disable-word"; //will disable future dates in calender
          if (
            app.markedDates[moment(date).format("DD-MM-YYYY")] === "completed"
          ) {
            //green tile
            return "completed-words";
          }
          if (
            app.markedDates[moment(date).format("DD-MM-YYYY")] ===
            "not-attempted"
          ) {
            //red tile
            return "not-attempted-words";
          }
          if (
            app.markedDates[moment(date).format("DD-MM-YYYY")] ===
            "partially-completed"
          ) {
            //orange tile
            return "partially-completed-words";
          }
        }}
        tileContent={({ date }) => {
          if (moment(date).isBefore(moment(minDate)) === true)
            return <FiLock className="disable-word" />;
          if (
            moment(date).isAfter(moment()) === true &&
            moment(date).day() !== 6 &&
            moment(date).day() !== 0
          )
            return <FiLock className="disable-word" />;
        }}
        minDate={minDate}// this will disable the previous arrow key before the minDate
        showPreviousMonths={false}
        onActiveStartDateChange={({ activeStartDate }) => {
          //updating "currentMonthAndYear" state when calendar view is changed
          dispatch(
            setCurrentMonthAndYear(moment(activeStartDate).format("MM-YYYY"))
          );
        }}
        className="shadow-2xl rounded-2xl shadow-blue-100"
      />
    </>
  );
}
