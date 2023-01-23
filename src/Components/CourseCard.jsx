import React from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const CourseCard = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <div
        className={`${getThemeBackgroundColor(
          theme.themeMode
        )} shadow-xl p-4 rounded-3xl`}
      >
        <h3
          className={`${getThemeTextSecondaryColor(
            theme.themeMode
          )} lg:text-2xl lg:p-10 md:p-2 text-center`}
        >
          Casestudy
        </h3>
        <p className={`mt-10 ${getThemeTextColor(theme.themeMode)}`}>
          {" "}
          4 hour | 75%
        </p>
        <div class="w-full bg-gray-200 h-1">
          <div class="bg-blue-600 h-1" style={{ width: "75%" }}></div>
        </div>
        <div className={`mt-5 ${getThemeLightTextColor(theme.themeMode)}`}>
          Deadline : 22 nov 2022
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
