import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Graph from "../Components/Graph";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Tooltip from "../Components/Tooltip";
// import { google } from "googleapis";
const processCSV = (str, delim = ",") => {
  const headers = str.slice(0, str.indexOf("\n")).split(delim);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  const newArray = rows.map((row) => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {});
    return eachObject;
  });

  return newArray;
};

const CourseCard = () => {
  return (
    <div>
      <div classname="">
        <div className=" shadow-xl p-4 rounded-3xl">
          <h3 className="text-cyan-600 lg:text-2xl lg:p-10 md:p-2 text-center">
            {" "}
            Casestudy{" "}
          </h3>
          <p className="mt-10"> 4 hour | 75%</p>
          <div class="w-full bg-gray-200 h-1">
            <div class="bg-blue-600 h-1" style={{ width: "75%" }}></div>
          </div>
          <div className="mt-5">Deadline : 22 nov 2022</div>
        </div>
      </div>
    </div>
  );
};

const NotificationBar = () => {
  return (
    <div>
      <div className="flex gap-1 justify-between p-4  md:flex-row flex-col border-b ">
        <h3 className="md:text-xl text-lg"> Case Study </h3>
        <h3 className="md:text-md text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <h3 className="md:text-md text-sm text-rose-400 ">22 Nov 2023</h3>
      </div>
    </div>
  );
};

const LandingPage = (isOpen) => {
  const user = useSelector((state) => state.user);
  const [testData, setTestData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const activateLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };

  useEffect(() => {
    setIsLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .get(`${API_BASE_URL}/api/getStudentReport`, config)
      .then((res) => {
        let testArray = [];
        for (let i = 0; i < res.data.length && i < 5; i++) {
          testArray.push({
            examDate: res.data[i][0],
            examName: res.data[i][1],
            rank: `#${parseInt(Math.random() * (150 - 1) + 1)}`,
          });
        }
        setTestData(testArray);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
    setIsLoading(true);
    axios
      .get(`${API_BASE_URL}/api/getLeaderboard`, config)
      .then((res) => {
        let leaderboardData = [];
        for (let i = 0; i < res.data.length && i < 5; i++) {
          leaderboardData.push({
            studentName: res.data[i][0],
            totalScore: res.data[i][2],
          });
        }
        leaderboardData.sort((a, b) => {
          return a.totalScore > b.totalScore;
        });
        console.log(leaderboardData);
        setLeaderboardData(leaderboardData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [user]);
  return (
    <>
      <div className="flex">
        <TopicBar value={(isOpen = true)} />

        <div className="flex flex-grow basis-3/5">
          <div className="flex-grow">
            <div className="md:p-10 p-6">
              <div className="text-3xl text-sky-800">Hello, Lorem</div>

              <div
                style={{
                  borderTop: "2px solid blue",
                  marginTop: "0.5rem",
                }}
              ></div>
              <div className="text-xl text-sky-800 mt-5">
                Latest test Performance
              </div>

              <div
                id="performanceCard"
                className="grid grid-cols-5 gap-4 md:p-10 p-6 shadow-xl  rounded-2xl"
              >
                {testData.map((test) => {
                  return (
                    <>
                      <Tooltip text={test.examName}>
                        <div className="flex flex-col justify-center items-center">
                          {/* <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                            {test.examName}
                          </div> */}
                          <div className="md:text-2xl !text-4xl text-sky-800 mt-4">
                            {test.rank}
                          </div>
                          <div className="md:text-md text-md">
                            {test.examDate}
                          </div>
                        </div>
                      </Tooltip>
                    </>
                  );
                })}
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">
                  Performance History
                </div>
                <div className="text-right shadow-2xl rounded-2xl">
                  <select
                    name="category"
                    className="mr-10 my-5 bg-blue-500 px-5 py-1 rounded-lg text-xl text-white"
                  >
                    <option value="Quant" selected className="">
                      Quant
                    </option>
                    <option value="Quant" className="">
                      Quant
                    </option>
                    <option value="Quant" className="">
                      Quant
                    </option>
                  </select>
                  <Graph />
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">
                  Course completion
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">Notification</div>
                <div className="shadow-xl rounded-2xl">
                  <NotificationBar />
                  <NotificationBar />
                  <NotificationBar />
                </div>
              </div>

              <p
                className="text-3xl text-center text-sky-800 mt-24"
                style={{ fontFamily: "Cookie, cursive" }}
              >
                Remember why you started
              </p>
            </div>
          </div>
        </div>
        <div
          className={`basis-1/5 bg-[#EDF3FF] top-8 md:top-0 md:relative w-full transition duration-700 ease-in-out absolute md:-translate-x-0 ${
            leaderboard ? "hidden" : ""
          }`}
        >
          <div className="my-6 text-3xl text-[#2255B8] text-center">
            Leaderboard
          </div>
          <div className="p-2  ">
            <div className="flex p-4 justify-between border-b-2 border-b-blue-800 text-blue-600 text-lg">
              <div className="flex gap-2 w-28">
                <div> Name </div>
                <div> Score </div>
                <div> Rank </div>
              </div>
            </div>
            {leaderboardData.map((student, i) => (
              <div className="flex gap-2 p-4 justify-between">
                <img
                  className="w-12 h-12 rounded-full shadow-sm"
                  alt=""
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                />

                <div> {student.studentName} </div>
                <div> {student.totalScore} </div>
                <div> {i + 1} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
