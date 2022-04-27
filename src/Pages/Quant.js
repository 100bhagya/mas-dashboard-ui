import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";

const RatingCard = ({ serialNo, Title }) => {
  var token = localStorage.getItem("access");
  var data = localStorage.getItem("login-info");
  var loginInfo = JSON.parse(data);
  const [studentId, setStudentId] = useState(loginInfo.id);
  const [chapter, setChapter] = useState();
  const [rating, setRating] = useState();

  const ratingChanged = async (newRating) => {
    console.log(newRating, Title, token);
    setChapter(Title);
    setRating(newRating);
    let item = {
      category: "Quant",
      chapter: chapter,
      studentId,
      rating: rating,
      deleted: "false",
    };
    var response = await fetch("http://localhost:8081/api/task/task-rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(item),
    });

    let result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div className="rounded-xl shadow-xl flex w-full items-center h-20">
        <div className="w-1/5 bg-[#EDF3FF] h-full rounded-l-lg">
          <div className="text-2xl text-[#2255B8] flex items-center justify-center mt-6">
            {" "}
            {serialNo}{" "}
          </div>
        </div>
        <div className="w-[38%] pl-6 flex items-center">{Title}</div>
        <StarsRating
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#1b70c4"}
        />
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
        <div className="mt-2 flex gap-8 pt-10 lg:flex-row md:flex-col">
          <p className="pr-8 basis-1/2 ">
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
              <img src={Artboard1} alt="" className="mt-10" />
              <div className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
            <div className="basis-1/2 shadow-xl rounded-xl px-4">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Test Mode
              </span>
              <img src={Artboard2} alt="" />
              <div className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl text-sky-800 mt-20">Priority</div>
        <div className="text-[#898989] text-md w-full mt-2">
          Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
          Lunchdisco
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 justify-between mt-12">
          <RatingCard serialNo={1} Title="Probability" />
          <RatingCard serialNo={2} Title="Statistics" />
          <RatingCard serialNo={3} Title="P & C" />
          <RatingCard serialNo={4} Title="Probability" />
          <RatingCard serialNo={5} Title="Probability" />
          <RatingCard serialNo={6} Title="Probability" />
          <RatingCard serialNo={7} Title="Probability" />
          <RatingCard serialNo={8} Title="Probability" />
          <RatingCard serialNo={9} Title="Probability" />
        </div>
      </div>
    </div>
  );
};

export default Quant;
