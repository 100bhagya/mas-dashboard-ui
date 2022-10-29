import React, { useState } from "react";
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
import user from "../images/user.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";


const TopicBar = (value) => {
  const [selectedimage, setSelectedimage] = useState();
  const [isOpen, setIsOpen] = useState(value);
  const [aptitudeOpen, setAptitudeOpen] = useState(true);
  const [techOpen, setTechOpen] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const { loginInfo } = useContext(AuthContext);
  const userName = loginInfo.username;
  const email = loginInfo.email;

  useEffect(() => {
    setIsOpen(JSON.parse(window.localStorage.getItem('isOpen')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('isOpen', isOpen);
  }, [isOpen]);

  const Logout = () => {
    localStorage.clear();
    window.location.reload(false);
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
    <div className={`flex shrink-0 ${sidebar ? "basis-1/10" : "basis-1/5"}`}>
      <div className="bg-blue-100 w-full min-h-[100vh]">
        <div className="text-center mt-12">
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
                src={user}
                alt=""
                className={`relative rounded-full ${
                  sidebar ? "w-16 h-16 left-[8%]" : "w-32 h-32 m-auto "
                }`}
              />
            </label>
          )}

          <div
            className={`mt-5 max-w-[100%] text-xl font-medium ${
              sidebar ? "hidden" : ""
            }`}
          >
            {userName}
          </div>
          <div className={`text-[12px] mt-1 ${sidebar ? "hidden" : ""}`}>
            {email}
          </div>
          <Link to="/">
            <div className=" py-2 ">
              <div className="flex py-2  md:px-2 lg:px-8 rounded-lg hover:bg-white">
                <HomeIcon className="w-6 text-blue-500" />
                <div
                  className={`ml-5 text-blue-500 md:text-md ${
                    sidebar ? "hidden" : ""
                  }`}
                >
                  Home
                </div>
              </div>
            </div>
          </Link>
          <div className="  py-2 ">
            <div
              className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <ClipboardCheckIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
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
              <div></div>
            ) : (
              <div
                className={`flex md:pl-5 lg:pl-10 ${sidebar ? "hidden" : ""}`}
              >
                {/* <div className="bg-blue-700 w-[1.5px]"></div> */}
                <div className="mt-2 border-blue-700 border-l-2 md:pl-4 ">
                  <Link to="/wordofday">
                    <div
                      className={`text-sm  text-left md:px-2 lg:pl-8 py-2 rounded-md ${
                        location.pathname === "/wordofday"
                          ? "bg-[#2255B8] text-white"
                          : "hover:bg-white text-blue-500 "
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
                          : "hover:bg-white text-blue-500 "
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
                          : "hover:bg-white text-blue-500 "
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
                          : "hover:bg-white text-blue-500 "
                      }`}
                    >
                      Untimed Quizzes
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className="flex md:px-2 lg:pl-8 pr-4 gap-2 py-2 rounded-md hover:bg-white  cursor-pointer"
                      onClick={() => {
                        setAptitudeOpen(!aptitudeOpen);
                      }}
                    >
                      <div className="text-sm   text-blue-500 text-left ">
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
                        <div className="border-blue-700 border-l-2 pl-2  mt-2">
                          <Link to="/quant">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/quant"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
                              }`}
                            >
                              Quant
                            </div>
                          </Link>
                          <Link to="/lrdi">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/lrdi"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
                              }`}
                            >
                              LR and DI
                            </div>
                          </Link>
                          <Link to="/verbal">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/verbal"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
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
                    <div className="text-sm text-blue-500 text-left md:px-2 lg:pl-8 py-2 rounded-md hover:bg-white">
                      ML and Python
                    </div>
                  </Link>
                  <Link to="/dataanalysis">
                    <div className="text-sm text-blue-500 text-left md:px-2 lg:pl-8 py-2 rounded-md hover:bg-white">
                      Data Analysis
                    </div>
                  </Link>
                  <Link to="/sql">
                    <div className="text-sm text-blue-500 text-left md:px-2 lg:pl-8 py-2 rounded-md hover:bg-white">
                      SQL
                    </div>
                  </Link>
                  <div className="">
                    <div
                      className="flex px-2 py-2 lg:pl-8 rounded-md hover:bg-white"
                      onClick={() => {
                        setTechOpen(!techOpen);
                      }}
                    >
                      <div className="text-sm text-blue-500 text-left ">
                        Non-Tech Prep
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative left-[10%] top-2 cursor-pointer"
                        style={{
                          transform: !techOpen ? "rotate(180deg)" : null,
                        }}
                        onClick={() => {
                          setTechOpen(!techOpen);
                        }}
                      />
                    </div>
                    {techOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2  lg:pl-8">
                        {/* <div className="bg-blue-700 w-[1px]"></div> */}
                        <div className="pl-4 border-l-2 border-blue-700 mt-2">
                          <Link to="/groupdiscussion">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/groupdiscussion"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
                              }`}
                            >
                              GD
                            </div>
                          </Link>
                          <Link to="/casestudy">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/casestudy"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
                              }`}
                            >
                              Case Study
                            </div>
                          </Link>
                          <Link to="/guessestimate">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/guessestimate"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
                              }`}
                            >
                              Guess Estimate
                            </div>
                          </Link>
                          <Link to="/puzzles">
                            <div
                              className={`text-sm text-left md:px-2 lg:px-6 py-2 rounded-md ${
                                location.pathname === "/puzzles"
                                  ? "bg-[#2255B8] text-white"
                                  : "hover:bg-white text-blue-500 "
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
            <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
              <CogIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Settings
              </div>
            </div>
          </div>
          </Link>
          <div className=" py-2 ">
            <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
              <DocumentTextIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Notice Board
              </div>
            </div>
          </div>
          <div className=" py-2 ">
            <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
              <MapIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Roadmap
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
              <PencilAltIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Exams
              </div>
            </div>
          </div>
          <div className="py-2 ">
            <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
              <ChatAlt2Icon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 md:text-md ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Forum
              </div>
            </div>
          </div>
          {userName ? (
            <div className=" py-2 cursor-pointer" onClick={Logout}>
              <div className="flex py-2 md:px-2 lg:px-8 rounded-lg hover:bg-white">
                <LogoutIcon className="w-6 text-blue-500" />
                <div
                  className={`ml-5 text-blue-500 md:text-md ${
                    sidebar ? "hidden" : ""
                  }`}
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
      <div className="w-6 h-10 bg-blue-100 relative top-[50vh]">
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
