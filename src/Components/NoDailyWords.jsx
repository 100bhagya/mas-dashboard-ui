import React from "react";
import NotFound from "../images/not found.jpg";
import LoadingSpinner from "./LoadingSpinner";
const NoDailyWords = (props) => {
  // console.log(props);
  if (props.loading) {
    return (
      <LoadingSpinner/>
    );
  }
  return (
    <div className="mt-8">
      <div className="font-bold text-4xl text-center mb-5 text-red-500 ">
        Ooops!!
      </div>
      <div className="text-4xl font-bold text-red-600 mr-14">
        No new words available for the selected date
      </div>
      <img src={NotFound} alt="" className="relative left-[10%]" />
    </div>
  );
};

export default NoDailyWords;
