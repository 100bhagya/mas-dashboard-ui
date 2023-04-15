import React from "react";
import { useState } from "react";
import TopicBar from "./TopicBar";
import { GiHamburgerMenu } from "react-icons/gi";
import LeftDrawer from "./LeftDrawer";
import { useSelector } from "react-redux";
import {
  getThemeTextColor,
  getThemeWhiteDarkBGColor,
} from "../data/themesData";
const Navbar = ({ children, rightControl  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useSelector((state) => state.theme);
  return (
    <div className="md:hidden">
      <div
        className={`p-2 flex justify-between items-center shadow-md cursor-pointer ${getThemeWhiteDarkBGColor(
          theme.themeMode
        )} ${getThemeTextColor(theme.themeMode)}`}
      >
        <GiHamburgerMenu
          size={30}
          onClick={() => {
            setIsOpen((prev) => !prev);
           
          }}
        />
        <div
          onClick={() => {
            rightControl(true);
          }}
        >
          {children}
        </div>
      </div>
      <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={`w-full h-full `}>
          <TopicBar />
        </div>
      </LeftDrawer>
    </div>
  );
};

export default Navbar;
