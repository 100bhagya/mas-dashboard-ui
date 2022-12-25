import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 2.png";
import Artboard2 from "../images/Test 2.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";
import TableContent from "../Components/TableContent";

const CaseStudy = (isOpen) => {
  const [rating, setRating] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/task/task-rating?category=GD`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.loginInfo.accessToken,
      },
    })
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
      studentId: user.loginInfo.id,
      rating: newRating,
      deleted: "false",
    };

    if (rating === undefined) {
      var response = await fetch(`${API_BASE_URL}/api/task/task-rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
        },
        body: JSON.stringify(item),
      });

      let result = await response.json();
    } else {
      var updateresponse = await fetch(`${API_BASE_URL}/api/task/task-rating`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
        },
        body: JSON.stringify(item),
      });
      let result = await updateresponse.json();
    }
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div className="flex flex-col gap-6 md:gap-12 p-2 md:p-8">
          <div className="pb-4 border-b-2 border-[#2255B8]">
            <div className="text-3xl text-sky-800 p-2">Case Study</div>
          </div>
          <div className="flex mt-6 gap-8 md:gap-12">
            <p className="w-[50%] hidden md:block">
              LR: Two kinds of logical reasoning are often distinguished in
              addition to formal deduction: induction and abduction. Given a
              precondition or premise, a conclusion or logical consequence and a
              rule or material conditional that implies the conclusion given the
              precondition, one can explain the following.
              <br />
              <br />
              DI: Data analysis and interpretation is the process of assigning
              meaning to the collected information and determining the
              conclusions, significance, and implications of the findings.
            </p>

            <div className="basis-1/2 shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Practice Mode
              </span>
              <img src={Artboard1} className="w-48" />
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
            <div className="basis-1/2 shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Test Mode
              </span>
              <img src={Artboard2} className="w-48" />
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-3xl text-sky-800">Case Study Practice</div>
            <div className="text-[#898989] text-md">
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
              Lunchdisco
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TableContent name={"buddy"} />
              <div className="flex flex-col gap-4">
                <TableContent name={"buddy1"} />
                <div className="bg-white text-center justify-center shadow-2xl flex flex-col items-center">
                  <div className="text-2xl font-semibold">Self Evaluation</div>
                  <div className="text-center">
                    Lörem ipsum mansskatt postform, förutom genusbudgetering
                    pretrede
                  </div>
                  <StarsRating
                    value={rating}
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    color2={"#1b70c4"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
