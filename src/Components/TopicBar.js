import React, { useState, useEffect } from "react";
import arrow from "../images/down arrow.png";
import {
  HomeIcon,
  ClipboardCheckIcon,
  CogIcon,
  DocumentTextIcon,
  MapIcon,
  PencilAltIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import userDefaultImage from "../images/user.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setProfilePic } from "../app/features/user/userSlice";
import axios from "axios";
import { API_BASE_URL } from "../data/consts";
import {
  setAptitudeOpen,
  setTasksOpen,
  setNonTechOpen,
} from "../app/features/app/appSlice";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeHoverPrimaryBgColor,
  getThemeTextColor,
  getThemeTextPrimaryColor,
} from "../data/themesData";
import { FaDiscord } from "react-icons/fa";
const TopicBar = ({ value }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const theme = useSelector((state) => state.theme);

  const [selectedimage, setSelectedimage] = useState();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
    };
    // Fetching User Profile Image
    axios
      .get(`${API_BASE_URL}/api/getUserProfile`, config)
      .then((response) => {
        dispatch(setProfilePic(response.data.profilePic));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.loginInfo.accessToken, dispatch]);

  const Logout = () => {
    window.location.reload(false);
    dispatch(logout());
  };
  // console.log(value);

  const location = useLocation();
  // const check = (state) => {
  //   if (location.pathname === "GroupDiscussion") {
  //     if (location.state.state == state) return true;
  //   }
  //   return false;
  // };
  const activatesidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div
      className={`flex shrink-0 ${sidebar ? "basis-1/10" : "basis-1/5"} ${
        !sidebar && "md:min-w-[300px]"
      }  h-full`}
    >
      <div
        className={`${getThemeBackgroundColor(
          theme.themeMode
        )} w-full sticky top-0 h-screen px-2 overflow-auto`}
      >
        <div className="text-center mt-12 ">
          {selectedimage ? (
            <label>
              <input
                type="file"
                name="myImage"
                className="text-sm hidden"
                onChange={(event) => {
                  setSelectedimage(event.target.files[0]);
                }}
              />
              <img
                src={URL.createObjectURL(selectedimage)}
                alt=""
                className={`relative rounded-full ${
                  sidebar ? "w-16 h-16 left-[8%]" : "w-32 h-32 m-auto "
                }`}
              />
            </label>
          ) : (
            <label>
              <input
                type="file"
                name="myImage"
                className="text-sm hidden"
                onChange={(event) => {
                  setSelectedimage(event.target.files[0]);
                }}
              />
              <img
                src={user.profilePic || userDefaultImage}
                alt=""
                className={`relative rounded-full ${
                  sidebar
                    ? "w-16 h-16 left-[8%] object-cover"
                    : "w-32 h-32 m-auto object-cover"
                }`}
              />
            </label>
          )}
          <div
            className={`mt-5 ${getThemeTextColor(
              theme.themeMode
            )} max-w-[100%] text-xl font-medium ${sidebar ? "hidden" : ""}`}
          >
            {user.loginInfo ? user.loginInfo?.username : ""}
          </div>
          <div
            className={`text-sm ${getThemeTextColor(theme.themeMode)} mt-1 ${
              sidebar ? "hidden" : ""
            }`}
          >
            {user.loginInfo ? user.loginInfo?.email : ""}
          </div>
          <Link to="/">
            <div className=" py-2 ">
              <div
                className={`flex py-2  md:px-1 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                  theme.themeMode
                )}`}
              >
                <HomeIcon
                  className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    theme.themeMode
                  )}  text-blue-500 md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Home
                </div>
              </div>
            </div>
          </Link>
          <div className="py-2">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                theme.themeMode
              )}`}
              onClick={() => {
                dispatch(setTasksOpen(!app.tasksOpen));
              }}
            >
              <ClipboardCheckIcon
                className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  theme.themeMode
                )} text-blue-500  md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Tasks
              </div>
              <img
                src={arrow}
                alt=""
                className={`${getThemeBackgroundColor(
                  theme.themeMode
                )} w-3 h-2 relative left-[15%] top-2 cursor-pointer ${
                  sidebar ? "hidden" : ""
                }`}
                style={{ transform: !app.tasksOpen ? "rotate(180deg)" : null }}
              />
            </div>
            {app.tasksOpen ? (
              <div className=""></div>
            ) : (
              <div
                className={`flex md:pl-5 lg:pl-10 ${sidebar ? "hidden" : ""}`}
              >
                {/* <div className="bg-blue-700 w-[1.5px]"></div> */}
                <div
                  className={`mt-2 ${getThemeBorderColor(
                    theme.themeMode
                  )} border-l-2 md:pl-4 px-2`}
                >
                  <Link to="/wordofday">
                    <div
                      className={`text-sm  text-left md:px-1 lg:pl-8 px-2 py-2 rounded-md ${
                        location.pathname === "/wordofday"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      Word of the day
                    </div>
                  </Link>
                  <Link to="/summarywriting">
                    <div
                      className={`text-sm  text-left md:px-1  lg:pl-8 px-2 py-2 rounded-md ${
                        location.pathname === "/summarywriting"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      Summary Writing
                    </div>
                  </Link>
                  <Link to="/techarticles">
                    <div
                      className={`text-sm  text-left md:px-1 lg:pl-8 px-2 py-2 rounded-md ${
                        location.pathname === "/techarticles"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      Tech Articles
                    </div>
                  </Link>
                  <Link to="/quizes">
                    <div
                      className={`text-sm  text-left px-2 md:px-1  lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/quizes"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      Untimed Quizzes
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className={`flex px-2 md:px-1 lg:pl-8 pr-4 gap-2 py-2 rounded-md ${getThemeHoverPrimaryBgColor(
                        theme.themeMode
                      )} cursor-pointer`}
                      onClick={() => {
                        dispatch(setAptitudeOpen(!app.aptitudeOpen));
                      }}
                    >
                      <div
                        className={`text-sm text-left ${getThemeTextPrimaryColor(
                          theme.themeMode
                        )}`}
                      >
                        Aptitude Preparation
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative top-2 cursor-pointer"
                        style={{
                          transform: !app.aptitudeOpen
                            ? "rotate(180deg)"
                            : null,
                        }}
                      />
                    </div>
                    {app.aptitudeOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2 lg:pl-8">
                        {/* <div className="bg-blue-700 w-[1px]"></div> */}
                        <div
                          className={`border-l-2 pl-2 ${getThemeBorderColor(
                            theme.themeMode
                          )} mt-2`}
                        >
                          <Link to="/quant">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/quant"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              Quant
                            </div>
                          </Link>
                          <Link to="/lrdi">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/lrdi"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              LR and DI
                            </div>
                          </Link>
                          <Link to="/verbal">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/verbal"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              Verbal
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link to="/mlandpython">
                    <div
                      className={`text-sm text-blue-500 text-left px-2 md:px-1 lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/mlandpython"
                          ? "bg-[#2255B8] !text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      ML and Python
                    </div>
                  </Link>
                  <Link to="/dataanalysis">
                    <div
                      className={`text-sm text-left px-2 md:px-1 lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/dataanalysis"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      Data Analysis
                    </div>
                  </Link>
                  <Link to="/sql">
                    <div
                      className={`text-sm text-left px-2 md:px-1 lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/sql"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              theme.themeMode
                            )} ${getThemeHoverPrimaryBgColor(theme.themeMode)}`
                      }`}
                    >
                      SQL
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className={`flex px-2 py-2 lg:pl-8 rounded-md ${getThemeHoverPrimaryBgColor(
                        theme.themeMode
                      )}`}
                      onClick={() => {
                        dispatch(setNonTechOpen(!app.nonTechOpen));
                      }}
                    >
                      <div
                        className={`text-sm text-left cursor-pointer ${getThemeTextPrimaryColor(
                          theme.themeMode
                        )}`}
                      >
                        Non-Tech Prep
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative left-[10%] top-2 cursor-pointer"
                        style={{
                          transform: !app.nonTechOpen ? "rotate(180deg)" : null,
                        }}
                        onClick={() => {
                          setNonTechOpen(!app.nonTechOpen);
                        }}
                      />
                    </div>
                    {app.nonTechOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2  lg:pl-8">
                        {/* <div className="bg-blue-700 w-[1px]"></div> */}
                        <div
                          className={`pl-4 border-l-2 ${getThemeBorderColor(
                            theme.themeMode
                          )} mt-2`}
                        >
                          <Link to="/groupdiscussion">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/groupdiscussion"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              GD
                            </div>
                          </Link>
                          <Link to="/casestudy">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/casestudy"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              Case Study
                            </div>
                          </Link>
                          <Link to="/guessestimate">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/guessestimate"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              Guess Estimate
                            </div>
                          </Link>
                          <Link to="/puzzles">
                            <div
                              className={`text-sm text-left px-2 md:px-1 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/puzzles"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      theme.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      theme.themeMode
                                    )}`
                              }`}
                            >
                              Puzzles
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/settings">
            <div className=" py-2 ">
              <div
                className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                  theme.themeMode
                )}`}
              >
                <CogIcon
                  className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    theme.themeMode
                  )} md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Settings
                </div>
              </div>
            </div>
          </Link>

          <div className="py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                theme.themeMode
              )}`}
            >
              <PencilAltIcon
                className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  theme.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Exams
              </div>
            </div>
          </div>
          <div className=" py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                theme.themeMode
              )}`}
            >
              <DocumentTextIcon
                className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  theme.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Learn
              </div>
            </div>
          </div>
          <div className=" py-2 ">
            <div
              className={`flex items-center py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                theme.themeMode
              )}`}
            >
              <FaDiscord
                size={20}
                className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  theme.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Discord
              </div>
            </div>
          </div>
          <div className=" py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                theme.themeMode
              )}`}
            >
              <MapIcon
                className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  theme.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Roadmap
              </div>
            </div>
          </div>

          {user.loginInfo.username ? (
            <div className=" py-2 cursor-pointer" onClick={Logout}>
              <div
                className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                  theme.themeMode
                )}`}
              >
                <LogoutIcon
                  className={`w-6 ${getThemeTextPrimaryColor(theme.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    theme.themeMode
                  )} md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to="/signin">
              <div className=" py-2 cursor-pointer">
                <div className="flex py-2 md:px-1 lg:px-8 rounded-lg hover:bg-white">
                  <LogoutIcon className="w-6 text-blue-500" />
                  <div
                    className={`ml-5 text-blue-500 md:text-md ${
                      sidebar ? "hidden" : ""
                    }`}
                  >
                    Login
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div
        className={`${getThemeBLightBackgroundColor(
          theme.themeMode
        )} sticky top-0 h-screen`}
      >
        <div
          className={`${getThemeBackgroundColor(
            theme.themeMode
          )} top-[50vh] -translate-y-1/2 w-6 h-10  relative hidden md:block`}
        >
          <img
            src={arrow}
            alt=""
            className={`${
              sidebar ? "-rotate-90" : "rotate-90"
            } h-4 w-6 cursor-pointer relative top-3`}
            onClick={activatesidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default TopicBar;
