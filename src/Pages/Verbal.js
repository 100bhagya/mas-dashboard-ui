import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 1.png";
import Artboard2 from "../images/Testtttttt 1.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";
import axios from "axios";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
const RatingCard = ({ serialNo, Title, currentChapter }) => {
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
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
        <div
          className={`w-1/5 ${getThemeBackgroundColor(
            app.themeMode
          )} h-full rounded-l-lg`}
        >
          <div
            className={`text-2xl ${getThemeTextSecondaryColor(
              app.themeMode
            )} flex items-center justify-center mt-6`}
          >
            {" "}
            {serialNo}{" "}
          </div>
        </div>
        <div
          className={`w-2/5 pl-6 flex items-center ${getThemeTextColor(
            app.themeMode
          )}`}
        >
          {Title}
        </div>
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
  const app = useSelector((state) => state.app);
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
        <div
          className={`flex flex-col gap-6 md:gap-12 p-2 md:p-8 ${getThemeBLightBackgroundColor(
            app.themeMode
          )}`}
        >
          <div
            className={`pb-4 border-b-2 ${getThemeBorderColor(app.themeMode)}`}
          >
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                app.themeMode
              )} p-2`}
            >
              Verbal
            </div>
          </div>
          <div className="flex mt-6 gap-8 md:gap-12">
            <p
              className={`w-[50%] hidden md:block ${getThemeBackgroundColor(
                app.themeMode
              )} ${getThemeTextColor(app.themeMode)} px-4 py-2 rounded-xl`}
            >
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

            <div
              className={`basis-1/2 shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center ${getThemeBackgroundColor(
                app.themeMode
              )}`}
            >
              <span
                className={`text-center block ${getThemeTextSecondaryColor(
                  app.themeMode
                )} text-lg`}
              >
                Practice Mode
              </span>
              <img src={Artboard1} className="w-48" />
              <div className={`${getThemeLightTextColor(app.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
            <div
              className={`basis-1/2 shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center ${getThemeBackgroundColor(
                app.themeMode
              )}`}
            >
              <span
                className={`text-center block ${getThemeTextSecondaryColor(
                  app.themeMode
                )} text-lg`}
              >
                Test Mode
              </span>
              <img src={Artboard2} className="w-48" />
              <div className={`${getThemeLightTextColor(app.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div>
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                app.themeMode
              )}`}
            >
              Priority
            </div>
            <div className={`${getThemeLightTextColor(app.themeMode)} text-md`}>
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
