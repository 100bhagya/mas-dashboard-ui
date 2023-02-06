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

  const isFutureDate = (date) => {
    return moment(date).isAfter(moment());
  };

  return (
    <>
      <Calendar
        value={moment(app.currentCalendarDate).toDate()}
        onChange={(e) => {
          dispatch(setCurrentCalendarDate(e));
        }}
        tileClassName={({ date }) => {
          if (isFutureDate(date)) return "disable-word";
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
          if (isFutureDate(date)) return <FiLock className="disable-word" />;
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
