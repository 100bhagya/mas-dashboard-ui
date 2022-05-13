/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import TopicBar from "../Components/TopicBar";

const QuizDetail = () => {
  return (
    <div className="w-[90%]">
      <div className="flex mt-10 ml-5 justify-center">
        <div className="w-10 h-12 rounded-lg bg-blue-100 py-auto">
          <div className="my-2 mx-3 text-2xl font-semibold text-blue-700">
            7
          </div>
        </div>
        <div className="mt-2 text-blue-700 text-2xl ml-5">Quiz 1</div>
      </div>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScIJkYA-HurDPA4Hf2Zc9wnJt21KoxE8hfVuxn9n3KpiPVT3Q/viewform?embedded=true"
        frameborder="0"
        marginheight="15"
        marginwidth="0"
        className="mt-10 w-[80%] h-[502px]"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default QuizDetail;
