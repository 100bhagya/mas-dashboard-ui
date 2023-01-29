/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TopicBar from "../Components/TopicBar";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
const QuizDetail = (isOpen) => {
  const { test } = useParams();
  const app = useSelector((state) => state.app);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div
          className={`w-full h-screen flex flex-col gap-2 p-4 items-center justify-center ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div className="flex gap-4 items-center">
            <div
              className={`${getThemeBackgroundColor(
                theme.themeMode
              )} rounded-lg  py-auto`}
            >
              <div
                className={`flex justify-center items-center text-2xl font-semibold ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} p-2`}
              >
                {test}
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`${getThemeTextSecondaryColor(
                  theme.themeMode
                )} font-semibold text-4xl}`}
              >
                Daily Practice Set - {test}
              </div>
              <div
                className={`text-xs ${getThemeLightTextColor(theme.themeMode)}`}
              >{`Deadline: ${app.testData[test - 1].deadline}`}</div>
            </div>
          </div>
          <iframe
            className="w-full h-full rounded px-2"
            src={app.testData[test - 1].testLink}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
