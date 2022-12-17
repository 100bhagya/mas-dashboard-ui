/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Navbar from "../Components/Navbar";
import TopicBar from "../Components/TopicBar";

const QuizDetail = (isOpen) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 justify-center items-center">
            <div className="rounded-lg bg-blue-100 py-auto">
              <div className="flex justify-center items-center text-2xl font-semibold text-blue-700 p-2">
                7
              </div>
            </div>
            <div className="text-blue-700 text-2xl">Quiz 1</div>
          </div>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScIJkYA-HurDPA4Hf2Zc9wnJt21KoxE8hfVuxn9n3KpiPVT3Q/viewform?embedded=true"
            frameborder="0"
            marginheight="15"
            marginwidth="0"
            className="w-screen h-screen"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
