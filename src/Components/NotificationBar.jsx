import React from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const NotificationBar = () => {
  const app = useSelector((state) => state.app);
  return (
    <div>
      <div
        className={`flex gap-1 justify-between p-4  md:flex-row flex-col border-b ${getThemeBackgroundColor(
          app.themeMode
        )}`}
      >
        <h3
          className={`md:text-xl text-lg ${getThemeTextSecondaryColor(
            app.themeMode
          )}`}
        >
          {" "}
          Case Study{" "}
        </h3>
        <h3
          className={`md:text-md text-sm py-3 ${getThemeLightTextColor(
            app.themeMode
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
