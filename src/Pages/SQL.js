import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import TopicBar from "../Components/TopicBar";
import {
  getText,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import Artboard from "../images/Tech Article.png";
const SQL = (isOpen) => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div
          className={` py-10 md:px-20 px-10 ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div
            className={` pb-4 border-b-2 ${getThemeBorderColor(
              theme.themeMode
            )} `}
          >
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              SQL
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-end md:justify-start my-2 gap-2">
              <div className="md:hidden">
                <img className="" alt="" src={Artboard} />
              </div>
              <p className={`${getThemeTextColor(theme.themeMode)}`}>
                SQL (Structured Query Language) is a programming language used
                to manage and manipulate relational databases. It is used to
                create, modify, and query databases. SQL allows you to insert,
                update, and retrieve data stored in a relational database. SQL
                is a standard language for interacting with relational databases
                and it is supported by most relational database management
                systems (RDBMS) such as MySQL, Oracle, Microsoft SQL Server, and
                PostgreSQL. SQL is widely used for data analysis, data mining,
                and business intelligence applications. SQL is an essential
                skill for anyone who wants to work with data and databases.
              </p>
              <div className="hidden md:block min-w-[50%]">
                <img className="" alt="" src={Artboard} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQL;
