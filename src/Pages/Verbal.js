import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";

const RatingCard = ({ serialNo, Title, currentChapter }) => {
  const user = useSelector((state) => state.user);
  const [rating, setRating] = useState(
    currentChapter && currentChapter.length > 0
      ? currentChapter[0].rating
      : null
  );

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    let item = {
      category: "LRDI",
      chapter: Title,
      studentId: user.loginInfo.id,
      rating: newRating,
      deleted: "false",
    };

    if (currentChapter.length === 0) {
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
      currentChapter.push(item);
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
    <>
      <div className="rounded-xl shadow-xl flex w-full items-center h-20">
        <div className="w-1/5 bg-[#EDF3FF] h-full rounded-l-lg">
          <div className="text-2xl text-[#2255B8] flex items-center justify-center mt-6">
            {" "}
            {serialNo}{" "}
          </div>
        </div>
        <div className="w-2/5 pl-6 flex items-center">{Title}</div>

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
const Verbal = (isOpen) => {
  const user = useSelector((state) => state.user);
  const [ratingResponse, setRatingResponse] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/task/task-rating?category=LRDI`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.loginInfo.accessTokenoken,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setRatingResponse(result);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="hidden md:block">
          <TopicBar value={(isOpen = true)} />
        </div>
        <div className="flex flex-col gap-6 p-2 md:p-8">
          <div className="pb-4 border-b-2 border-[#2255B8]">
            <div className="text-3xl text-sky-800 p-2">Verbal Preparation</div>
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
            <div className="basis-1/2 shadow-xl rounded-xl p-6">
              <span className="text-center block text-[#2255B8] text-lg">
                {" "}
                Practice Mode
              </span>
              <img src={Artboard1} alt="" className="mt-10" />
              <div className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
            <div className="basis-1/2 shadow-xl rounded-xl p-6">
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
          <div>
            <div className="text-3xl text-sky-800">Priority</div>
            <div className="text-[#898989] text-md w-full mt-2">
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
              Lunchdisco
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 justify-between mt-12">
            {ratingResponse.length > 0 && (
              <>
                <RatingCard
                  serialNo={1}
                  Title="Cubes"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Cubes";
                  })}
                />
                <RatingCard
                  serialNo={2}
                  Title="Venn Diagram"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Venn Diagram";
                  })}
                />
                <RatingCard
                  serialNo={3}
                  Title="Linear & Circular Arrangement"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Linear & Circular Arrangement";
                  })}
                />
                <RatingCard
                  serialNo={4}
                  Title="Line, Bar, Column, Pie Charts, Tables"
                  currentChapter={ratingResponse.filter((el) => {
                    return (
                      el.chapter === "Line, Bar, Column, Pie Charts, Tables"
                    );
                  })}
                />
                <RatingCard
                  serialNo={5}
                  Title="Games & Tournament"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Games & Tournament";
                  })}
                />
                <RatingCard
                  serialNo={6}
                  Title="Blood Relations"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Blood Relations";
                  })}
                />
                <RatingCard
                  serialNo={7}
                  Title="Calendars & Clocks"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Calendars & Clocks";
                  })}
                />
                <RatingCard
                  serialNo={8}
                  Title="Syllogism"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Syllogism";
                  })}
                />
                <RatingCard
                  serialNo={9}
                  Title="Number and Letter Series"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Number and Letter Series";
                  })}
                />
                <RatingCard
                  serialNo={10}
                  Title="Non Verbal Reasoning"
                  currentChapter={ratingResponse.filter((el) => {
                    return el.chapter === "Non Verbal Reasoning";
                  })}
                />
              </>
            )}
            {ratingResponse.status === 500 && (
              <>
                <RatingCard serialNo={1} Title="Cubes" currentChapter={[]} />
                <RatingCard
                  serialNo={2}
                  Title="Venn Diagram"
                  currentChapter={[]}
                />
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
                <RatingCard
                  serialNo={8}
                  Title="Syllogism"
                  currentChapter={[]}
                />
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verbal;
