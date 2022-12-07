import React from "react";
import { useState } from "react";
import Drawer from "./Drawer";
import TopicBar from "./TopicBar";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="p-2 mt-6 flex justify-start">
        <GiHamburgerMenu
          size={30}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
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
