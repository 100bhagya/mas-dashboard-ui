import React from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const CourseCard = () => {
  const app = useSelector((state) => state.app);
  return (
    <div>
      <div
        className={`${getThemeBackgroundColor(
          app.themeMode
        )} shadow-xl p-4 rounded-3xl`}
      >
        <h3
          className={`${getThemeTextSecondaryColor(
            app.themeMode
          )} lg:text-2xl lg:p-10 md:p-2 text-center`}
        >
          Casestudy
        </h3>
        <p className={`mt-10 ${getThemeTextColor(app.themeMode)}`}>
          {" "}
          4 hour | 75%
        </p>
        <div class="w-full bg-gray-200 h-1">
          <div class="bg-blue-600 h-1" style={{ width: "75%" }}></div>
        </div>
        <div className={`mt-5 ${getThemeLightTextColor(app.themeMode)}`}>
          Deadline : 22 nov 2022
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
