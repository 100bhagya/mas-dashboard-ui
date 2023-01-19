import React, { useState, useEffect } from "react";
import arrow from "../images/down arrow.png";
import {
  HomeIcon,
  ClipboardCheckIcon,
  CogIcon,
  DocumentTextIcon,
  MapIcon,
  PencilAltIcon,
  ChatAlt2Icon,
  LogoutIcon,
} from "@heroicons/react/outline";
import userDefaultImage from "../images/user.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/features/user/userSlice";
import {
  getThemeBackgroundColor,
  getThemeHoverPrimaryBgColor,
  getThemeTextColor,
  getThemeTextPrimaryColor,
} from "../data/themesData";

const TopicBar = (value) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
  const [selectedimage, setSelectedimage] = useState();
  const [isOpen, setIsOpen] = useState(value);
  const [aptitudeOpen, setAptitudeOpen] = useState(true);
  const [nonTechOpen, setNonTechOpen] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  // useEffect(() => {
  //   setIsOpen(JSON.parse(window.localStorage.getItem("isOpen")));
  //   const config = {
  //     headers: { Authorization: `Bearer ${user.loginInfo.accessToken}` },
  //   };
  //   // Fetching User Profile Image
  //   axios
  //     .get(`${API_BASE_URL}/api/getUserProfile`, config)
  //     .then((response) => {
  //       dispatch(setProfilePic(response.data.profilePic));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   setIsOpen(
  //     JSON.parse(window.localStorage.getItem("isOpen")) != null
  //       ? JSON.parse(window.localStorage.getItem("isOpen"))
  //       : true
  //   );
  //   setAptitudeOpen(
  //     JSON.parse(window.localStorage.getItem("aptitudeOpen")) != null
  //       ? JSON.parse(window.localStorage.getItem("aptitudeOpen"))
  //       : true
  //   );
  //   setNonTechOpen(
  //     JSON.parse(window.localStorage.getItem("nonTechOpen")) != null
  //       ? JSON.parse(window.localStorage.getItem("nonTechOpen"))
  //       : true
  //   );
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("isOpen", isOpen);
    window.localStorage.setItem("aptitudeOpen", aptitudeOpen);
    window.localStorage.setItem("nonTechOpen", nonTechOpen);
  }, [isOpen, aptitudeOpen, nonTechOpen]);

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
  useEffect(() => {
    console.log(
      `${getThemeBackgroundColor(app.themeMode)} w-full min-h-[100vh] px-2`
    );
  }, [app.themeMode]);
  return (
    <div
      className={`flex shrink-0 ${
        sidebar ? "basis-1/10" : "basis-1/5"
      } min-w-[300px] h-full`}
    >
      <div
        className={`${getThemeBackgroundColor(
          app.themeMode
        )} w-full min-h-[100vh] px-2`}
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
              app.themeMode
            )} max-w-[100%] text-xl font-medium ${sidebar ? "hidden" : ""}`}
          >
            {user.loginInfo ? user.loginInfo?.username : ""}
          </div>
          <div
            className={`text-[12px] ${getThemeTextColor(app.themeMode)} mt-1 ${
              sidebar ? "hidden" : ""
            }`}
          >
            {user.loginInfo ? user.loginInfo?.email : ""}
          </div>
          <Link to="/">
            <div className=" py-2 ">
              <div
                className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                  app.themeMode
                )}`}
              >
                <HomeIcon
                  className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    app.themeMode
                  )} md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Home
                </div>
              </div>
            </div>
          </Link>
          <div className="py-2">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                app.themeMode
              )}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <ClipboardCheckIcon
                className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  app.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Tasks
              </div>
              <img
                src={arrow}
                alt=""
                className={`w-3 h-2 relative left-[15%] top-2 cursor-pointer ${
                  sidebar ? "hidden" : ""
                }`}
                style={{ transform: !isOpen ? "rotate(180deg)" : null }}
              />
            </div>
            {isOpen ? (
              <div className=""></div>
            ) : (
              <div
                className={`flex md:pl-5 lg:pl-10 ${sidebar ? "hidden" : ""}`}
              >
                {/* <div className="bg-blue-700 w-[1.5px]"></div> */}
                <div
                  className={`mt-2 ${getThemeTextPrimaryColor(
                    app.themeMode
                  )} border-l-2 md:pl-4 px-2`}
                >
                  <Link to="/wordofday">
                    <div
                      className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/wordofday"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      Word of the day
                    </div>
                  </Link>
                  <Link to="/summarywriting">
                    <div
                      className={`text-sm  text-left md:px-2  lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/summarywriting"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      Summary Writing
                    </div>
                  </Link>
                  <Link to="/techarticles">
                    <div
                      className={`text-sm  text-left md:px-2 lg:pl-8  py-2 rounded-md ${
                        location.pathname === "/techarticles"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      Tech Articles
                    </div>
                  </Link>
                  <Link to="/quizes">
                    <div
                      className={`text-sm  text-left md:px-2  lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/quizes"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      Untimed Quizzes
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className="flex md:px-2 lg:pl-8 pr-4 gap-2 py-2 rounded-md  cursor-pointer"
                      onClick={() => {
                        setAptitudeOpen(!aptitudeOpen);
                      }}
                    >
                      <div
                        className={`text-sm  text-left md:px-2  lg:pl-8 py-2 rounded-md ${`${getThemeTextPrimaryColor(
                          app.themeMode
                        )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`}`}
                      >
                        Aptitude Preparation
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative top-2 cursor-pointer"
                        style={{
                          transform: !aptitudeOpen ? "rotate(180deg)" : null,
                        }}
                      />
                    </div>
                    {aptitudeOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-4 lg:pl-8">
                        {/* <div className="bg-blue-700 w-[1px]"></div> */}
                        <div className={`border-l-2 pl-2  mt-2`}>
                          <Link to="/quant">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/quant"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
                                    )}`
                              }`}
                            >
                              Quant
                            </div>
                          </Link>
                          <Link to="/lrdi">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/lrdi"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
                                    )}`
                              }`}
                            >
                              LR and DI
                            </div>
                          </Link>
                          <Link to="/verbal">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/verbal"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
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
                      className={`text-sm  text-left md:px-2 lg:pl-8  py-2 rounded-md ${
                        location.pathname === "/techarticles"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      ML and Python
                    </div>
                  </Link>
                  <Link to="/dataanalysis">
                    <div
                      className={`text-sm  text-left md:px-2 lg:pl-8  py-2 rounded-md ${
                        location.pathname === "/techarticles"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      Data Analysis
                    </div>
                  </Link>
                  <Link to="/sql">
                    <div
                      className={`text-sm  text-left md:px-2 lg:pl-8  py-2 rounded-md ${
                        location.pathname === "/techarticles"
                          ? "bg-[#2255B8] text-white"
                          : `${getThemeTextPrimaryColor(
                              app.themeMode
                            )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`
                      }`}
                    >
                      SQL
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className="flex md:px-2 lg:pl-8 pr-4 gap-2 py-2 rounded-md  cursor-pointer"
                      onClick={() => {
                        setNonTechOpen(!nonTechOpen);
                      }}
                    >
                      <div
                        className={`text-sm text-left md:px-2 lg:pl-8 py-2 rounded-md ${`${getThemeTextPrimaryColor(
                          app.themeMode
                        )} ${getThemeHoverPrimaryBgColor(app.themeMode)}`}`}
                      >
                        Non-Tech Prep
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative left-[10%] top-2 cursor-pointer"
                        style={{
                          transform: !nonTechOpen ? "rotate(180deg)" : null,
                        }}
                        onClick={() => {
                          setNonTechOpen(!nonTechOpen);
                        }}
                      />
                    </div>
                    {nonTechOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2  lg:pl-8">
                        {/* <div className="bg-blue-700 w-[1px]"></div> */}
                        <div className={`border-l-2 pl-2  mt-2`}>
                          <Link to="/groupdiscussion">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/groupdiscussion"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
                                    )}`
                              }`}
                            >
                              GD
                            </div>
                          </Link>
                          <Link to="/casestudy">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/casestudy"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
                                    )}`
                              }`}
                            >
                              Case Study
                            </div>
                          </Link>
                          <Link to="/guessestimate">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/guessestimate"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
                                    )}`
                              }`}
                            >
                              Guess Estimate
                            </div>
                          </Link>
                          <Link to="/puzzles">
                            <div
                              className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                                location.pathname === "/puzzles"
                                  ? "bg-[#2255B8] text-white"
                                  : `${getThemeTextPrimaryColor(
                                      app.themeMode
                                    )} ${getThemeHoverPrimaryBgColor(
                                      app.themeMode
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
                  app.themeMode
                )}`}
              >
                <CogIcon
                  className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    app.themeMode
                  )} md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Settings
                </div>
              </div>
            </div>
          </Link>
          <div className=" py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                app.themeMode
              )}`}
            >
              <DocumentTextIcon
                className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  app.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Notice Board
              </div>
            </div>
          </div>
          <div className=" py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                app.themeMode
              )}`}
            >
              <MapIcon
                className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  app.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Roadmap
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                app.themeMode
              )}`}
            >
              <PencilAltIcon
                className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  app.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Exams
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div
              className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                app.themeMode
              )}`}
            >
              <ChatAlt2Icon
                className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
              />
              <div
                className={`ml-5 ${getThemeTextPrimaryColor(
                  app.themeMode
                )} md:text-md ${sidebar ? "hidden" : ""}`}
              >
                Forum
              </div>
            </div>
          </div>
          {user.loginInfo.username ? (
            <div className=" py-2 cursor-pointer" onClick={Logout}>
              <div
                className={`flex py-2  md:px-2 lg:px-8 rounded-lg ${getThemeHoverPrimaryBgColor(
                  app.themeMode
                )}`}
              >
                <LogoutIcon
                  className={`w-6 ${getThemeTextPrimaryColor(app.themeMode)}`}
                />
                <div
                  className={`ml-5 ${getThemeTextPrimaryColor(
                    app.themeMode
                  )} md:text-md ${sidebar ? "hidden" : ""}`}
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to="/signin">
              <div className=" py-2 cursor-pointer">
                <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
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
      <div className="w-6 h-10 bg-blue-100 relative top-[50vh] hidden md:block">
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
  );
};

export default TopicBar;
