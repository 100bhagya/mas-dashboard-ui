import React from "react";
import { FiClock } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const CourseCard = ({ course }) => {
  const theme = useSelector((state) => state.theme);
  const progressStyle = {
    width: course.progress === 0 ? "0%" : `${course.progress}%`,
  };

  return (
    <div>
      <div
        className={`flex flex-col gap-4 ${getThemeBackgroundColor(
          theme.themeMode
        )} shadow-xl px-4 py-6 w-50 h-[25vh] min-h-max rounded-3xl`}
      >
        <h3
          className={`${getThemeTextSecondaryColor(
            theme.themeMode
          )} text-lg text-center`}
        >
          {course.courseName}
        </h3>
        <p
          className={`flex flex-wrap justify-around gap-4 text-sm font-medium ${getThemeLightTextColor(
            theme.themeMode
          )}`}
        >
          <div className="flex items-center gap-1">
            <FiClock size={15} />
            <span className="text-sm">{`${course.timeSpentHours} hours`}</span>
          </div>

          <div className="flex items-center gap-1">
            <GiProgression size={15} />
            <span className="text-sm">{`${course.progress}%`}</span>
          </div>
        </p>
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={progressStyle}

          ></div>
        </div>
        {/* <div className={`${getThemeLightTextColor(theme.themeMode)}`}>
          Deadline : 22 nov 2022
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
