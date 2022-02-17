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

const WordOfDay = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [aptitudeOpen, setAptitudeOpen] = useState(true);
  const [techOpen, setTechOpen] = useState(true);
  return (
    <div className="flex">
      <div className="w-[15%] bg-blue-100 min-h-[100vh]">
        <div className="text-center mt-12">
          <img src={account_logo} alt="" className="w-32 relative left-[20%]" />
          <div className="mt-5 max-w-[100%] text-xl font-medium">
            Pawan Kumar
          </div>
          <div className="text-[12px] mt-1">sahupawan9749568594@gmail.com</div>
          <div className="flex ml-7 mt-8 mb-4">
            <HomeIcon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Home</div>
          </div>
          <div className="">
            <div className="flex ml-7 mt-8 mb-4">
              <ClipboardCheckIcon className="w-6 text-blue-500" />
              <div className="ml-5 text-blue-500 text-[16px]">Tasks</div>
              <img
                src={arrow}
                alt=""
                className="w-3 h-2 relative left-[15%] top-2 cursor-pointer"
                style={{ transform: isOpen ? "rotate(180deg)" : null }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
            {isOpen ? (
              <div></div>
            ) : (
              <div className="flex ml-10">
                <div className="bg-blue-700 w-[1.5px]"></div>
                <div className="ml-4 mt-2">
                  <div className="text-sm text-blue-500 text-left mb-3">
                    Word of the day
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    Summary Writing
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    Tech Articles
                  </div>
                  <div className="text-sm text-blue-500 text-left mb-3 ">
                    Untimed Quizzes
                  </div>
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
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Quant
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            LR and DI
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Verbal
                          </div>
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
                            Quant
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            LR and DI
                          </div>
                          <div className="text-sm text-blue-500 text-left mb-3">
                            Verbal
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
            <div className="ml-5 text-blue-500 text-[16px]">Settings</div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <DocumentTextIcon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Notice Board</div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <MapIcon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Roadmap</div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <PencilAltIcon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Exams</div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <ChatAlt2Icon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Forum</div>
          </div>
          <div className="flex ml-7 mt-8 mb-4">
            <LogoutIcon className="w-6 text-blue-500" />
            <div className="ml-5 text-blue-500 text-[16px]">Logout</div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default WordOfDay;
