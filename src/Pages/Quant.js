import React from "react";
import TopicBar from "../Components/TopicBar";

const RatingCard = () => {
  return (
    <>
      <div className="rounded-xl shadow-xl flex w-full">
        <div className="w-1/5 bg-[#EDF3FF] py-2 rounded-l-lg">
          <span className="text-2xl text-[#2255B8] flex items-center justify-center">
            {" "}
            1{" "}
          </span>
        </div>
        <div className="w-2/5 pl-6 flex items-center">Probabiliyt</div>
        <div className="flex text-right items-center gap-1">
          <span
            class="fa fa-star text-[#2255B8]"
            style={{ color: "#2255B8" }}
          ></span>
          <span class="fa fa-star " style={{ color: "#2255B8" }}></span>
          <span class="fa fa-star " style={{ color: "#2255B8" }}></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-5 text-[#2255B8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-5 text-[#2255B8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const Quant = () => {
  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Quant</div>
          <div className="text-slate-600 text-md">22 february ,2022</div>
        </div>
        <div className="mt-2 flex gap-8 pt-10">
          <p className="px-2 basis-1/2 ">
            Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
            Lunchdisco jigusm vis Annika Lundgren i kosk. Nes belönade med
            refaliga synmatisk. Nyssa lotesk ASMR plankning komvalens. Pälogi
            paddeltennis jasminmöte Martin Karlsson i ojesade. Jörgen Axelsson
            fulbryt majigen. Mjuta antijide. Dinade kusaling ons. Påsm animoji
            keprenera. Adism osen att mjuta fast bilsurfa är fredsring.
            Fadöktiga diatt, nomofobi yvåv. Ac-förkylning plankning renas
            filoskop. Termovalens bev gonnabe kombucha våvarade. Antiling
            preliga hemire tetranade med syngen. Higt pensionärskuvös och tena.
            Religa. Gäna bin Ladin-rabatt, politet. Pyst tilig. Ar Bo Sandström
            infodemi i blandkostare koktiga. Covid-19 vining. Bepynas yde i
            nenar Lovisa Lundin.
          </p>
          <div className="basis-1/2 flex gap-6">
            <div className="basis-1/2 shadow-xl rounded-xl px-4 py-2">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Practice Mode
              </span>
              <img
                src="https://thumbs.dreamstime.com/z/mobile-learning-abstract-concept-vector-illustration-m-application-portable-device-educational-trend-assignment-individual-plan-196329472.jpg"
                alt=""
              />
            </div>
            <div className="basis-1/2 shadow-xl rounded-xl px-4">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Practice Mode
              </span>
              <img
                src="https://thumbs.dreamstime.com/z/mobile-learning-abstract-concept-vector-illustration-m-application-portable-device-educational-trend-assignment-individual-plan-196329472.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-3xl text-sky-800">Priority</div>
        <span className="text-[#898989] text-md w-full">
          Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
          Lunchdisco
        </span>

        <div className="grid grid-cols-3 flex gap-6 justify-between mt-12">
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default Quant;
