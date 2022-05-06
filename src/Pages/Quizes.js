import React from "react";
import TopicBar from "../Components/TopicBar";
import Data from "../data/QuizData";
import { Link } from "react-router-dom";

const Quizes = () => {
  return (
    <div className="flex">
      <TopicBar />
      <div className=" py-10 md:px-20 px-10 flex-grow">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Quizzes</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-center h-fit mt-8">
          {Data.map((item) => {
            return (
              <div className="relative">
                <Link to="/quizdetail">
                  <div className="rounded-xl shadow-xl flex w-full h-fit md:pr-1 top-0">
                    <div className="w-1/5 bg-[#EDF3FF] py-2 rounded-l-lg justify-center items-center flex">
                      <span className="text-2xl text-[#2255B8] flex items-center">
                        {" "}
                        {item.id}{" "}
                      </span>
                    </div>
                    <div className=" w-3/5 py-6 pl-6 flex items-center text-sm text-[#2255B8]">
                      {item.quiz}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
