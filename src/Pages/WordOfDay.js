import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Calendar from "../Components/Calender";
import CurrentDate from "../Components/CurrentDate";
import Artboard from "../images/wordofday.png";

const WordOfDay = () => {
  const [date, setDate] = useState("11-04-2022");
  const [wordings, setWordings] = useState({});
  const [error, setError] = useState();

  var token = localStorage.getItem("access");

  useEffect(() => {
    let info = async () => {
      let dailywords = await fetch(
        `http://localhost:8081/api/task/daily-words?date=${date}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      let words = await dailywords.json();
      setWordings(words);      
    };
    info();
  }, []);

  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Word of the day</div>
          <div className="text-slate-600 text-md">
            <CurrentDate />
          </div>
        </div>
        <div className="md:flex mt-8 gap-4 md:flex-col lg:flex-row">
          <div className="basis-4/5 flex flex-col">
            <div className="py-4 px-8  rounded-lg shadow-xl my-3">
              <h3 className="text-xl text-[#2255B8] py-2">{wordings.wordOne}</h3>
              <p className="py-2 text-[#898989]">
                {wordings.wordOneMeaning}
                
              </p>
              <input
                placeholder="Let’s make a sentence out of the word !"
                type="text"
                id="large-input"
                className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
              />
              <div className="text-right mt-3">
                <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8]">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
            <div className="py-4 px-8  rounded-lg shadow-xl my-3">
              <h3 className="text-xl text-[#2255B8] py-2">{wordings.wordTwo}</h3>
              <p className="py-2 text-[#898989]">
                {wordings.wordTwoMeaning}              
              </p>
              <input
                placeholder="Let’s make a sentence out of the word !"
                type="text"
                id="large-input"
                className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
              />
              <div className="text-right mt-3">
                <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8]">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="basis-1/5">
            {/* <div inline-datepicker data-date="02/25/2022"></div> */}
            <Calendar />
            <img src={Artboard} alt="" className="mt-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOfDay;
