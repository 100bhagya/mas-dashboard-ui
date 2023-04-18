import React from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeBorderColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const TableContent = ({ name }) => {
  const theme = useSelector((state) => state.theme);

  const buddy = [
    // { id: 1, name: "Dog" },
    // { id: 2, name: "Bird" },
    // { id: 3, name: "Cat" },
    // { id: 4, name: "Mouse" },
    // { id: 6, name: "Horse" },
    // { id: 7, name: "Horse" },
    // { id: 8, name: "Horse" },
    // { id: 9, name: "Horse" },
  ];
  const mentor = [
    // { id: 1, name: "Dog" },
    // { id: 2, name: "Bird" },
  ];

  if (name === "buddy")
    return (
      <div
        className={`rounded-lg shadow-xl basis-1/2 ${getThemeBackgroundColor(
          theme.themeMode
        )}`}
      >
        <div
          className={`text-xl ${getThemeTextSecondaryColor(
            theme.themeMode
          )} text-center py-2 border-b-2 ${getThemeBorderColor(
            theme.themeMode
          )}`}
        >
          {" "}
          Buddy{" "}
        </div>

        <div className="px-6 py-4">
          <table className="w-full px-4 py-2 table-auto">
            <tbody className="px-2 py-4">
              <tr
                className={`${getThemeTextSecondaryColor(
                  theme.themeMode
                )} lg:text-lg md:text-md`}
              >
                <td>S.no</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Status</td>
              </tr>
              {buddy.map((a) => (
                <tr
                  className={`${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} lg:text-lg md:text-sm`}
                >
                  <td> {a.id}</td>
                  <td> {a.name}</td>
                  <td> {a.name}</td>
                  <td>
                    {" "}
                    <input type="checkbox"></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`rounded-lg shadow-xl basis-1/2 ${getThemeBackgroundColor(
          theme.themeMode
        )}`}
      >
        <div
          className={`text-xl ${getThemeTextSecondaryColor(
            theme.themeMode
          )} text-center py-2 border-b-2 ${getThemeBorderColor(
            theme.themeMode
          )}`}
        >
          {" "}
          Buddy{" "}
        </div>

        <div className="px-6 py-4">
          <table className="w-full px-4 py-2 table-auto">
            <tbody className="px-2 py-4">
              <tr
                className={`${getThemeTextSecondaryColor(
                  theme.themeMode
                )} lg:text-lg md:text-md`}
              >
                <td>S.no</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Status</td>
              </tr>
              {mentor.map((a) => (
                <tr
                  className={`${getThemeTextSecondaryColor(
                    theme.themeMode
                  )} lg:text-lg md:text-sm`}
                >
                  <td> {a.id}</td>
                  <td> {a.name}</td>
                  <td> {a.name}</td>
                  <td>
                    {" "}
                    <input type="checkbox"></input>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TableContent;
