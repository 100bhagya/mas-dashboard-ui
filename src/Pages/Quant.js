import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";

const RatingCard = ({ serialNo, Title, currentChapter }) => {
  var token = localStorage.getItem("access");
  var data = localStorage.getItem("login-info");
  var loginInfo = JSON.parse(data);
  const studentId = loginInfo.id;

  const [rating, setRating] = useState(
    currentChapter.length > 0 ? currentChapter[0].rating : null
  );

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    let item = {
      category: "Quant",
      chapter: Title,
      studentId,
      rating: newRating,
      deleted: "false",
    };

    if (currentChapter.length === 0) {
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
      currentChapter.push(item);
    } else {
      var updateresponse = await fetch(
        "http://localhost:8081/api/task/task-rating",
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
          value={rating}
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
  var token = localStorage.getItem("access");
  var data = localStorage.getItem("login-info");
  var loginInfo = JSON.parse(data);
  const studentId = loginInfo.id;
  const [ratingResponse, setRatingResponse] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8081/api/task/task-rating?studentId=${studentId}&category=Quant`,
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
        setRatingResponse(result);
      });
  }, []);

  return (
    <div className="flex-grow py-10 md:px-20 px-10">
      <div className=" pb-4 border-b-2 border-[#2255B8]">
        <div className="text-3xl text-sky-800">Quant</div>
      </div>
      <div className="mt-2 flex gap-8 pt-10 lg:flex-row md:flex-col">
        <p className="pr-8 basis-1/2 ">
          Quantitative Aptitude is that one integral, and inseparable part of
          aptitude exams in India. Quantitative aptitude tests the number
          handling techniques and problem-solving skills of an individual. It is
          an important requisite in clearing the preliminary stages of several
          exams, especially the Management courses. The whole purpose of
          Quantitative Aptitude is to evaluate the thinking process along with
          the analytical skills of the aspirants. It is not just the ability to
          solve numerical problems, the candidates require a lot of logical
          thinking to crack Quantitative Aptitude
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
        {console.log(ratingResponse)}
        {ratingResponse.length > 0 && (
          <>
            <RatingCard
              serialNo={1}
              Title="Probability"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Probability";
              })}
            />
            <RatingCard
              serialNo={2}
              Title="Statistics"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Statistics";
              })}
            />
            <RatingCard
              serialNo={3}
              Title="P & C"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "P & C";
              })}
            />
            <RatingCard
              serialNo={4}
              Title="Profit & Loss"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Profit & Loss";
              })}
            />
            <RatingCard
              serialNo={5}
              Title="Simple & Compound Interest"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Simple & Compound Interest";
              })}
            />
            <RatingCard
              serialNo={6}
              Title="Time & Work"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time & Work";
              })}
            />
            <RatingCard
              serialNo={7}
              Title="Average, Mixture & Allegations"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Average, Mixture & Allegations";
              })}
            />
            <RatingCard
              serialNo={8}
              Title="Time, Speed & Distance"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={9}
              Title="Geometry"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={10}
              Title="Coordinate Geometry"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={11}
              Title="Trigonometry"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={12}
              Title="Numbers"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={13}
              Title="Simple, Special & Quadratic Equation"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
            <RatingCard
              serialNo={14}
              Title="Sequence & Series"
              currentChapter={ratingResponse.filter((el) => {
                return el.chapter === "Time, Speed & Distance";
              })}
            />
          </>
        )}
        {ratingResponse.status === 500 && (
          <>
            <RatingCard serialNo={1} Title="Cubes" currentChapter={[]} />
            <RatingCard serialNo={2} Title="Venn Diagram" currentChapter={[]} />
            <RatingCard
              serialNo={3}
              Title="Linear & Circular Arrangement"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={4}
              Title="Line, Bar, Column, Pie Charts, Tables"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={5}
              Title="Games & Tournament"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={6}
              Title="Blood Relations"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={7}
              Title="Calendars & Clocks"
              currentChapter={[]}
            />
            <RatingCard serialNo={8} Title="Syllogism" currentChapter={[]} />
            <RatingCard
              serialNo={9}
              Title="Number and Letter Series"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={10}
              Title="Non Verbal Reasoning"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={11}
              Title="Trigonometry"
              currentChapter={[]}
            />
            <RatingCard serialNo={12} Title="Numbers" currentChapter={[]} />
            <RatingCard
              serialNo={13}
              Title="Simple, Special & Quadratic Equation"
              currentChapter={[]}
            />
            <RatingCard
              serialNo={14}
              Title="Sequence & Series"
              currentChapter={[]}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quant;
