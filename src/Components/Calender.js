import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useEffect } from "react";
import axios from "axios";

var token = localStorage.getItem("access");
export default function App(props) {
  const [dateState, setDateState] = useState(new Date());
  const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
    moment(new Date()).format("MM-YYYY")
  );
  const mark = ["12-10-2022", "13-10-2022", "14-10-2022"];
  const markTwo = {
    "12-10-2022": "completed",
    "13-10-2022": "not-completed",
    "14-10-2022": "completed",
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/api/task/monthly-words?startDate=01-${currentMonthAndYear}&endDate=31-${currentMonthAndYear}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        let lastAvailableDay = 1;
        response.data.map(({ date }) => {
          const day = parseInt(moment(date).format("DD"));
          if (day > lastAvailableDay) {
            lastAvailableDay = day;
          }
          const lastAvailableDate = moment(
            `${lastAvailableDay}-${currentMonthAndYear}`,
            "DD-MM-YYYY"
          ).toDate();
          setDateState(lastAvailableDate);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentMonthAndYear]);

  const Dated = moment(dateState).format("DD-MM-YYYY");
  return (
    <>
      <Calendar
        value={dateState}
        onChange={(e) => {
          setDateState(e);
        }}
        tileClassName={({ date }) => {
          if (markTwo[moment(date).format("DD-MM-YYYY")] === "completed") {
            return "completed-words";
          }
          if (markTwo[moment(date).format("DD-MM-YYYY")] === "not-completed") {
            return "not-completed-words";
          }
        }}
        onActiveStartDateChange={({ activeStartDate }) => {
          setCurrentMonthAndYear(moment(activeStartDate).format("MM-YYYY"));
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
