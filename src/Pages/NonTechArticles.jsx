import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import TopicBar from "../Components/TopicBar";
import WeekData from "../data/WeekData";
import { API_BASE_URL } from "../data/consts";
import { BiTime, BiCategory, BiFontSize } from "react-icons/bi";
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
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextPrimaryColor,
  getThemeTextSecondaryColor,
  getText,
} from "../data/themesData";
import { BiMinus } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import {
  decreaseFontSize,
  increaseFontSize,
} from "../app/features/theme/themeSlice";
import { nonTechArticles } from "../data/nonTechArticlesData";
import ReactPlayer from "react-player/lazy";
const toastMessage = (message) => toast(message);

function WEEK({
  week,
  index,
  toggleWEEK,
  handleArticle,
  articleNumber,
  statusResponse,
}) {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const startDateMomentObject = moment("01-03-2023", "DD-MM-YYYY");
    const weekIndex = moment().diff(startDateMomentObject, "weeks");
    if (index === weekIndex) toggleWEEK(weekIndex);
    if (index === weekIndex) {
      week.open = true;
    }
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
            week.open
              ? getThemeTextSecondaryColor(theme.themeMode) + ` font-semibold`
              : getThemeTextPrimaryColor(theme.themeMode)
          }`}
        >
          <div className="flex items-center gap-2">
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
                    : getThemeTextColor(theme.themeMode)
                }`}
                onClick={() => {
                  const articleNumber = post?.articleNumber;
                  handleArticle(index, articleNumber);
                }}
              >
                <div className="flex items-center justify-start gap-2">
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

const NonTechArticles = ({ isOpen }) => {
  const textRef = useRef();
  const [weeklyResponse, setWeeklyResponse] = useState(null);
  const [isSendBoxOpen, setIsSendBoxOpen] = useState(false);
  const [weeks, setweeks] = useState(WeekData);
  const [weekNumber, setWeekNumber] = useState(1);
  const [articleNumber, setArticleNumber] = useState(1);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusResponse, setStatusResponse] = useState({});
  const [isWeeksOpen, setIsWeeksOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const theme = useSelector((state) => state.theme);
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
      .get(`${API_BASE_URL}/api/task/non-tech-article-response-status`, {
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
    if (
      nonTechArticles[weekNumber] &&
      nonTechArticles[weekNumber][articleNumber]
    ) {
      setArticle(nonTechArticles[weekNumber][articleNumber]);
      axios
        .get(
          `${API_BASE_URL}/api/task/non-tech-article-response?studentId=${user.loginInfo.id}&nonTechArticleId=${nonTechArticles[weekNumber][articleNumber]["id"]}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + user.loginInfo.accessToken,
            },
          }
        )
        .then((res) => {
          setWeeklyResponse(res.data.response);
          if (res.data.response) textRef.current.value = res.data.response;
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
    }

    return () => {
      if (textRef.current) textRef.current.value = "";
      setIsSendBoxOpen(false);
      setArticle(null);
    };
  }, [articleNumber, weekNumber, weeks, user]);

  const handleArticle = (index, articleNumber) => {
    setWeekNumber(index + 1);
    setArticleNumber(articleNumber);
  };

  const handleSubmit = (nonTechArticleId) => {
    if (textRef.current.value === "") {
      toastMessage("Response is empty.");
      return;
    }
    setIsLoading(true);
    let bodyParameters = {
      nonTechArticleId: nonTechArticleId,
      response: textRef.current.value,
      studentId: user.loginInfo.id,
      completed: true,
      articleNo: articleNumber,
      weekNo: weekNumber,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .post(
        `${API_BASE_URL}/api/task/non-tech-article-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        setWeeklyResponse(response.data);
        setIsLoading(false);
        dispatch(setLastUpdated(new Date()));
        toastMessage("Response has been submitted.");
      })
      .catch((err) => {
        setIsLoading(false);
        toastMessage("Something went wrong. Please try again later.");
        console.log(err);
      });
  };
  const handleUpdate = (nonTechArticleId) => {
    setIsLoading(true);
    let bodyParameters = {
      nonTechArticleId: nonTechArticleId,
      response: textRef.current.value,
      studentId: user.loginInfo.id,
      completed: true,
      articleNo: articleNumber,
      weekNo: weekNumber,
    };
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .put(
        `${API_BASE_URL}/api/task/non-tech-article-response`,
        bodyParameters,
        config
      )
      .then((response) => {
        setWeeklyResponse(response.data);
        setIsLoading(false);
        dispatch(setLastUpdated(new Date()));
        toastMessage("Response has been updated.");
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

  const handleIncreaseFontSize = () => {
    dispatch(increaseFontSize());
  };
  const handleDecreaseFontSize = () => {
    dispatch(decreaseFontSize());
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
        <div
          className={`flex flex-col ${getThemeBLightBackgroundColor(
            theme.themeMode
          )} h-[100vh] w-44 px-2 py-4 overflow-auto items-center`}
        >
          <div className="text-2xl font-semibold text-blue-800 cursor-pointer">
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
        <div
          className={`w-full flex ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div className="flex-grow p-2">
            <div
              className={`${getThemeBorderColor(
                theme.themeMode
              )} pb-4 border-b-2 `}
            >
              <div
                className={`text-3xl ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                Non Tech Articles
              </div>
              <div
                className={`text-slate-600 text-md ${getThemeLightTextColor(
                  theme.themeMode
                )}`}
              >
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
                (article !== null || isLoading) && "hidden"
              } flex flex-col justify-center items-center mt-8`}
            >
              <div className="mb-5 text-4xl font-bold text-center text-red-500 ">
                Ooops!!
              </div>
              <div className="text-4xl font-bold text-red-600 mr-14">
                {`Article ${articleNumber} of Week ${weekNumber} not available.`}
              </div>
              <img className="flex items-center" src={NotFound} alt="" />
            </div>

            <div className={`${article === null && "hidden"}`}>
              <div
                className={`text-3xl font-normal ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} mt-8`}
              >
                {article?.articleTopic}
              </div>
              <div className="flex gap-4 mt-4 text-gray-400">
                <div
                  className={`flex items-center ${getThemeLightTextColor(
                    theme.themeMode
                  )}`}
                >
                  <BsFillPersonFill size={20} className="mr-1" />
                  {article?.author}
                </div>

                <div
                  className={`flex items-center ${getThemeLightTextColor(
                    theme.themeMode
                  )}`}
                >
                  <BiCategory size={20} className="mr-1" />
                  {article?.category}
                </div>

                <div
                  className={`flex items-center ${getThemeLightTextColor(
                    theme.themeMode
                  )}`}
                >
                  <BiTime size={20} className="mr-1" />
                  {article?.readTime} Mins
                </div>
                <div>
                  <div
                    className={`flex gap-2 items-center ${getThemeTextSecondaryColor(
                      theme.themeMode
                    )}`}
                  >
                    <button
                      onClick={handleDecreaseFontSize}
                      className={`${
                        theme.fontSize <= 0
                          ? "bg-opacity-10 cursor-not-allowed"
                          : "hover:scale-125"
                      }`}
                      disabled={theme.fontSize <= 0}
                    >
                      <BiMinus size={20} />
                    </button>
                    <BiFontSize className="" size={30} />
                    <button
                      onClick={handleIncreaseFontSize}
                      className={`${
                        theme.fontSize >= 3
                          ? "bg-opacity-10 cursor-not-allowed"
                          : "hover:scale-125"
                      }`}
                    >
                      <MdOutlineAdd size={20} />
                    </button>
                  </div>
                </div>
              </div>
              {/* Write article Box */}
              <div className={`${!isSendBoxOpen && "hidden"} `}>
                <textarea
                  autoFocus={true}
                  ref={textRef}
                  placeholder="Write here..."
                  className={`${getText(
                    theme.fontSize
                  )} w-full h-[50vh] my-6 p-4 rounded-md ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} ${getThemeBLightBackgroundColor(
                    theme.themeMode
                  )} placeholder-black`}
                ></textarea>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setIsSendBoxOpen(false);
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    Back
                  </button>
                  <button
                    onClick={() => {
                      textRef.current.value = "";
                      toastMessage("Response has been cleared.");
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    Clear
                  </button>

                  <button
                    onClick={() => {
                      if (weeklyResponse) {
                        handleUpdate(article?.id);
                      } else {
                        handleSubmit(article?.id);
                      }
                    }}
                    className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                  >
                    {" "}
                    {isLoading && <LoadingSpinner />}
                    {!weeklyResponse ? "Submit Response" : "Update Response"}
                  </button>
                </div>
              </div>
              {/* Article Box */}
              <div className={`mt-8 ${isSendBoxOpen && "hidden"}`}>
                <>
                  {article?.videoLink ? (
                    <>
                      <div className="flex justify-center items-center py-4 md:hidden">
                        <ReactPlayer
                          width="304px"
                          height="171px"
                          url="https://www.youtube.com/watch?v=Sh_YLwJTB38"
                        />
                      </div>
                      <div className="justify-center items-center py-4 hidden md:flex ">
                        <ReactPlayer url="https://www.youtube.com/watch?v=Sh_YLwJTB38" />
                      </div>
                    </>
                  ) : null}

                  <p
                    className={`${getText(theme.fontSize)} ${getThemeTextColor(
                      theme.themeMode
                    )} mb-8`}
                  >
                    {parse(String(article?.articleText))}
                  </p>

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
                        setIsSendBoxOpen(true);
                      }}
                      className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl"
                    >
                      {" "}
                      Send Reponse{" "}
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className={`flex flex-col ${getThemeBackgroundColor(
                theme.themeMode
              )} sticky top-0 h-screen w-44 px-2 py-4 overflow-auto items-center`}
            >
              <div
                className={`cursor-pointer text-2xl text-blue-800 font-semibold ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
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
export default NonTechArticles;
