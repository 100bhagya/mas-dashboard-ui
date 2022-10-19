import React, { useEffect, useState } from "react";
import TableContent from "../Components/TableContent";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 2.png";
import Artboard2 from "../images/Test 2.png";
import StarsRating from "stars-rating";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { API_BASE_URL } from "../data/consts";

const GroupDiscussion = () => {
  const { loginInfo } = useContext(AuthContext);
  var token = loginInfo.accessToken;
  // var token = localStorage.getItem("access");
  // var data = localStorage.getItem("login-info");
  // var loginInfo = JSON.parse(data);
  const studentId = loginInfo.id;
  const [rating, setRating] = useState();

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/api/task/task-rating?studentId=${studentId}&category=GD`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setRating(result[0].rating);
      });
  }, []);

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    let item = {
      category: "GD",
      chapter: null,
      studentId,
      rating: newRating,
      deleted: "false",
    };

    if (rating === undefined) {
      var response = await fetch(`${API_BASE_URL}/api/task/task-rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(item),
      });

      let result = await response.json();
    } else {
      var updateresponse = await fetch(
        `${API_BASE_URL}/api/task/task-rating`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify(item),
        }
      );
      let result = await updateresponse.json();
    }
  };
  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Group Discussion</div>
        </div>
        <div className="mt-2 flex gap-8 pt-10 lg:flex-row md:flex-col">
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
              <img src={Artboard1} alt="" className="mt-3" />

              <div className="my-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </div>
            </div>
            <div className="basis-1/2 shadow-xl rounded-xl px-4">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Test Mode
              </span>
              <img src={Artboard2} alt="" className="mt-12" />

              <div className="my-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl text-sky-800 mt-12">Upcoming GD</div>
        <div className="text-[#898989] text-md w-full mt-4">
          Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
          Lunchdisco
        </div>

        <div className="rounded-lg flex shadow-xl py-6 mt-8 px-6 justify-between w-4/5">
          <div className="text-lg text-[#2C4251]">
            Date:
            <span className="text-sm text-gray-400 pl-4"> 22/09/2023</span>
          </div>
          <div className="text-lg text-[#2C4251]">
            Time:
            <span className="text-sm text-gray-400 pl-4"> 3 PM</span>
          </div>
          <div className="text-lg text-[#2C4251]">
            Link:
            <span className="text-sm text-gray-400 pl-4"> www.google.com </span>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <div className="text-3xl text-sky-800 mt-12">Self Evaluation</div>
            <div className="text-[#898989] text-md w-full mt-4">
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
            </div>
          </div>
          {console.log(rating)}
          <StarsRating
            value={rating}
            count={5}
            onChange={ratingChanged}
            size={50}
            color2={"#1b70c4"}
            className="relative top-16 left-12"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussion;
