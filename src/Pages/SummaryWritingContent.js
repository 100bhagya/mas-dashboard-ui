import React, { useState, useEffect, useRef } from "react";
import TopicBar from "../Components/TopicBar";
import WeekData from "../data/WeekData";
import { API_BASE_URL } from "../data/consts";

function WEEK({ week, index, toggleWEEK, handleArticle, articleNumber }) {
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
  // const [isOpen, setIsOpen] = useState(false);
  const summaryTextRef = useRef();
  const [isSendSummaryBoxOpen, setIsSendSummaryBoxOpen] = useState(false);
  const [weeks, setweeks] = useState(WeekData);
  const [article, setArticle] = useState(false);
  const [weekNumber, setWeekNumber] = useState(3);
  const [articleNumber, setArticleNumber] = useState(0);
  const [summary, setSummary] = useState("kasfks salfjla fajf lalfj af");
  var token = localStorage.getItem("access");

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
    fetch(
      `${API_BASE_URL}/api/task/weekly-summary?weekNumber=${weekNumber}&articleNumber=${articleNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((data) => data.json())
      .then((response) =>
        setSummary(`Analytics is probably the most important tool a company has today to gain customer insights. This is why the Big Data space is set to reach over $273 Billion by 2023 and companies like Microsoft, Amazon and Google among so many others are so heavily invested in not only collecting data, but enabling data for the enterprise.

        As AI and machine learning continue to develop, the way we use analytics also continues to grow and change. While in the past, businesses focused on harvesting descriptive data about their customers and products, more and more, they're about pulling both predictive and prescriptive learnings from the information they gather. So—what is the difference between descriptive, predictive analytics and prescriptive analytics? And do you need the latter in your company?
        
        If you're new to the data analytics field, let's do a quick overview:
        
        ●     Descriptive analytics: data that provides information about what has happened in your company. Think about a monthly sales report, web hit numbers, marketing campaign rates, etc. They give you insights on how a project performed. This is the most basic form of analytics. (Think “analysis” vs. “analytics.”)
        
        ●     Predictive analytics: data that provides information about what will happen in your company. Pulling on more complex machine learning and AI processes and algorithms, predictive analytics help you determine what will happen—how well a product will sell, who is likely to buy it, which marketing to use for the greatest impact.
        
        ●     Prescriptive analytics: data that provides information on not just what will happen in your company, but how it could happen better if you did x, y, or z. Beyond providing information, prescriptive analytics goes even one step further to recommend actions you should take to optimize a process, campaign, or service to the highest degree.
        
        `)
      );

    return () => {
      setIsSendSummaryBoxOpen(false);
      setSummary(null)
      console.log("clean up running")
    };

    // };
  }, [articleNumber, token, weekNumber, weeks]);

  const handleArticle = (index, articleNumber) => {
    setArticle(true);
    setWeekNumber(index + 1);
    setArticleNumber(articleNumber);
    console.log(weekNumber, articleNumber);
    // let info = async () => {
    //   let dailywords = await fetch(
    //     `${API_BASE_URL}/api/task/weekly-summary?weekNumber=${
    //       index + 1
    //     }&articleNumber=${articleNumber}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + token,
    //       },
    //     }
    //   );
    //   let words = await dailywords.json();
    //   setSummary(words);
    //   console.log(words);
    // };
    // info();
  };

  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10 mr-32">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-5xl text-sky-800 font-extralight">
            Summary Writing
          </div>
          <div className="text-slate-600 text-md">
            WEEK {weekNumber}
          </div>
        </div>
        {console.log(summary)}
        <div>
          <div className="text-3xl font-normal text-sky-800 mt-8">{`Why The Future Of Data Analytics Is Prescriptive Analytics`}</div>
          <div className="flex gap-4 mt-4 text-gray-400">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Anmol agrawal
            </div>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Data Analytics
            </div>
          </div>
          {isSendSummaryBoxOpen === true ? (
            <div>
              <textarea
                ref={summaryTextRef}
                placeholder="Write summary here..."
                className="w-full h-[50vh] bg-[#2255B8] my-6 p-4 text-lg font-mono text-white rounded-md"
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

                <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl">
                  {" "}
                  Submit Summary{" "}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="w-full h-[50vh] bg-[#2255B8] my-6 p-4 text-lg font-mono text-white rounded-md overflow-auto ">
                {summary} {summary}
              </p>
              <div className="text-right">
                <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4 shadow-2xl">
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
            </div>
          )}
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