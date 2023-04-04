import React from "react";
import { useSelector } from "react-redux";
import { COURSE_DEADLINE } from "../data/courseData";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const NotificationBar = ({ course }) => {
  const theme = useSelector((state) => state.theme);
  const dateString = COURSE_DEADLINE[course.courseName].endDate;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
  return (
    <div>
      <div
        className={`flex gap-1 justify-between p-4  md:flex-row flex-col border-b ${getThemeBackgroundColor(
          theme.themeMode
        )}`}
      >
        <h3
          className={`md:text-xl text-lg ${getThemeTextSecondaryColor(
            theme.themeMode
          )}`}
        >
          {course.courseName}
        </h3>
        <h3
          className={`md:text-md text-sm py-3 ${getThemeLightTextColor(
            theme.themeMode
          )}`}
        >
          Your course progress is currently below the expected level.
        </h3>
        <h3 className={`md:text-md text-sm text-rose-400 `}>
          {formattedDate}
        </h3>
      </div>
    </div>
  );
};

export default NotificationBar;
