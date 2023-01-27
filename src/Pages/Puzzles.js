import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import TopicBar from "../Components/TopicBar";
import parse from "html-react-parser";
import {
  getText,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import Artboard from "../images/Tech Article.png";
const Puzzels = (isOpen) => {
  const [limit, setLimit] = useState(800);
  const Continue = () => {
    setLimit((prevValue) => prevValue + 100);
  };
  const app = useSelector((state) => state.app);
  const theme = useSelector((state) => state.theme);
  const str =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, non. In unde tempora dolorem expedita quasi possimus provident ut minima, reiciendis quo fugit similique vel labore dolor perferendis quod delectus consequuntur, beatae eligendi temporibus atque laborum cupiditate commodi autem! Modi, id aspernatur. Voluptas facilis inventore ipsum modi recusandae sed autem? Quae eveniet soluta nostrum eum ratione? Aperiam earum nam atque, cum beatae incidunt facere a. Amet laborum vel consectetur voluptatibus rem harum similique excepturi tenetur possimus vitae? Aspernatur exercitationem, sint atque dicta labore pariatur nihil tempore est itaque magni aliquid quasi excepturi architecto tempora optio perspiciatis saepe provident doloribus ut dolores reiciendis! Et ut dolor odio, nisi repellendus saepe velit perspiciatis ipsa corporis autem veritatis, ab reprehenderit eos est! Ad aspernatur consectetur nemo sunt doloribus soluta? Blanditiis, non. In unde tempora dolorem expedita quasi possimus provident ut minima, reiciendis quo fugit similique vel labore dolor perferendis quod delectus consequuntur, beatae eligendi temporibus atque laborum cupiditate commodi autem! Modi, id aspernatur. Voluptas facilis inventore ipsum modi recusandae sed autem? Quae eveniet soluta nostrum eum ratione? Aperiam earum nam atque, cum beatae incidunt facere a. Amet laborum vel consectetur voluptatibus rem harum similique excepturi tenetur possimus vitae? Aspernatur exercitationem, sint atque dicta labore pariatur nihil tempore est itaque magni aliquid quasi excepturi architecto tempora optio perspiciatis saepe provident doloribus ut dolores reiciendis! Et ut dolor odio, nisi repellendus saepe velit perspiciatis ipsa corporis autem veritatis, ab reprehenderit eos est!";

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
              Puzzels
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-end md:justify-start my-2 gap-2">
              <div className="md:hidden">
                <img className="" alt="" src={Artboard} />
              </div>
              <p
                className={`${getThemeTextColor(theme.themeMode)} ${getText(
                  theme.fontSize
                )}`}
              >
                {parse(`<p><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">Puzzles are a form of mental challenge or game that involves arranging, solving, or manipzulating a set of pieces or elements in order to achieve a certain goal or form a specific solution. Puzzles can come in many different forms, such as jigsaw puzzles, crossword puzzles, Sudoku, Rubik&#39;s cube, riddles, and many others.</span></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">Some common features of puzzles include:</span></span></span></p>

<ul>
	<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">They have a specific goal or solution</span></span></span></li>
	<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">They require the use of critical thinking, problem-solving, and logical reasoning skills</span></span></span></li>
	<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">They can be solved by breaking them down into smaller parts and working on each part separately</span></span></span></li>
	<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">They can be challenging and may require persistence and patience to solve</span></span></span></li>
	<li style="list-style-type:disc"><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">Some puzzles can be solved by trial and error, others require a methodical approach.</span></span></span></li>
</ul>

<p><span style="font-size:11pt"><span style="font-family:Arial"><span style="color:#000000">Puzzles can be found in many different forms and can be enjoyed by people of all ages. They are known for helping with cognitive development, logical thinking, and problem-solving abilities, and can be a fun and entertaining way to pass the time.</span></span></span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>
`)}
              </p>
              <div className="hidden md:block min-w-[50%]">
                <img className="" alt="" src={Artboard} />
              </div>
            </div>

            <button
              className={`py-2 px-6 text-white rounded-xl bg-[#2255B8] md:w-[50%]`}
              onClick={Continue}
            >
              Click here to continue reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzels;
