import React from "react";
import TopicBar from "../Components/TopicBar";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
const Quizes = (isOpen) => {
  const theme = useSelector((state) => state.theme);
  const app = useSelector((state) => state.app);
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div
          className={`py-10 md:px-20 px-10 flex-grow ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div
            className={`pb-4 border-b-2 ${getThemeBorderColor(
              theme.themeMode
            )}`}
          >
            <div
              className={`text-3xl px-2 ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              Quizzes
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center h-fit mt-8">
            {app.testData.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <Link to={`/quizdetail/${index + 1}`}>
                    <div className="rounded-xl shadow-xl flex w-full h-fit md:pr-1 top-0">
                      <div
                        className={`w-1/5 ${getThemeBackgroundColor(
                          theme.themeMode
                        )} py-2 rounded-l-lg justify-center items-center flex`}
                      >
                        <span
                          className={`text-2xl ${getThemeTextSecondaryColor(
                            theme.themeMode
                          )} flex items-center`}
                        >
                          {" "}
                          {index + 1}
                        </span>
                      </div>
                      <div className="w-3/5 py-4 pl-6 flex flex-col">
                        <div
                          className={` text-sm ${getThemeBLightBackgroundColor(
                            theme.themeMode
                          )} ${getThemeTextSecondaryColor(theme.themeMode)}`}
                        >
                          {`Daily Practice Set - ${index + 1}`}
                        </div>
                        <div
                          className={`text-xs ${getThemeLightTextColor(
                            theme.themeMode
                          )}`}
                        >{`Deadline: ${app.testData[index].deadline}`}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizes;
