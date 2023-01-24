import React from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const NotificationBar = () => {
  const theme = useSelector((state) => state.theme);
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
          {" "}
          Case Study{" "}
        </h3>
        <h3
          className={`md:text-md text-sm py-3 ${getThemeLightTextColor(
            theme.themeMode
          )}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <h3 className={`md:text-md text-sm text-rose-400 `}>22 Nov 2023</h3>
      </div>
    </div>
  );
};

export default NotificationBar;
