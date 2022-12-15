import React from "react";
import { useState } from "react";
import TopicBar from "./TopicBar";
import { GiHamburgerMenu } from "react-icons/gi";
import LeftDrawer from "./LeftDrawer";
const Navbar = ({ children, rightControl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="p-2 flex justify-between items-center rounded-b-sm shadow-md">
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
        <div className="w-full h-full bg-white">
          <TopicBar />
        </div>
      </LeftDrawer>
    </div>
  );
};

export default Navbar;
