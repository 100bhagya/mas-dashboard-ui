/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import { useNavigate } from "react-router-dom";

const QuizDetail = () => {
  const result = localStorage.getItem("username");
  const navigate = useNavigate();

  return (
    <div className="flex">
      <TopicBar />
      <div className="">
        <div className="flex mt-10 ml-5">
          <div className="w-10 h-12 rounded-lg bg-blue-100 py-auto">
            <div className="my-2 mx-3 text-2xl font-semibold text-blue-700">
              7
            </div>
          </div>
          <div className="mt-2 text-blue-700 text-2xl ml-5">
            A man with medical condition and two pills
          </div>
        </div>
        <div className="w-[50%] ml-20 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          quasi? Sapiente, saepe voluptatem, distinctio numquam recusandae nemo,
          expedita soluta quae tempora eligendi maiores magni beatae doloremque
          ad labore vitae consequatur debitis cum voluptates architecto.
          Corrupti, hic similique. Obcaecati, vitae reiciendis. ad labore vitae
          consequatur debitis cum voluptates architecto. Corrupti, hic
          similique. Obcaecati, vitae reiciendis.
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
    </div>
  );
};

export default QuizDetail;
