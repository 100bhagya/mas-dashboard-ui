import React from "react";
import TopicBar from "../Components/TopicBar";

const Tag = () => {
  return (
    <>
      <div className="w-fit  bg-blue-600 flex items-center ">
        <div className="triangle-right"></div>
        <span className="text-white px-1"> new </span>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="relative">
      <div className="rounded-xl shadow-xl flex w-full h-fit md:pr-1 top-0">
        <div className="w-1/5 bg-[#EDF3FF] py-2 rounded-l-lg justify-center items-center flex">
          <span className="text-2xl text-[#2255B8] flex items-center"> 1 </span>
        </div>
        <div className=" w-3/5 py-6 pl-6 flex items-center text-sm text-[#2255B8]">
          A man with medical condition and two pills
        </div>
        <div className="relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 relative top-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <span className="relative top-16"> 1024</span>
      </div>
      <div className="top-2 absolute -right-1">
        <Tag />
      </div>
    </div>
  );
};
const Quizes = () => {
  return (
    <div className="flex">
      <TopicBar />
      <div className=" py-10 md:px-20 px-10 flex-grow">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Tech Articles</div>
          <div className="text-slate-600 text-md">22 february ,2022</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-center h-fit mt-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default Quizes;
