import React from "react";
import TopicBar from "../Components/TopicBar";
import { FiSettings } from "react-icons/fi";
import { MdOutlineStyle } from "react-icons/md";
import Account from "../Components/Account";
import Navbar from "../Components/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
const Settings = (isOpen) => {
  return (
    <div className="flex flex-col">
      <Navbar>
        <div class="dropdown inline-block relative">
          <button className="inline-flex items-center">
            <BsThreeDotsVertical size={35} />
          </button>
          <ul class="dropdown-menu absolute hidden text-blue-700 pt-1 right-4">
            <li class="">
              <a
                class="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Account
              </a>
            </li>
            <li class="">
              <a
                class="bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Appearance
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>

        <div className="flex w-full">
          <div className=" border border-gray-300 hidden md:block md:max-w-[30%]">
            <div className="text-2xl p-6 font-medium">Settings</div>
            <div className="flex flex-col justify-center p-6 bg-blue-50 border-t border-gray-300">
              <div className="flex gap-4 items-center">
                <FiSettings size={25} className="text-slate-600" />
                <div className="text-lg">Account</div>
              </div>

              <div className="text-base pl-10 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 border-y border-gray-300">
              <div className="flex gap-4 items-center">
                <MdOutlineStyle size={25} className="text-slate-600" />
                <div className="text-lg">Appearance</div>
              </div>

              <div className="text-base pl-10 text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit afefaf
                ageag.
              </div>
            </div>
          </div>
          <div className="bg-blue-50 w-full md:min-w-[70%]">
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
