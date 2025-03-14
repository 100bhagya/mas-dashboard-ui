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
import { COURSE_DEADLINE } from "../data/courseData";
import "../App.css";

const LandingPage = (isOpen) => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [testData, setTestData] = useState([]);
  const app = useSelector((state) => state.app);
  const [leaderboard, setLeaderboard] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  

  const isBeforeMay152023 = currentDate < new Date("2023-05-15");

   // Callback function to receive data from child component
  



  const activateLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    axios
      .get(`${API_BASE_URL}/api/student/data/`, config)
      .then((response) => dispatch(setStudentData(response.data)))
      .catch((err) => console.log(err));
    axios
      .get(`${API_BASE_URL}/api/course/data`, config)
      .then((res) => {
        setCourseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${API_BASE_URL}/api/leaderboard/data`, config)
      .then((res) => {
        setLeaderboardData(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [user, dispatch]);

  
  useEffect(() => {
    setTestData([...app.studentData]);
  }, [app.studentData]);
  var rank = leaderboardData.findIndex(
    (obj) => obj.rollNumber === user.loginInfo.rollNumber
  );
 

  return (
    <div className="flex flex-col">
      <Navbar rightControl={setIsLeaderboardOpen}  >
        <AiFillTrophy size={35} />
      </Navbar>
      <LeftDrawer>
        <TopicBar />
      </LeftDrawer>
      <RightDrawer isOpen={isLeaderboardOpen} setIsOpen={setIsLeaderboardOpen}>
        <div>
          <div
            className={`w-full z-50 h-full ${getThemeBLightBackgroundColor(
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
                )} text-center z-30`}
              >
                Leaderboard
              </div>
              {isBeforeMay152023 ? (
                <div className="">
                  <div className="text-center w-[90%]">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} ` +
                        " text-lg md:text-sm font-bold relative z-30 top-[34vh] left-5 "
                      }
                    
                    >
                      The analytics for Leaderboard will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
              

              <div className={"p-2" + (isBeforeMay152023 ? " blur-md" : "")}>
                {isBeforeMay152023 ? (
                  <div className="coming-soon-message">Coming soon...</div>
                ) : (
                  ""
                )}
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
                      {leaderboardData.slice(0, 10).map((student, i) =>
                        student.rank === rank + 1 ? (
                          <tr
                            class={`${getThemeBLightBackgroundColor(
                              theme.themeMode
                            )} border-b dark:bg-gray-600 dark:border-gray-600`}
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
                        ) : (
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
                        )
                      )}
                    </tbody>
                    {rank >= 10 ? (
                      <tbody>
                        {leaderboardData.map((student, i) =>
                          student.rank === rank + 1 ? (
                            <tr
                              class={`${getThemeBLightBackgroundColor(
                                theme.themeMode
                              )} border-b dark:bg-gray-600 dark:border-gray-600`}
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
                          ) : (
                            ""
                          )
                        )}
                      </tbody>
                    ) : (
                      <div></div>
                    )}
                  </table>
                </div>
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
            <div className="p-6 md:px-10">
              <div className="flex items-center justify-between">
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
              {isBeforeMay152023  ? (
                <div className="relative top-[14vh] z-10">
                  <div className="text-center">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} my-5` +
                        "mb-4 text-lg md:text-sm font-bold"
                      }
                    >
                      The analytics for Latest test Performance will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
             

              <div
                id="performanceCard"
                className={
                  `grid md:grid-cols-5 grid-cols-2 gap-4  md:p-10 md:shadow-xl md:rounded-2xl ${getThemeBackgroundColor(
                    theme.themeMode
                  )}` + (isBeforeMay152023 ? "  blur-md" : "") +  (testData.length===0 ? " md:p-[12vh] p-[12vh]  ":"" )
                }
              >
                {testData
                  .slice(
                    testData.length >= 5 ? testData.length - 5 : 0,
                    testData.length
                  )
                  .map((test) => {
                    return (
                      <div className="shadow-xl rounded-2xl md:shadow-none md:rounded-none">
                        <Tooltip text={test.testName}>
                          <div className="flex flex-col items-center justify-center ">
                            {/* <div className="pb-2 text-xl border-b-2 border-gray-500 md:text-2xl w-fit">
                            {test.examName}
                          </div> */}
                            <div
                              className={`md:text-xl text-sm border-b border-blue-500 lg:text-xl text-sky-800 mt-3 ${getThemeTextSecondaryColor(
                                theme.themeMode
                              )}`}
                            >
                              {test.recentTestName}
                            </div>
                            <div
                              className={`md:text-2xl text-3xl mt-4 ${
                                theme.themeMode
                                  ? "text-blue-400"
                                  : "text-blue-800"
                              } `}
                            >
                              {"#" + test.rank}
                            </div>
                            <div
                              className={`md:text-md mt-2 text-md ${getThemeTextColor(
                                theme.themeMode
                              )}`}
                            >
                              {moment(test.testDate).format("DD MMMM")}
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
                {isBeforeMay152023 ? (
                <div className="relative top-[20vh] md:top-[13vh] z-10">
                  <div className="text-center">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} my-5` +
                        "mb-4 text-lg md:text-sm font-bold"
                      }
                    >
                      The analytics for  Performance History will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}

                
                <div
                  className={
                    `text-right shadow-2xl rounded-2xl h-[300px] w-full px-2 py-4 ${getThemeBackgroundColor(
                      theme.themeMode
                    )}` + (isBeforeMay152023 ? " blur-md" : "")
                  }
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
                  {isBeforeMay152023 ? (
                <div className={`relative z-10 top-[14vh]`+(Array.isArray(courseData) &&
                courseData.length==0? " top-[6vh]":"" )}>
                  <div className="text-center">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} my-5` +
                        "mb-4 text-lg md:text-sm font-bold"
                        }
                    >
                      The analytics for Course Completion will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}

                </div>
                
                <div
                  className={
                    "grid grid-cols-2 gap-6 md:grid-cols-3" +
                    (isBeforeMay152023 ? " blur-md" : "")
                  }
                >
                  {Array.isArray(courseData) &&
                    courseData?.map((course) => {
                      return (
                        <div key={course.id}>
                          <CourseCard course={course} />
                        </div>
                      );
                    })}
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
                  {Array.isArray(courseData) &&
                    courseData?.map((course, i) => {
                      if (
                        (
                          moment().diff(
                            moment(COURSE_DEADLINE[course.courseName].startDate)
                          ) /
                          moment(
                            COURSE_DEADLINE[course.courseName].endDate
                          ).diff(
                            moment(COURSE_DEADLINE[course.courseName].startDate)
                          )
                        ).toFixed(2) > course.progress
                      ) {
                        return <NotificationBar course={course} />;
                      } else {
                        return null;
                      }
                    })}
                </div>
              </div>
              {/* //  */}

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
            {isBeforeMay152023 ? (
                <div className="">
                  <div className="text-center w-[90%]">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} ` +
                        " text-lg md:text-sm font-bold relative z-10 top-[34vh] left-5 "
                      }
                      
                    >
                      The analytics for Leaderboard will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
            <div className={"p-2" + (isBeforeMay152023 ? " blur-sm" : "")}>
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
                    {leaderboardData.slice(0, 10).map((student, i) =>
                      student.rank === rank + 1 ? (
                        <tr class=" border-t mt-5 dark:bg-gray-600 dark:border-gray-600">
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {student.rank}
                          </th>
                          <td class="py-4 px-6">{student.studentName}</td>
                          <td class="py-4 px-6">{student.totalMarks}</td>
                        </tr>
                      ) : (
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
                      )
                    )}
                  </tbody>

                  {rank >= 10 ? (
                    <tbody>
                      {leaderboardData.map((student, i) =>
                        student.rank === rank + 1 ? (
                          <tr class=" border-t mt-5 dark:bg-gray-600 dark:border-gray-600">
                            <th
                              scope="row"
                              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {student.rank}
                            </th>
                            <td class="py-4 px-6">{student.studentName}</td>
                            <td class="py-4 px-6">{student.totalMarks}</td>
                          </tr>
                        ) : (
                          ""
                        )
                      )}
                    </tbody>
                  ) : (
                    <div></div>
                  )}
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
