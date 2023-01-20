import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";
import axios from "axios";

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
      category: "Verbal",
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
    axios
      .get(`${API_BASE_URL}/api/task/task-rating?category=Verbal`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
        },
      })
      .then((res) => {
        setRatingResponse(res.data);
      })
      .catch((err) => console.log(err));
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
              Verbal aptitude refers to a person's ability to understand and
              respond to spoken information. Aptitude tests are used to assess
              an individual's skills or ability. These tests are intended to
              evaluate the person's natural abilities or talents rather than
              learned skills. To prepare for Verbal, stick to the rule of –
              concepts first and practice later. Study English grammar to
              understand the concepts. Then practice a number of sample
              questions of different kinds to gain confidence, speed and
              accuracy. Develop the habit of reading from early stages.
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
          <div className="flex w-full justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 justify-between mt-12">
              {ratingResponse.length > 0 && (
                <>
                  <RatingCard
                    serialNo={1}
                    Title="Reading Comprehension"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Reading Comprehension";
                    })}
                  />
                  <RatingCard
                    serialNo={2}
                    Title="Sentence Correction"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Sentence Correction";
                    })}
                  />
                  <RatingCard
                    serialNo={3}
                    Title="Synonyms / Antonyms"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Synonyms/Antonyms";
                    })}
                  />
                  <RatingCard
                    serialNo={4}
                    Title="Parajumbles"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Parajumbles";
                    })}
                  />
                  <RatingCard
                    serialNo={5}
                    Title="Summary Completion"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Summary Completion";
                    })}
                  />
                  <RatingCard
                    serialNo={6}
                    Title="Sentence Formation"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Sentence Formation";
                    })}
                  />
                  <RatingCard
                    serialNo={7}
                    Title="Idioms and Phrases"
                    currentChapter={ratingResponse.filter((el) => {
                      return el.chapter === "Idioms and Phrases";
                    })}
                  />
                </>
              )}
              {ratingResponse.length === 0 && (
                <>
                  <RatingCard
                    serialNo={1}
                    Title="Reading Comprehension"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={2}
                    Title="Sentence Correction"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={3}
                    Title="Synonyms / Antonyms"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={4}
                    Title="Parajumbles"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={5}
                    Title="Summary Completion"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={6}
                    Title="Sentence Formation"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={7}
                    Title="Idioms and Phrases"
                    currentChapter={[]}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verbal;
