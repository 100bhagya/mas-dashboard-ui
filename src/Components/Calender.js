import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCalendarDate,
  setCurrentMonthAndYear,
} from "../app/features/app/appSlice";
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
          // returning className that will be applied on calendar tiles
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
        onActiveStartDateChange={({ activeStartDate }) => {
          //updating "currentMonthAndYear" state when calendar view is changed
          dispatch(
            setCurrentMonthAndYear(moment(activeStartDate).format("MM-YYYY"))
          );
        }}
        className="rounded-2xl shadow-2xl shadow-blue-100"
      />
    </>
  );
}
