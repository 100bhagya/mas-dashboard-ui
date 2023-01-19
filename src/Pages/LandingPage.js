import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Graph from "../Components/Graph";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Tooltip from "../Components/Tooltip";
import moment from "moment";
import CourseCard from "../Components/CourseCard";
import NotificationBar from "../Components/NotificationBar";
import Navbar from "../Components/Navbar";
import { AiFillTrophy } from "react-icons/ai";
import RightDrawer from "../Components/RightDrawer";
import LeftDrawer from "../Components/LeftDrawer";
import { getThemeBackgroundColor } from "../data/themesData";
const LandingPage = (isOpen) => {
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const [testData, setTestData] = useState([]);
  const [leaderboard, setLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const activateLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
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
        setLeaderboardData(leaderboardData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [user]);

  return (
    <div className="flex flex-col">
      <Navbar rightControl={setIsLeaderboardOpen}>
        <AiFillTrophy size={35} />
      </Navbar>
      <LeftDrawer>
        <TopicBar />
      </LeftDrawer>
      <RightDrawer isOpen={isLeaderboardOpen} setIsOpen={setIsLeaderboardOpen}>
        <div
          className={`w-full h-full bg-red-400 ${getThemeBackgroundColor(2)}`}
        >
          <div
            className={`bg-[#EDF3FF] h-full
          `}
          >
            <div className="py-6 text-3xl text-[#2255B8] text-center">
              Leaderboard
            </div>
            <div className="p-2">
              <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="py-3 px-6">
                        Rank
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((student, i) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td class="py-4 px-6">{student.studentName}</td>
                        <td class="py-4 px-6">{student.totalScore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </RightDrawer>
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>

        <div className="w-full flex">
          <div className="w-full md:w-[70%]">
            <div className="md:px-10 p-6">
              <div>
                <div className="text-base md:text-3xl text-sky-800">
                  Hello, Peter
                </div>
                <div className="text-xs">{moment().format("MM/DD/YYYY")}</div>
              </div>

              <div
                style={{
                  borderTop: "2px solid blue",
                  marginTop: "0.5rem",
                }}
              ></div>

              <div className="text-xl text-sky-800 my-5">
                Latest test Performance
              </div>

              <div
                id="performanceCard"
                className="grid md:grid-cols-5 grid-cols-2 gap-4 md:p-10 md:shadow-xl md:rounded-2xl"
              >
                {testData.map((test) => {
                  return (
                    <div className="shadow-xl rounded-2xl md:shadow-none md:rounded-none">
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
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="text-xl text-sky-800 my-10">
                  Performance History
                </div>
                <div className="text-right shadow-2xl rounded-2xl h-[300px] w-full ">
                  <Graph />
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">
                  Course completion
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
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
          <div
            className={`bg-[#EDF3FF] md:w-[30%] ${
              leaderboard ? "hidden" : ""
            } hidden md:block`}
          >
            <div className="my-6 text-3xl text-[#2255B8] text-center">
              Leaderboard
            </div>
            <div className="p-2">
              <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="py-3 px-6">
                        Rank
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((student, i) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td class="py-4 px-6">{student.studentName}</td>
                        <td class="py-4 px-6">{student.totalScore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
