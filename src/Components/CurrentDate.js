import React from "react";

const CurrentDate = () => {
  const current = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      {current.getDate()} {monthNames[current.getMonth()]} ,
      {current.getFullYear()}
    </div>
  );
};

export default CurrentDate;
