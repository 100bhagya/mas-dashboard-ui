import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import TopicBar from "../Components/TopicBar";
import WeekData from "../data/WeekData";
import { API_BASE_URL } from "../data/consts";
import { BiTime, BiCategory } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import NotFound from "../images/not found.jpg";
import LoadingSpinner from "../Components/LoadingSpinner";
function WEEK({ week, index, toggleWEEK, handleArticle, articleNumber }) {
  useEffect(() => {
    return () => {
      week.open = false;
    };
  }, [week]);
  return (
    <div>
      <div key={index} onClick={() => toggleWEEK(index)}>
        <div
          className={`faq-question cursor-pointer my-6 ${
            week.open ? "text-blue-800 font-semibold" : null
          }`}
        >
          {week.question}
        </div>
      </div>
      <div className={`faq-answer flex ml-1 ${!week.open ? "hidden" : null}`}>
        <div className="w-1 bg-blue-500"></div>
        <div className="ml-1">
          {week.answer.map((post) => {
            return (
              <div
                className={`cursor-pointer mb-2 px-2 py-1 rounded-lg ${
                  articleNumber === post.articleNumber
                    ? "bg-blue-500 text-white"
                    : null
                }`}
                onClick={() => {
                  const articleNumber = post.articleNumber;
                  handleArticle(index, articleNumber);
                }}
              >
                {post.role}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const SummaryWritingContent = () => {
  const summaryTextRef = useRef();
  const [weeklySummaryResponse, setWeeklySummaryResponse] = useState(null);
  const [isSendSummaryBoxOpen, setIsSendSummaryBoxOpen] = useState(false);
  const [weeks, setweeks] = useState(WeekData);
  const [weekNumber, setWeekNumber] = useState(0);
  const [articleNumber, setArticleNumber] = useState(0);
  const [summary, setSummary] = useState(null);
  const { loginInfo } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  var token = loginInfo.accessToken;

  const toggleWEEK = (index) => {
    setArticleNumber(0);
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
      .get(
        `${API_BASE_URL}/api/task/weekly-summary?weekNumber=${weekNumber}&articleNumber=${articleNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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
            `${API_BASE_URL}/api/task/weekly-summary-response?studentId=${loginInfo.id}&weeklySummaryId=${weeklySummaryId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((response) => {
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
      setIsSendSummaryBoxOpen(false);
      setSummary(null);
      setIsLoading(true);
    };
  }, [articleNumber, weekNumber, weeks]);

  const handleArticle = (index, articleNumber) => {
    setWeekNumber(index + 1);
    setArticleNumber(articleNumber);
  };

  const handleSubmitSummary = (weeklySummaryId) => {
    setIsLoading(true);
    let bodyParameters = {
      weeklySummaryId: weeklySummaryId,
      response: summaryTextRef.current.value,
      studentId: loginInfo?.id,
      completed: true,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
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
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleUpdateSummary = (weeklySummaryId) => {
    setIsLoading(true);
    let bodyParameters = {
      weeklySummaryId: weeklySummaryId,
      response: summaryTextRef.current.value,
      studentId: loginInfo?.id,
      completed: true,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(
        `${API_BASE_URL}/api/task/weekly-summary-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        setWeeklySummaryResponse(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleNext = () => {
    if (articleNumber < 2) {
      setArticleNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10 mr-32">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Summary Writing</div>
          <div className="text-slate-600 text-md">
            {weekNumber === 0 ? "No Week is Selected" : `WEEK ${weekNumber}`}
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
          {weekNumber === 0 && <p>No Week Is Selected.</p>}
          {weekNumber !== 0 && articleNumber === 0 && (
            <p>No Article Is Selected.</p>
          )}
          {weekNumber !== 0 && articleNumber !== 0 && (
            <>
              <div className="font-bold text-4xl text-center mb-5 text-red-500 ">
                Ooops!!
              </div>
              <div className="text-4xl font-bold text-red-600 mr-14">
                {`Article ${articleNumber} of Week ${weekNumber} not available.`}
              </div>
              <img className="flex items-center" src={NotFound} alt="" />
            </>
          )}
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
              ref={summaryTextRef}
              placeholder="Write summary here..."
              className="w-full h-[50vh] my-6 p-4 rounded-md text-black placeholder-black"
            ></textarea>
            <div className="text-right ">
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
                onClick={() => (summaryTextRef.current.value = "")}
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
                {weeklySummaryResponse && !isLoading
                  ? "Update Summary"
                  : "Submit Summary"}
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

      <div className="bg-blue-200 h-[100vh] fixed left-[89vw] w-48 pt-10 pl-10">
        <div className="cursor-pointer text-2xl text-blue-800 font-semibold">
          Weeks
        </div>
        <div className="ml-3 mt-4 overflow-y-scroll h-[87vh] overflow-x-hidden">
          {weeks.map((week, i) => (
            <WEEK
              week={week}
              index={i}
              toggleWEEK={toggleWEEK}
              handleArticle={handleArticle}
              articleNumber={articleNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryWritingContent;
