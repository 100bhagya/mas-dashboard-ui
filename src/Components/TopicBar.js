import React, { useState } from "react";
import account_logo from "../images/Aashish.jpg";
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
import { Link } from "react-router-dom";

const TopicBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [aptitudeOpen, setAptitudeOpen] = useState(true);
  const [techOpen, setTechOpen] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const activatesidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className={`flex ${sidebar ? "w-[7%]" : "w-[17%]"}`}>
      <div className="bg-blue-100 w-full min-h-[100vh]">
        <div className="text-center mt-12">
          <img
            src={account_logo}
            alt=""
            className={`relative ${
              sidebar ? "w-16 left-[8%]" : "w-32 left-[20%]"
            }`}
          />
          <div
            className={`mt-5 max-w-[100%] text-xl font-medium ${
              sidebar ? "hidden" : ""
            }`}
          >
            Pawan Kumar
          </div>
          <div className={`text-[12px] mt-1 ${sidebar ? "hidden" : ""}`}>
            sahupawan9749568594@gmail.com
          </div>
          <Link to="/">
            <div className="flex ml-7 mt-8 mb-4">
              <HomeIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 text-[16px] ${
                  sidebar ? "hidden" : ""
                }`}
              >
                Home
              </div>
            </div>
          </Link>
          <div className="">
            <div className="flex ml-7 mt-8 mb-4">
              <ClipboardCheckIcon className="w-6 text-blue-500" />
              <div
                className={`ml-5 text-blue-500 text-[16px] ${
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
                style={{ transform: isOpen ? "rotate(180deg)" : null }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
            {isOpen ? (
              <div></div>
            ) : (
              <div className={`flex ml-10 ${sidebar ? "hidden" : ""}`}>
                <div className="bg-blue-700 w-[1.5px]"></div>
                <div className="ml-4 mt-2">
                  <Link to="/wordofday">
                    <div className="text-sm text-blue-500 text-left mb-3">
                      Word of the day
                    </div>
                  </Link>
                  <Link to="/summarywriting">
                    <div className="text-sm text-blue-500 text-left mb-3 ">
                      Summary Writing
                    </div>
                  </Link>
                  <Link to="/techarticles">
                    <div className="text-sm text-blue-500 text-left mb-3 ">
                      Tech Articles
                    </div>
                  </Link>
                  <Link to="/quizes">
                    <div className="text-sm text-blue-500 text-left mb-3 ">
                      Untimed Quizzes
                    </div>
                  </Link>
                  <div className="">
                    <div className="flex">
                      <div className="text-sm text-blue-500 text-left mb-3 ">
                        Aptitude Preparation
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative left-[10%] top-2 cursor-pointer"
                        style={{
                          transform: aptitudeOpen ? "rotate(180deg)" : null,
                        }}
                        onClick={() => {
                          setAptitudeOpen(!aptitudeOpen);
                        }}
                      />
                    </div>
                    {aptitudeOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2">
                        <div className="bg-blue-700 w-[1px]"></div>
                        <div className="ml-4 mt-2">
                          <Link to="/quant">
                            <div className="text-sm text-blue-500 text-left mb-3">
                              Quant
                            </div>
                          </Link>
                          <Link to="/lr&di">
                            <div className="text-sm text-blue-500 text-left mb-3">
                              LR and DI
                            </div>
                          </Link>
                          <Link to="/verbal">
                            <div className="text-sm text-blue-500 text-left mb-3">
                              Verbal
                            </div>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    ML and Python
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    Data Analysis
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    SQL
                  </div>
                  <div className="">
                    <div className="flex">
                      <div className="text-sm text-blue-500 text-left mb-3 ">
                        Non-Tech Prep
                      </div>
                      <img
                        src={arrow}
                        alt=""
                        className="w-3 h-2 relative left-[10%] top-2 cursor-pointer"
                        style={{
                          transform: techOpen ? "rotate(180deg)" : null,
                        }}
                        onClick={() => {
                          setTechOpen(!techOpen);
                        }}
                      />
                    </div>
                    {techOpen ? (
                      <div></div>
                    ) : (
                      <div className="flex ml-2">
                        <div className="bg-blue-700 w-[1px]"></div>
                        <div className="ml-4 mt-2">
                          <div className="text-sm text-blue-500 text-left mb-3">
                            GD
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Case Study
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Guess Estimate
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Puzzles
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <CogIcon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Settings
            </div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <DocumentTextIcon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Notice Board
            </div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <MapIcon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Roadmap
            </div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <PencilAltIcon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Exams
            </div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <ChatAlt2Icon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Forum
            </div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <LogoutIcon className="w-6 text-blue-500" />
            <div
              className={`ml-5 text-blue-500 text-[16px] ${
                sidebar ? "hidden" : ""
              }`}
            >
              Logout
            </div>
          </div>
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
