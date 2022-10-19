import React, { useState, useEffect, useRef } from "react";
import TopicBar from "../Components/TopicBar";
import Calendar from "../Components/Calender";
import Artboard from "../images/wordofday.png";
import moment from "moment";
import NoDailyWords from "../Components/NoDailyWords";
import axios from "axios";

var token = localStorage.getItem("access");
var data = localStorage.getItem("login-info");
var loginInfo = JSON.parse(data);

const WordOfDay = (isOpen) => {
  // todo: get latest date for which daily word is present and use it below for date
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [wordings, setWordings] = useState({});
  const [wordingsResponse, setWordingsResponse] = useState({});
  // todo: dailyWordsId comes by calling dailywords get api, date is used as parameter
  const [dailyWordsId, setDailyWordsId] = useState(null);
  // student id comes from local storage
  const [studentId, setStudentId] = useState();

  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);

  const responseOneRef = useRef("");
  const responseTwoRef = useRef("");

  useEffect(() => {
    let source = axios.CancelToken.source();
    setStudentId(loginInfo.id);
    axios
      .get(`http://localhost:8081/api/task/daily-words?date=${date}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((dailyWordsFetchedResponse) => {
        setLoading(true);
        setWordings(dailyWordsFetchedResponse?.data);
        setDailyWordsId(dailyWordsFetchedResponse?.data.id);
        return dailyWordsFetchedResponse?.data.id;
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
        setLoading(false);
      })
      .then((dailyWordsId) => {
        setLoading(true);
        axios
          .get(
            `http://localhost:8081/api/task/daily-words-response?studentId=${loginInfo.id}&dailyWordsId=${dailyWordsId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          )
          .catch((err) => {
            console.log(err);
            setMessage(err.message);
            setLoading(false);
          })
          .then((wordsResponseData) => {
            setLoading(true);
            setWordingsResponse(wordsResponseData?.data);
          })
          .catch((err) => {
            console.log(err);
            setMessage(err.message);
            setLoading(false);
          })
          .finally(() => {
            setLoading(false);
          });
      });
    return function () {
      source.cancel("Cancelling in cleanup");
      setDailyWordsId(null);
      setWordingsResponse({});
      setWordings({});
      setLoading(true);
      setMessage("");
    };
  }, [date]);
  //doubt
  function props(data) {
    setDate(data);
    if (!wordingsResponse) {
      // setResponseOne(null);
      // setResponseTwo(null);
    }
  }

  const sendResponse = async () => {
    let bodyParameters = {
      dailyWordsId,
      studentId,
      responseOne: responseOneRef.current.value,
      responseTwo: responseTwoRef.current.value,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (
      !(
        bodyParameters.responseOne !== null &&
        bodyParameters.responseTwo !== null
      )
    ) {
      axios
        .post(
          "http://localhost:8081/api/task/daily-words-response",
          bodyParameters,
          config
        )
        .then((response) => {
          console.log(response);
          setMessage("Your Response Has Been Submitted");
          setWordingsResponse(response?.data);
        })
        .catch((err) => {
          console.log(err);
          setMessage("Please Try Again After Sometime");
        });
    }
  };

  const updateResponse = async () => {
    let bodyParameters = {
      dailyWordsId,
      studentId,
      responseOne: responseOneRef.current.value,
      responseTwo: responseTwoRef.current.value,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (
      !(
        bodyParameters.responseOne !== null &&
        bodyParameters.responseTwo !== null
      )
    ) {
      axios
        .put(
          "http://localhost:8081/api/task/daily-words-response",
          bodyParameters,
          config
        )
        .then((response) => {
          console.log(response);
          setMessage("Your Response Has Been Updated");
          setWordingsResponse(response?.data);
        })
        .catch((err) => {
          console.log(err);
          setMessage("Please Try Again After Sometime");
        });
    }
  };

  return (
    <div className="flex">
      {loading}
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
                </h3>
                <p className="py-2 text-[#898989]">{wordings.wordOneMeaning}</p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  ref={responseOneRef}
                  defaultValue={wordingsResponse?.responseOne}
                  className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="text-right mt-3"></div>
              </div>
              <div className="py-4 px-8  rounded-lg shadow-xl my-3">
                <h3 className="text-xl text-[#2255B8] py-2">
                  {wordings.wordTwo}
                </h3>
                <p className="py-2 text-[#898989]">{wordings.wordTwoMeaning}</p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  ref={responseTwoRef}
                  defaultValue={wordingsResponse?.responseTwo}
                  className="block p-4 w-full bg-[#dee9ff] text-blue-900 rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:border-blue-500 "
                />
                <div className="text-right mt-3"></div>
              </div>
              {!(wordingsResponse?.id === undefined) ? (
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
            <NoDailyWords loading={loading} />
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
