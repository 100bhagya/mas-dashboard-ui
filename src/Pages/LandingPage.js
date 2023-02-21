import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Graph from "../Components/Graph";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Tooltip from "../Components/Tooltip";
import moment from "moment";
import CourseCard from "../Components/CourseCard";
import NotificationBar from "../Components/NotificationBar";
import Navbar from "../Components/Navbar";
import { AiFillTrophy } from "react-icons/ai";
import RightDrawer from "../Components/RightDrawer";
import LeftDrawer from "../Components/LeftDrawer";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import { toggleThemeMode } from "../app/features/theme/themeSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { setStudentData } from "../app/features/app/appSlice";
const LandingPage = (isOpen) => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [testData, setTestData] = useState([]);
  const app = useSelector((state) => state.app);
  const [leaderboard, setLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const activateLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .get(`${API_BASE_URL}/api/student/data/`, config)
      .then((response) => dispatch(setStudentData(response.data)))
      .catch((err) => console.log(err));

    // axios
    //   .get(`${API_BASE_URL}/api/leaderboard/data`, config)
    //   .then((res) => {
    //     setLeaderboardData(res.data.splice(0, 5));
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     setIsLoading(false);
    //   });
  }, [user, dispatch]);
  useEffect(() => {
    setTestData([...app.studentData]);
  }, [app.studentData]);
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
          className={`w-full h-full ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div
            className={`${getThemeBackgroundColor(theme.themeMode)} h-full
          `}
          >
            <div
              className={`py-6 text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )} text-center`}
            >
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
                      <tr
                        class={`${getThemeBLightBackgroundColor(
                          theme.themeMode
                        )} border-b dark:bg-gray-800 dark:border-gray-700`}
                      >
                        <th
                          scope="row"
                          class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {student.rank}
                        </th>
                        <td class="py-4 px-6">{student.studentName}</td>
                        <td class="py-4 px-6">{student.totalMarks}</td>
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

        <div
          className={`w-full flex ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div className="w-full md:w-[70%]">
            <div className="md:px-10 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <div
                    className={`text-base md:text-3xl ${getThemeTextSecondaryColor(
                      theme.themeMode
                    )}`}
                  >
                    Hello, {user.loginInfo.username}
                  </div>
                  <div
                    className={`text-xs ${getThemeLightTextColor(
                      theme.themeMode
                    )}`}
                  >
                    {moment().format("MM/DD/YYYY")}
                  </div>
                </div>

                <div>
                  <button
                    className={`p-1.5 rounded-full ${
                      theme.themeMode
                        ? "text-white border-2 border-white shadow-sm shadow-white"
                        : "text-black border-2 border-dark shadow-sm shadow-dark"
                    }`}
                    onClick={() => {
                      dispatch(toggleThemeMode());
                    }}
                  >
                    {theme.themeMode ? (
                      <MdLightMode size={30} />
                    ) : (
                      <MdDarkMode size={30} />
                    )}
                  </button>
                </div>
              </div>

              <div
                style={{
                  borderTop: "2px solid blue",
                  marginTop: "0.5rem",
                }}
              ></div>

              <div
                className={`text-xl ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} my-5`}
              >
                Latest test Performance
              </div>

              <div
                id="performanceCard"
                className={`grid md:grid-cols-5 grid-cols-2 gap-4 md:p-10 md:shadow-xl md:rounded-2xl ${getThemeBackgroundColor(
                  theme.themeMode
                )}`}
              >
                {testData.slice(0, 5).map((test) => {
                  console.log(test);
                  return (
                    <div className="shadow-xl rounded-2xl md:shadow-none md:rounded-none">
                      <Tooltip text={test.testName}>
                        <div className="flex flex-col justify-center items-center">
                          {/* <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                            {test.examName}
                          </div> */}
                          <div
                            className={`md:text-2xl !text-4xl text-sky-800 mt-4 ${getThemeTextSecondaryColor(
                              theme.themeMode
                            )}`}
                          >
                            {test.rank}
                          </div>
                          <div
                            className={`md:text-md text-md ${getThemeTextColor(
                              theme.themeMode
                            )}`}
                          >
                            {moment(test.testDate).format("DD/MM/YYYY")}
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div
                  className={`text-xl ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} my-10`}
                >
                  Performance History
                </div>
                <div
                  className={`text-right shadow-2xl rounded-2xl h-[300px] w-full px-2 py-4 ${getThemeBackgroundColor(
                    theme.themeMode
                  )}`}
                >
                  <Graph testData={testData} />
                </div>
              </div>
              <div>
                <div
                  className={`text-xl ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} my-10`}
                >
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
                <div
                  className={`text-xl ${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} my-10`}
                >
                  Notification
                </div>
                <div className="shadow-xl rounded-2xl">
                  <NotificationBar />
                  <NotificationBar />
                  <NotificationBar />
                </div>
              </div>

              <p
                className={`text-3xl text-center ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} mt-24`}
                style={{ fontFamily: "Cookie, cursive" }}
              >
                Remember why you started
              </p>
            </div>
          </div>
          <div
            className={`${getThemeBackgroundColor(
              theme.themeMode
            )} md:w-[30%] ${leaderboard ? "hidden" : ""} hidden md:block`}
          >
            <div
              className={`my-6 text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )} text-center`}
            >
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
                          {student.rank}
                        </th>
                        <td class="py-4 px-6">{student.studentName}</td>
                        <td class="py-4 px-6">{student.totalMarks}</td>
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
