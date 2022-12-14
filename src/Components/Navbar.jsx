import React from "react";
import { useState } from "react";
import Drawer from "./Drawer";
import TopicBar from "./TopicBar";
import { GiHamburgerMenu } from "react-icons/gi";
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
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-full h-full bg-white">
          <TopicBar />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
