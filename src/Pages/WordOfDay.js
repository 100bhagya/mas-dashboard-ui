import React, { useState, useEffect, useRef } from "react";
import TopicBar from "../Components/TopicBar";
import Calendar from "../Components/Calender";
import Artboard from "../images/wordofday.png";
import moment from "moment";
import NoDailyWords from "../Components/NoDailyWords";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentCalendarDate,
  setLastUpdated,
} from "../app/features/app/appSlice";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextPrimaryColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

//Toast Notifications
const toastMessage = (message) => toast(message);

const WordOfDay = (isOpen) => {
  // todo: get latest date for which daily word is present and use it below for date
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [wordings, setWordings] = useState({});
  const [wordingsResponse, setWordingsResponse] = useState({});
  // todo: dailyWordsId comes by calling dailywords get api, date is used as parameter
  const [dailyWordsId, setDailyWordsId] = useState(null);

  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);

  const responseOneRef = useRef("");
  const responseTwoRef = useRef("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const app = useSelector((state) => state.app);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get(`${API_BASE_URL}/api/task/daily-words?date=${date}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
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
        setLoading(false);
      })
      .then((dailyWordsId) => {
        setLoading(true);
        if (
          dailyWordsId === "" ||
          dailyWordsId === null ||
          dailyWordsId === undefined
        ) {
          setIsModalOpen(true);
        } else {
          setIsModalOpen(false);
        }
        axios
          .get(
            `${API_BASE_URL}/api/task/daily-words-response?dailyWordsId=${dailyWordsId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user.loginInfo.accessToken,
              },
            }
          )
          .catch((err) => {
            console.log(err);
            setLoading(false);
          })
          .then((wordsResponseData) => {
            setLoading(true);
            setWordingsResponse(wordsResponseData?.data);
          })
          .catch((err) => {
            console.log(err);
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
  }, [date, user]);
  //doubt
  function props(data) {
    setDate(data);
    if (!wordingsResponse) {
      // setResponseOne(null);
      // setResponseTwo(null);
    }
  }

  const sendResponse = async () => {
    if (
      responseOneRef.current.value === "" &&
      responseTwoRef.current.value === ""
    ) {
      toastMessage("Atleast One Response is required.");
    }
    let bodyParameters = {
      dailyWordsId,
      studentId: user.loginInfo.id,
      responseOne: responseOneRef.current.value,
      responseTwo: responseTwoRef.current.value,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };

    if (
      !(bodyParameters.responseOne === "" && bodyParameters.responseTwo === "")
    ) {
      axios
        .post(
          `${API_BASE_URL}/api/task/daily-words-response`,
          bodyParameters,
          config
        )
        .then((response) => {
          toastMessage("Your Response Has Been Submitted");
          setWordingsResponse(response?.data);
          // dispatch(setLastUpdated(new Date()));
        })
        .catch((err) => {
          console.log(err);
          toastMessage("Please Try Again After Sometime");
        });
    }
  };

  const updateResponse = async () => {
    let bodyParameters = {
      dailyWordsId,
      studentId: user.loginInfo.id,
      responseOne: responseOneRef.current.value,
      responseTwo: responseTwoRef.current.value,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };

    axios
      .put(
        `${API_BASE_URL}/api/task/daily-words-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        console.log(response);
        toastMessage("Your Response Has Been Updated");
        setWordingsResponse(response?.data);
        // dispatch(setLastUpdated(new Date()));
      })
      .catch((err) => {
        console.log(err);
        toastMessage("Please Try Again After Sometime");
      });
  };

  return (
    <div className="flex">
      {/* Modal */}

      <div
        class={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          !isModalOpen && "hidden"
        }`}
        id="modal"
      >
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            class={`inline-block align-center ${getThemeBLightBackgroundColor(
              app.themeMode
            )} rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="p-4">
              <img
                src="./not_found_undraw.svg"
                alt=""
                className="object-cover"
              />
              <p>No Daily Words For Selected Word.</p>
              <p>
                Last Date with Available Daily Word:{" "}
                {moment(app.lastAvailableDailyWordDate).format("DD-MM-YYYY")}
              </p>
            </div>
            <div class="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => {
                  dispatch(
                    setCurrentCalendarDate(
                      moment(app.lastAvailableDailyWordDate).toDate()
                    )
                  );
                  setIsModalOpen((prev) => !prev);
                }}
              >
                Go to Last Available Date
              </button>
              <button
                type="button"
                class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => {
                  setIsModalOpen((prev) => !prev);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
      <div className="hidden lg:block">
        {" "}
        <TopicBar value={(isOpen = false)} />{" "}
      </div>
      <div
        className={`flex-grow py-5 px-5 lg:py-10 md:px-20 lg:px-10 overflow-x-hidden ${getThemeBLightBackgroundColor(
          app.themeMode
        )}`}
      >
        <div
          className={`pb-4 border-b-2 ${getThemeBorderColor(app.themeMode)}`}
        >
          <div
            className={`text-3xl ${getThemeTextSecondaryColor(app.themeMode)}`}
          >
            Word of the day
          </div>
          <div className={`${getThemeLightTextColor(app.themeMode)} text-md`}>
            {date}
          </div>
        </div>
        <div className="flex mt-8 gap-4 flex-col-reverse lg:flex-row">
          {dailyWordsId ? (
            <div className="basis-4/5 flex flex-col">
              <div
                className={`py-4 px-8  rounded-lg shadow-xl my-3 ${getThemeBackgroundColor(
                  app.themeMode
                )}`}
              >
                <div className="flex items-center">
                  <h3
                    className={`text-xl ${getThemeTextSecondaryColor(
                      app.themeMode
                    )} py-2`}
                  >
                    {wordings.wordOne}
                  </h3>
                  <span
                    className={`flex justify-center text-[10px] px-2 uppercase font-semibold ${getThemeLightTextColor(
                      app.themeMode
                    )} text-center`}
                  >
                    ({wordings.wordOneCat})
                  </span>
                </div>

                <p className={`py-2 ${getThemeLightTextColor(app.themeMode)}`}>
                  {wordings.wordOneMeaning}
                </p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  ref={responseOneRef}
                  defaultValue={wordingsResponse?.responseOne}
                  className={`block p-4 w-full ${getThemeBLightBackgroundColor(
                    app.themeMode
                  )} ${getThemeTextSecondaryColor(
                    app.themeMode
                  )} rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:${getThemeBorderColor(
                    app.themeMode
                  )} `}
                />
                <div className="text-right mt-3"></div>
              </div>
              <div
                className={`py-4 px-8  rounded-lg shadow-xl my-3 ${getThemeBackgroundColor(
                  app.themeMode
                )}`}
              >
                <div className="flex items-center">
                  <h3
                    className={`text-xl ${getThemeTextSecondaryColor(
                      app.themeMode
                    )} py-2`}
                  >
                    {wordings.wordTwo}
                  </h3>
                  <span
                    className={`flex justify-center text-[10px] px-2 uppercase font-semibold ${getThemeLightTextColor(
                      app.themeMode
                    )} text-center`}
                  >
                    ({wordings.wordTwoCat})
                  </span>
                </div>

                <p className={`py-2 ${getThemeLightTextColor(app.themeMode)}`}>
                  {wordings.wordTwoMeaning}
                </p>
                <input
                  placeholder="Let’s make a sentence out of the word !"
                  type="text"
                  id="large-input"
                  ref={responseTwoRef}
                  defaultValue={wordingsResponse?.responseTwo}
                  className={`block p-4 w-full ${getThemeBLightBackgroundColor(
                    app.themeMode
                  )} ${getThemeTextSecondaryColor(
                    app.themeMode
                  )} rounded-lg border border-gray-300 sm:text-[16px] focus:ring-blue-500 focus:${getThemeBorderColor(
                    app.themeMode
                  )} `}
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
          <div className=" ml-auto mr-0 basis-1/5 lg:ml-28 ">
            {/* <div inline-datepicker data-date="02/25/2022"></div> */}
            <Calendar alert={props} />
            {dailyWordsId ? (
              <img src={Artboard} alt="" className="mt-24 hidden lg:block" />
            ) : null}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default WordOfDay;
