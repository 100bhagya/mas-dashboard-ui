import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import TopicBar from "../Components/TopicBar";
import WeekData from "../data/WeekData";
import { API_BASE_URL } from "../data/consts";
import { BiTime, BiCategory } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import NotFound from "../images/not found.jpg";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Checkmark } from "react-checkmark";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setLastUpdated } from "../app/features/app/appSlice";
import { FaCalendarWeek } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import RightDrawer from "../Components/RightDrawer";
const toastMessage = (message) => toast(message);

function WEEK({
  week,
  index,
  toggleWEEK,
  handleArticle,
  articleNumber,
  statusResponse,
}) {
  useEffect(() => {
    const startDateMomentObject = moment("13-09-2022", "DD-MM-YYYY");
    const weekIndex = moment().diff(startDateMomentObject, "weeks") - 1;
    if (index === weekIndex) toggleWEEK(weekIndex);

    return () => {
      week.open = false;
    };
  }, []);
  return (
    <div>
      <div
        // className="hover:bg-blue-700 hover:text-white"
        key={index}
        onClick={() => toggleWEEK(index)}
      >
        <div
          className={`faq-question cursor-pointer my-6 ${
            week.open ? "text-blue-800 font-semibold" : null
          }`}
        >
          <div className="flex gap-2 items-center">
            {week.question}
            <div>
              {statusResponse[week.id]?.[0] && statusResponse[week.id]?.[1] ? (
                <Checkmark size="16px" />
              ) : null}
              {(statusResponse[week.id]?.[0] &&
                !statusResponse[week.id]?.[1]) ||
              (!statusResponse[week.id]?.[0] &&
                statusResponse[week.id]?.[1]) ? (
                <Checkmark color="#F6BE00" size="16px" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={`faq-answer flex ${!week.open ? "hidden" : null}`}>
        <div className="w-1 bg-blue-500"></div>
        <div className="ml-1">
          {week.answer.map((post) => {
            return (
              <div
                className={`cursor-pointer mb-2 px-2 py-1 rounded-lg ${
                  articleNumber === post?.articleNumber
                    ? "bg-blue-500 text-white"
                    : null
                }`}
                onClick={() => {
                  const articleNumber = post?.articleNumber;
                  handleArticle(index, articleNumber);
                }}
              >
                <div className="flex gap-2 justify-start items-center">
                  <div>{post?.role}</div>
                  {statusResponse[week?.id]?.[post?.articleNumber - 1] ? (
                    <Checkmark size="14px" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const SummaryWritingContent = ({ isOpen }) => {
  const summaryTextRef = useRef();
  const [weeklySummaryResponse, setWeeklySummaryResponse] = useState(null);
  const [isSendSummaryBoxOpen, setIsSendSummaryBoxOpen] = useState(false);
  const [weeks, setweeks] = useState(WeekData);
  const [weekNumber, setWeekNumber] = useState(0);
  const [articleNumber, setArticleNumber] = useState(1);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusResponse, setStatusResponse] = useState({});
  const [isWeeksOpen, setIsWeeksOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const toggleWEEK = (index) => {
    setArticleNumber(1);
    setweeks(
      weeks.map((week, i) => {
        if (i === index) {
          setWeekNumber(i + 1);
          week.open = !week.open;
        } else {
          week.open = false;
        }
        return week;
      })
    );
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/task/weekly-summary-response-status`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
        },
      })
      .then((response) => {
        const res = {};

        for (const [key, value] of Object.entries(response.data)) {
          res[key] = value;
        }
        setStatusResponse(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [app.lastUpdated]);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/api/task/weekly-summary?weekNumber=${weekNumber}&articleNumber=${articleNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.loginInfo.accessToken,
          },
        }
      )
      .then((response) => {
        setSummary(response.data);
        return response?.data?.id;
      })
      .then((weeklySummaryId) => {
        axios
          .get(
            `${API_BASE_URL}/api/task/weekly-summary-response?weeklySummaryId=${weeklySummaryId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + user.loginInfo.accessToken,
              },
            }
          )
          .then((response) => {
            console.log(response);
            setWeeklySummaryResponse(response.data);
            if (response.data.response)
              summaryTextRef.current.value = response.data.response;
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    return () => {
      summaryTextRef.current.value = "";
      setIsSendSummaryBoxOpen(false);
      setSummary(null);
      setIsLoading(true);
    };
  }, [articleNumber, weekNumber, weeks, user]);

  const handleArticle = (index, articleNumber) => {
    setWeekNumber(index + 1);
    setArticleNumber(articleNumber);
  };

  const handleSubmitSummary = (weeklySummaryId) => {
    if (summaryTextRef.current.value === "") {
      toastMessage("Summary Response is empty.");
      return;
    }
    setIsLoading(true);
    let bodyParameters = {
      weeklySummaryId: weeklySummaryId,
      response: summaryTextRef.current.value,
      studentId: user.loginInfo.id,
      completed: true,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .post(
        `${API_BASE_URL}/api/task/weekly-summary-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        setWeeklySummaryResponse(response.data);
        setIsLoading(false);
        dispatch(setLastUpdated(new Date()));
        toastMessage("Summary has been submitted.");
      })
      .catch((err) => {
        setIsLoading(false);
        toastMessage("Something went wrong. Please try again later.");
        console.log(err);
      });
  };
  const handleUpdateSummary = (weeklySummaryId) => {
    setIsLoading(true);
    let bodyParameters = {
      weeklySummaryId: weeklySummaryId,
      response: summaryTextRef.current.value,
      studentId: user.loginInfo.id,
      completed: true,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .put(
        `${API_BASE_URL}/api/task/weekly-summary-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        console.log(response.data);
        setWeeklySummaryResponse(response.data);
        setIsLoading(false);
        dispatch(setLastUpdated(new Date()));
        toastMessage("Summary has been updated.");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toastMessage("Something went wrong. Please try again later.");
      });
  };

  const handleNext = () => {
    if (articleNumber < 2) {
      setArticleNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar rightControl={setIsWeeksOpen}>
        <button className="inline-flex items-center">
          <FaCalendarWeek size={35} />
        </button>
      </Navbar>
      <RightDrawer
        width="w-[40vw]"
        isOpen={isWeeksOpen}
        setIsOpen={setIsWeeksOpen}
      >
        <div className="flex flex-col bg-blue-200 h-[100vh] w-44 px-2 py-4 overflow-auto items-center">
          <div className="cursor-pointer text-2xl text-blue-800 font-semibold">
            Weeks
          </div>
          <div className="">
            {weeks.map((week, i) => (
              <WEEK
                week={week}
                index={i}
                key={i}
                toggleWEEK={toggleWEEK}
                handleArticle={handleArticle}
                articleNumber={articleNumber}
                statusResponse={statusResponse}
              />
            ))}
          </div>
        </div>
      </RightDrawer>
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div className="w-full flex">
          <div className="flex-grow p-2">
            <div className=" pb-4 border-b-2 border-[#2255B8]">
              <div className="text-3xl text-sky-800">Summary Writing</div>
              <div className="text-slate-600 text-md">
                {`WEEK ${weekNumber}`}
                {" - "}
                {`ARTICLE ${articleNumber}`}
              </div>
            </div>
            <div
              className={`${
                !isLoading && "hidden"
              } flex justify-center items-center h-full`}
            >
              <LoadingSpinner />
            </div>
            <div
              className={`${
                (summary !== null || isLoading) && "hidden"
              } flex flex-col justify-center items-center mt-8`}
            >
              <div className="font-bold text-4xl text-center mb-5 text-red-500 ">
                Ooops!!
              </div>
              <div className="text-4xl font-bold text-red-600 mr-14">
                {`Article ${articleNumber} of Week ${weekNumber} not available.`}
              </div>
              <img className="flex items-center" src={NotFound} alt="" />
            </div>

            <div className={`${summary === null && "hidden"}`}>
              <div className="text-3xl font-normal text-sky-800 mt-8">
                {summary?.articleTopic}
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <div className="flex items-center">
                  <BsFillPersonFill size={20} className="mr-1" />
                  {summary?.author}
                </div>

                <div className="flex items-center">
                  <BiCategory size={20} className="mr-1" />
                  {summary?.category}
                </div>

                <div className="flex items-center">
                  <BiTime size={20} className="mr-1" />
                  {summary?.readTime} Mins
                </div>
              </div>
              {/* Write Summary Box */}
              <div className={`${!isSendSummaryBoxOpen && "hidden"}`}>
                <textarea
                  autoFocus={true}
                  ref={summaryTextRef}
                  placeholder="Write summary here..."
                  className="w-full h-[50vh] my-6 p-4 rounded-md text-black placeholder-black"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setIsSendSummaryBoxOpen(false);
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    Back
                  </button>
                  <button
                    onClick={() => {
                      summaryTextRef.current.value = "";
                      toastMessage("Summary has been cleared.");
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    Clear
                  </button>

                  <button
                    onClick={() => {
                      if (weeklySummaryResponse) {
                        handleUpdateSummary(summary?.id);
                      } else {
                        handleSubmitSummary(summary?.id);
                      }
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    {isLoading && <LoadingSpinner />}
                    {!weeklySummaryResponse
                      ? "Submit Summary"
                      : "Update Summary"}
                  </button>
                </div>
              </div>
              {/* Article Box */}
              <div className={`mt-8 ${isSendSummaryBoxOpen && "hidden"}`}>
                <>
                  <p className="mb-8">{parse(String(summary?.articleText))}</p>

                  <div className="text-right">
                    <button
                      onClick={handleNext}
                      className={`py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl ${
                        articleNumber === 2 && "opacity-20 cursor-not-allowed"
                      }`}
                    >
                      {" "}
                      Next
                    </button>
                    <button
                      onClick={() => {
                        setIsSendSummaryBoxOpen(true);
                      }}
                      className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                    >
                      {" "}
                      Send Summary{" "}
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col bg-blue-200 h-[100vh] w-44 px-2 py-4 overflow-auto items-center">
              <div className="cursor-pointer text-2xl text-blue-800 font-semibold ">
                Weeks
              </div>
              <div className="">
                {weeks.map((week, i) => (
                  <WEEK
                    week={week}
                    index={i}
                    key={i}
                    toggleWEEK={toggleWEEK}
                    handleArticle={handleArticle}
                    articleNumber={articleNumber}
                    statusResponse={statusResponse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default SummaryWritingContent;
