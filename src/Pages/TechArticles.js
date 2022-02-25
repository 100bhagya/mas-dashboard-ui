import React from "react";
import TopicBar from "../Components/TopicBar";

const TechArticles = () => {
  return (
    <div className="flex">
    
      <div className=" py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Tech Articles</div>
          <div className="text-slate-600 text-md">22 february ,2022</div>
        </div>

        <div className="flex items-center">
          <div className="lg:basis-1/2 md:basis-3/5 p-4">
            <p>
              Lörem ipsum mansskatt postfo rm, förutom g adin-rabatt, politet.
              Pys t til Lörem ipsum mansskatt postfo rm, förutom g rutom g
              adin-rabatt, politet. Pys t tili Lörem ipsum mansskatt postfo rm,
              förutom g adin-rabatt, politet. Pys t tili Lörem ipsum mansskatt
              postfo rm, förutom g adin-rabatt, politet. Pys t tilg Lörem ipsum
              mansskatt postfo rm, förutom g adin-rabatt, politet. Pys t til .
            </p>
            <div className="mt-3">
              <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8]">
                {" "}
                Click here to continue reading
              </button>
            </div>
          </div>
          <div className="md:basis-2/5 lg:basis-1/2">
            <img
              className="lg:w-1/2"
              alt=""
              src="https://thumbs.dreamstime.com/z/mobile-learning-abstract-concept-vector-illustration-m-application-portable-device-educational-trend-assignment-individual-plan-196329472.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechArticles;
