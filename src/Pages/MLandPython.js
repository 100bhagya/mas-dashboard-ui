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
const MLAndPython = (isOpen) => {
  const theme = useSelector((state) => state.theme);
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
              ML and Python
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col justify-end gap-2 my-2 md:flex-row md:justify-start">
              <div className="md:hidden">
                <img className="" alt="" src={Artboard} />
              </div>
              <p className={`${getThemeTextColor(theme.themeMode)} $`}>
                <p>
                  Machine learning is a branch of Artificial Intelligence (AI)
                  that involves the development of algorithms and statistical
                  models that enable computers to learn from and make
                  predictions or decisions without being explicitly programmed.
                  Machine learning is based on the idea that systems can learn
                  from data, identify patterns and make decisions with minimal
                  human intervention. There are three main types of machine
                  learning: supervised learning, unsupervised learning, and
                  reinforcement learning. Supervised learning is when a model is
                  trained on a labeled dataset, unsupervised learning is when a
                  model is trained on an unlabeled dataset, and reinforcement
                  lePython is a popular, high-level programming language for
                  general-purpose programming. It was created by Guido van
                  Rossum in 1991 and has a design philosophy that emphasizes
                  code readability, and a syntax that allows programmers to
                  express concepts in fewer lines of code than languages like
                  C++ or Java. Python is considered an easy-to-learn language
                  and has a large, active community which has developed a wide
                  range of libraries and frameworks for various tasks such as
                  machine learning, web development, and data analysis. Some of
                  the most popular libraries in Python include NumPy, Pandas,
                  Matplotlib, and TensorFlow. Python is also widely used in
                  scientific computing, data science, artificial intelligence,
                  and back-end web development.arning is when a model learns
                  from interacting with an environment. Machine learning is used
                  in a wide range of applications, such as natural language
                  processing, image recognition, self-driving cars, fraud
                  detection, and many others.
                </p>
                <br />
                <p>
                  Python is a popular, high-level programming language for
                  general-purpose programming. It was created by Guido van
                  Rossum in 1991 and has a design philosophy that emphasizes
                  code readability, and a syntax that allows programmers to
                  express concepts in fewer lines of code than languages like
                  C++ or Java. Python is considered an easy-to-learn language
                  and has a large, active community which has developed a wide
                  range of libraries and frameworks for various tasks such as
                  machine learning, web development, and data analysis. Some of
                  the most popular libraries in Python include NumPy, Pandas,
                  Matplotlib, and TensorFlow. Python is also widely used in
                  scientific computing, data science, artificial intelligence,
                  and back-end web development.
                </p>
              </p>
              <div className="hidden md:block min-w-[50%]">
              <a href="https://learn.myanalyticsschool.com/" target="_blank">
                <img className="" alt="" src={Artboard} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLAndPython;
