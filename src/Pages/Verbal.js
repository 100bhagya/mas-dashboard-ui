import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { API_BASE_URL } from "../data/consts";

const RatingCard = ({ serialNo, Title, currentChapter }) => {
  const { loginInfo } = useContext(AuthContext);
  var token = loginInfo.accessToken;
  // var token = localStorage.getItem("access");
  // var data = localStorage.getItem("login-info");
  // var loginInfo = JSON.parse(data);
  const studentId = loginInfo.id;

  const [rating, setRating] = useState(
    currentChapter.length > 0 ? currentChapter[0].rating : null
  );

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    let item = {
      category: "Verbal",
      chapter: Title,
      studentId,
      rating: newRating,
      deleted: "false",
    };

    if (currentChapter.length === 0) {
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
      currentChapter.push(item);
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

const Verbal = () => {
  const { loginInfo } = useContext(AuthContext);
  var token = loginInfo.accessToken;
  // var token = localStorage.getItem("access");
  // var data = localStorage.getItem("login-info");
  // var loginInfo = JSON.parse(data);
  const studentId = loginInfo.id;
  const [ratingResponse, setRatingResponse] = useState([]);

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/api/task/task-rating?studentId=${studentId}&category=Verbal`,
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
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Verbal Preparation</div>
        </div>
        <div className="mt-2 flex gap-8 pt-10 lg:flex-row md:flex-col">
          <p className="pr-8 basis-1/2 ">
            Verbal aptitude refers to a person's ability to understand and
            respond to spoken information. Aptitude tests are used to assess an
            individual's skills or ability. These tests are intended to evaluate
            the person's natural abilities or talents rather than learned
            skills. To prepare for Verbal, stick to the rule of – concepts first
            and practice later. Study English grammar to understand the
            concepts. Then practice a number of sample questions of different
            kinds to gain confidence, speed and accuracy. Develop the habit of
            reading from early stages.
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
                Practice Mode
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
                Title="Synonyms/Antonyms"
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

          {ratingResponse.status === 500 && (
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
                Title="Synonyms/Antonyms"
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
  );
};

export default Verbal;
