import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function App(props) {
  const [dateState, setDateState] = useState(new Date());

  const Dated = moment(dateState).format("DD-MM-YYYY");
  return (
    <>
      <Calendar
        value={dateState}
        onChange={(e) => {
          setDateState(e);
        }}
      />
      {props.alert(Dated)}

      <p>
        Current selected date is <b>{Dated}</b>
      </p>
    </>
  );
}
