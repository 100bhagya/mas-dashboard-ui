import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import TopicBar from "../Components/TopicBar";
import {
  getText,
  getThemeBackgroundColor,
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
            app.themeMode
          )}`}
        >
          <div
            className={` pb-4 border-b-2 ${getThemeBorderColor(
              app.themeMode
            )} `}
          >
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                app.themeMode
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
                className={`${getThemeTextColor(app.themeMode)} ${getText(
                  app.fontSize
                )}`}
              >
                {str.slice(0, limit)}
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
