import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function App(props) {
  const [dateState, setDateState] = useState(new Date());
  const mark = ["12-10-2022", "13-10-2022", "14-10-2022"];
  const markTwo = {
    "12-10-2022":"completed",
    "13-10-2022":"not-completed",
    "14-10-2022":"completed"
  };
  const Dated = moment(dateState).format("DD-MM-YYYY");
  return (
    <>
      <Calendar
        value={dateState}
        onChange={(e) => {
          setDateState(e);
        }}
        tileClassName={({ date, view }) => {
          if (markTwo[moment(date).format("DD-MM-YYYY")] === "completed") {
            return "completed-words";
          }
          if (markTwo[moment(date).format("DD-MM-YYYY")] === "not-completed") {
            return "not-completed-words";
          }
        }}
        className="rounded-2xl shadow-2xl shadow-blue-100"
      />
      {props.alert(Dated)}
      {/* <p>
        Current selected date is <b>{Dated}</b>
      </p> */}
    </>
  );
}
