import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function App(props) {
  const { loginInfo } = useContext(AuthContext);
  const token = loginInfo.accessToken;
  const studentId = loginInfo.id;
  const [dateState, setDateState] = useState(new Date());
  // array contains information about completion status of available daily words
  const [markedDates, setmarkedDates] = useState({});

  const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
    moment(new Date()).format("MM-YYYY")
  );

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/api/task/daily-words/check-status?fromDate=1-${currentMonthAndYear}&toDate=${
          moment().format("MM-YYYY") === currentMonthAndYear
            ? moment().format("DD")
            : moment(currentMonthAndYear, "MM-YYYY").daysInMonth()
        }-${currentMonthAndYear}&studentId=${studentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        //default date of previous months is 1
        let latestAvailableDay = 1;
        const markedDates = {};
        for (const [key, value] of Object.entries(response.data)) {
          let curDay = parseInt(moment(key).format("DD"));
          if (curDay > latestAvailableDay) {
            latestAvailableDay = curDay;
          }

          if (value[0] === true && value[1] === true) {
            markedDates[moment(key).format("DD-MM-YYYY")] = "completed";
          } else if (value[0] === false && value[1] === false) {
            markedDates[moment(key).format("DD-MM-YYYY")] = "not-attempted";
          } else {
            markedDates[moment(key).format("DD-MM-YYYY")] =
              "partially-completed";
          }
        }

        const lastAvailableDate = moment(
          `${latestAvailableDay}-${currentMonthAndYear}`,
          "DD-MM-YYYY"
        ).toDate();
        setDateState(lastAvailableDate);
        props.setLastAvailableDateState(lastAvailableDate);
        setmarkedDates(markedDates);
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
          // returning className that will be applied on calendar tiles
          if (markedDates[moment(date).format("DD-MM-YYYY")] === "completed") {
            //green tile
            return "completed-words";
          }
          if (
            markedDates[moment(date).format("DD-MM-YYYY")] === "not-attempted"
          ) {
            //red tile
            return "not-attempted-words";
          }
          if (
            markedDates[moment(date).format("DD-MM-YYYY")] ===
            "partially-completed"
          ) {
            //orange tile
            return "partially-completed-words";
          }
        }}
        onActiveStartDateChange={({ activeStartDate }) => {
          //updating "currentMonthAndYear" state when calendar view is changed
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
