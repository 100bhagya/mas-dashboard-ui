import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCalendarDate,
  setCurrentMonthAndYear,
} from "../app/features/app/appSlice";
import { FiLock } from "react-icons/fi";

export default function App() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  

  return (
    <>
      <Calendar
        value={moment(app.currentCalendarDate).toDate()}
        onChange={(e) => {
          dispatch(setCurrentCalendarDate(e));
        }}
        tileClassName={({ date }) => {

          if (moment(date).isAfter(moment())===true && (moment(date).day()!==6 && moment(date).day()!==0)) return "disable-word";//will disable future dates in calender
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
          if (moment(date).isAfter(moment())===true && (moment(date).day()!==6 && moment(date).day()!==0)) return <FiLock className="disable-word" />;
        }}
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
