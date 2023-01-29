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
const DataAnalysis = (isOpen) => {
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
              Data Analysis
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
                Data interpretation is the process of understanding, analyzing,
                and making conclusions from data. It involves the ability to
                extract information from data sets, such as tables, graphs, and
                charts, and use it to make informed decisions. Data
                interpretation often involves using mathematical and statistical
                techniques to analyze and understand the data, as well as using
                critical thinking and logical reasoning to draw conclusions from
                it. It's a crucial skill in fields such as business, finance,
                and market research, where large amounts of data need to be
                analyzed and understood in order to make informed decisions. In
                aptitude tests, data interpretation questions test the ability
                to understand and interpret data presented in tables, graphs,
                charts, and so on.
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

export default DataAnalysis;
