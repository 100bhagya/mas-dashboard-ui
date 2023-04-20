import React from "react";
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
const Puzzles = (isOpen) => {
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
              Puzzles
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col justify-end gap-2 my-2 md:flex-row md:justify-start">
              <div className="md:hidden">
                <img className="" alt="" src={Artboard} />
              </div>
              <p className={`${getThemeTextColor(theme.themeMode)} `}>
                <p>
                  Puzzles are a form of mental challenge or game that involves
                  arranging, solving, or manipulating a set of pieces or
                  elements in order to achieve a certain goal or form a specific
                  solution. Puzzles can come in many different forms, such as
                  jigsaw puzzles, crossword puzzles, Sudoku, Rubik's cube,
                  riddles, and many others.
                </p>
                <p>Some common features of puzzles include:</p>
                <p>
                  <ul className="ml-4 list-disc">
                    <li>They have a specific goal or solution</li>
                    <li>
                      They require the use of critical thinking,
                      problem-solving, and logical reasoning skills
                    </li>
                    <li>
                      They can be solved by breaking them down into smaller
                      parts and working on each part separately
                    </li>
                    <li>
                      They can be challenging and may require persistence and
                      patience to solve
                    </li>
                    <li>
                      Some puzzles can be solved by trial and error, others
                      require a methodical approach
                    </li>
                  </ul>
                </p>
                <p>
                  Puzzles can be found in many different forms and can be
                  enjoyed by people of all ages. They are known for helping with
                  cognitive development, logical thinking, and problem-solving
                  abilities, and can be a fun and entertaining way to pass the
                  time.
                </p>
              </p>
              <div className="hidden md:block min-w-[50%]">
              <a href="https://learn.myanalyticsschool.com/" target="_blank">
                <img className="" alt="" src={Artboard} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
