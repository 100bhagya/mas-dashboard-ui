import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeBorderColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import "../App.css";

const TableContent = ({ name }) => {
  const theme = useSelector((state) => state.theme);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  

  const isBeforeMay152023 = currentDate < new Date("2023-05-15");


  const buddy = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Bird" },
    { id: 3, name: "Cat" },
    { id: 4, name: "Mouse" },
    { id: 6, name: "Horse" },
    { id: 7, name: "Horse" },
    { id: 8, name: "Horse" },
    { id: 9, name: "Horse" },
  ];
  const mentor = [
    { id: 1, name: "Dog" },
    { id: 2, name: "Bird" },
  ];
 
 

  if (name === "buddy")
    return (
      
      <div
        className={`rounded-lg shadow-xl basis-1/2 ${getThemeBackgroundColor(
          theme.themeMode
        )}`}
      >
         {isBeforeMay152023 ? (
                <div className="relative top-[28vh] md:top-[24vh] z-10">
                  <div className="text-center">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} my-5` +
                        "mb-4 text-lg md:text-sm font-bold"
                      }
                    >
                      The analytics for this section will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
        
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
                )} lg:text-lg md:text-md` }
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
                  )} lg:text-lg md:text-sm`+ (isBeforeMay152023 ? " blur-md" : "")}
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

{isBeforeMay152023 ? (
                <div className="relative top-[22vh] md:top-[18vh] z-10">
                  <div className="text-center">
                    <div
                      className={
                        ` ${getThemeTextSecondaryColor(theme.themeMode)} my-5` +
                        "mb-4 text-sm md:text-sm font-bold"
                      }
                    >
                      The analytics for this section will be
                      generated as the course progresses
                    </div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
        

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
                  )} lg:text-lg md:text-sm`+ (isBeforeMay152023 ? " blur-md" : "")}
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
