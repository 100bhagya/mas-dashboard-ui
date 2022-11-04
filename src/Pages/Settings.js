import React from "react";
import TopicBar from "../Components/TopicBar";
import { FiSettings } from "react-icons/fi";
import { MdOutlineStyle } from "react-icons/md";
import Account from "../Components/Account";
const Settings = () => {
  return (
    <div className="flex">
      <TopicBar />
      <div className="flex w-full">
        <div className="min-w-[30%] border border-gray-300">
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
        <div className="bg-blue-50 min-w-[70%]">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Settings;