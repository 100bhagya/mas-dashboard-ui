import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import { FiSettings } from "react-icons/fi";
import { MdOutlineStyle } from "react-icons/md";
import Account from "../Components/Account";
import Navbar from "../Components/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import Appearance from "../Components/Appearance";
import toast, { Toaster } from "react-hot-toast";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeLightTextColor,
  getThemeTextColor,
} from "../data/themesData";
import { useSelector } from "react-redux";
const Settings = (isOpen) => {
  const [tab, setTab] = useState(0);
  const app = useSelector((state) => state.app);
  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

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
                onClick={() => {
                  setTab(0);
                }}
                class="rounded-t bg-blue-200 hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Account
              </a>
            </li>
            <li class="">
              <a
                onClick={() => {
                  setTab(1);
                }}
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

        <div
          className={`flex w-full ${getThemeBLightBackgroundColor(
            app.themeMode
          )}`}
        >
          <div className=" border border-gray-300 hidden md:block md:max-w-[30%]">
            <div
              className={`text-2xl p-6 font-medium ${getThemeTextColor(
                app.themeMode
              )}`}
            >
              Settings
            </div>
            <div
              onClick={() => {
                setTab(0);
              }}
              className={`flex flex-col justify-center p-6 ${
                tab === 0 ? getThemeBackgroundColor(app.themeMode) : ""
              }  border-t border-gray-300 cursor-pointer`}
            >
              <div className="flex gap-4 items-center">
                <FiSettings
                  size={25}
                  className={`${getThemeTextColor(app.themeMode)}`}
                />
                <div className={`text-lg ${getThemeTextColor(app.themeMode)}`}>
                  Account
                </div>
              </div>

              <div
                className={`text-base pl-10 ${getThemeLightTextColor(
                  app.themeMode
                )}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div
              onClick={() => {
                setTab(1);
              }}
              className={`flex flex-col justify-center p-6 ${
                tab === 1 ? getThemeBackgroundColor(app.themeMode) : ""
              } border-y border-gray-300 cursor-pointer`}
            >
              <div className="flex gap-4 items-center">
                <MdOutlineStyle
                  size={25}
                  className={`${getThemeTextColor(app.themeMode)}`}
                />
                <div className={`text-lg ${getThemeTextColor(app.themeMode)}`}>
                  Appearance
                </div>
              </div>

              <div
                className={`text-base pl-10 ${getThemeLightTextColor(
                  app.themeMode
                )}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit afefaf
                ageag.
              </div>
            </div>
          </div>
          <div
            className={`${getThemeBLightBackgroundColor(
              app.themeMode
            )} w-full md:min-w-[70%]`}
          >
            {tab === 0 ? <Account /> : null}
            {tab === 1 ? <Appearance /> : null}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Settings;
