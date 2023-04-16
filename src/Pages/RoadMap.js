import React, { useState } from "react";
import TopicBar from "../Components/TopicBar";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import Data from "../data/roadMap";
import Rectangle from "../images/Rectangle 52.png";
import "../index.css";

function FAQ({ faq, index, toggleFAQ ,theme}) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")+` ${getThemeBackgroundColor(theme.themeMode)} ${getThemeTextSecondaryColor(
        theme.themeMode
      )} ${getThemeBorderColor(
        theme.themeMode
      )} border `}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={`text-lg font-semibold   rounded-2xl faq-question font ${getThemeBackgroundColor(theme.themeMode)} ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} `}>
        {faq.question}
      </div>
      <div className={`text-sm faq-answer  ${getThemeBackgroundColor(theme.themeMode)} `}>
        <div className={`mt-2 text-lg ${getThemeBorderColor(theme.themeMode)} font-normal ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}  ${getThemeBackgroundColor(theme.themeMode)}`}>{faq.Status}</div> 
        <div className={`flex-col justify-between ${getThemeBackgroundColor(theme.themeMode)} gap-1 p-1 mt-5 mb-3 `}>
          {faq.answer.map((post) => {
            return (
              <div className="flex ">
                <img
                  src={Rectangle}
                  alt="rectangle"
                  className="relative w-4 h-1 my-5 mr-7 left-3 bottom-3 rounded-xl"
                />
                <div className={`w-[70%] ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}>{post.role}</div>
                <div className={`flex-end ml-10 w-[25%] text-rose-400  `}>{post.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const RoadMap = (isOpen) => {
  const theme = useSelector((state) => state.theme);
  const app = useSelector((state) => state.app);
  const [faqs, setfaqs] = useState(Data);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div
          className={`py-10 md:px-20 px-10 flex-grow ${getThemeBLightBackgroundColor(
            theme.themeMode
          )}`}
        >
          <div
            className={`pb-4 border-b-2 ${getThemeBorderColor(
              theme.themeMode
            )}`}
          >
            <div
              className={`text-3xl px-2 ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              Weekly Study Plan
            </div>
          </div>

          <div className= {`pt-1 pb-16 mt-20 lg:pb-36 bg-back  `}>
            <div className={`faqs lg:w-[75%] p-[10%] lg:p-[0%] md:w-[90%] w-full relative lg:left-[15%] md:left-[5%] bg-back  lg:py-16 lg:px-20 rounded-3xl  ${getThemeBackgroundColor(theme.themeMode)} `}>
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} theme={theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
