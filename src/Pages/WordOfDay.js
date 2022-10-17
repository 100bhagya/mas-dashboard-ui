import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Calendar from "../Components/Calender";
import Artboard from "../images/wordofday.png";
import moment from "moment";
import NotFound from "../images/not found.jpg";

var token = localStorage.getItem("access");
var data = localStorage.getItem("login-info");
var loginInfo = JSON.parse(data);

const WordOfDay = (isOpen) => {
  // todo: get latest date for which daily word is present and use it below for date
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [wordings, setWordings] = useState({});
  const [wordingsResponse, setWordingsResponse] = useState({});
  // todo: dailyWordsId comes by calling dailywords get api, date is used as parameter
  const [dailyWordsId, setDailyWordsId] = useState();
  // student id comes from local storage
  const [studentId, setStudentId] = useState();
  const [responseOne, setResponseOne] = useState("");
  const [responseTwo, setResponseTwo] = useState("");
  const [message, setMessage] = useState();

  // code to fetch student id
  var token = localStorage.getItem("access");
  var data = localStorage.getItem("login-info");
  var loginInfo = JSON.parse(data);

  useEffect(() => {
    setStudentId(loginInfo.id);
    console.log(date);
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
      setDailyWordsId(words.id);
    };
    info();
  }, [date]);

  useEffect(() => {
    let Response = async () => {
      if (!(studentId === undefined || dailyWordsId === undefined)) {
        let dailywordsresponse = await fetch(
          `http://localhost:8081/api/task/daily-words-response?studentId=${studentId}&dailyWordsId=${dailyWordsId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        let wordsResponse = await dailywordsresponse.json();
        setWordingsResponse(wordsResponse);
      }
    };
    Response();
  }, [dailyWordsId]);

  function props(data) {
    setDate(data);
    if (!wordingsResponse) {
      setResponseOne(null);
      setResponseTwo(null);
    }
  }

  const sendResponse = async () => {
    let item = { dailyWordsId, studentId, responseOne, responseTwo };
    var response = await fetch(
      "http://localhost:8081/api/task/daily-words-response",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(item),
      }
    );

    let result = await response.json();
    setWordingsResponse(result);
    if (response.status === 200) {
      setMessage("Your Response Has Been Submitted");
    } else {
      setMessage("Please Try Again After Sometime");
    }
  };

  const updateResponse = async () => {
    let item = { dailyWordsId, studentId, responseOne, responseTwo };

    var response = await fetch(
      "http://localhost:8081/api/task/daily-words-response",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(item),
      }
    );

    let result = await response.json();
    if (response.status === 200) {
      setMessage("Your Response Has Been Submitted!!");
    } else {
      setMessage("Please Try Again After Sometime");
    }
  };

  return (
    <div className="flex">
      <TopicBar value={(isOpen = false)} />
      <div className="flex-grow py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Word of the day</div>
          <div className="text-slate-600 text-md">{date}</div>
        </div>
        <div className="md:flex mt-8 gap-4 md:flex-col lg:flex-row">
          {dailyWordsId ? (
            <div className="basis-4/5 flex flex-col">
              <div className="py-4 px-8  rounded-lg shadow-xl my-3">
                <h3 className="text-xl text-[#2255B8] py-2">
                  {wordings.wordOne}
                  <span className="text-xs uppercase font-semibold text-gray-400 text-center align-super">
                    {wordings.wordOneCat}
                  </span>
                </h3>

                <p className="py-2 text-[#898989]">{wordings.wordOneMeaning}</p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  onChange={(e) => setResponseOne(e.target.value)}
                  defaultValue={wordingsResponse.responseOne}
                  className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="text-right mt-3"></div>
              </div>
              <div className="py-4 px-8  rounded-lg shadow-xl my-3">
                <h3 className="text-xl text-[#2255B8] py-2">
                  {wordings.wordTwo}
                  <span className="text-xs uppercase font-semibold text-gray-400 text-center align-super">
                    {wordings.wordTwoCat}
                  </span>
                </h3>
                <p className="py-2 text-[#898989]">{wordings.wordTwoMeaning}</p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  onChange={(e) => setResponseTwo(e.target.value)}
                  defaultValue={wordingsResponse.responseTwo}
                  className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="text-right mt-3"></div>
              </div>
              {!(wordingsResponse.id === undefined) ? (
                <button
                  className="py-2 px-6 text-white rounded-xl bg-[#2255B8] w-[50%] relative  left-[27%]"
                  onClick={updateResponse}
                >
                  {" "}
                  Submit
                </button>
              ) : (
                <button
                  className="py-2 px-6 text-white rounded-xl bg-[#2255B8] w-[50%] relative  left-[27%]"
                  onClick={sendResponse}
                >
                  {" "}
                  Submit
                </button>
              )}

              <div className="relative left-[25%] text-xl mt-4 text-green-600 font-bold">
                {message}
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <div className="font-bold text-4xl text-center mb-5 text-red-500 ">
                Ooops!!
              </div>
              <div className="text-4xl font-bold text-red-600 mr-14">
                No new words available for the selected date
              </div>
              <img src={NotFound} alt="" className="relative left-[10%]" />
            </div>
          )}
          <div className="basis-1/5 ml-28 ">
            {/* <div inline-datepicker data-date="02/25/2022"></div> */}
            <Calendar alert={props} />
            {dailyWordsId ? (
              <img src={Artboard} alt="" className="mt-24" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOfDay;
