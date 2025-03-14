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
  getThemeWhiteDarkBGColor,
} from "../data/themesData";
import toast, { Toaster } from 'react-hot-toast';
const RatingCard = ({ serialNo, Title, currentChapter }) => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const toastMessage = (message) => toast(message);
  const [rating, setRating] = useState(
    currentChapter && currentChapter.length > 0
      ? currentChapter[0].rating
      : null
  );

  const ratingChanged = async (newRating) => {
    console.log(newRating);
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
      toastMessage(`Rating submitted successfully for ${item.chapter} `);


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
      toastMessage(`Rating updated successfully for ${item.chapter} `);
    }
  };

  return (
    <>
      <div className="flex items-center w-full h-20 shadow-xl rounded-xl">
        <div
          className={`w-1/5 ${getThemeBackgroundColor(
            theme.themeMode
          )} h-full rounded-l-lg`}
        >
          <div
            className={`text-2xl ${getThemeTextSecondaryColor(
              theme.themeMode
            )} flex items-center justify-center mt-6`}
          >
            {" "}
            {serialNo}{" "}
          </div>
        </div>
        <div
          className={`w-2/5 pl-6 flex items-center ${getThemeTextColor(
            theme.themeMode
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
  const theme = useSelector((state) => state.theme);
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
            theme.themeMode
          )}`}
        >
          <div
            className={`pb-4 border-b-2 ${getThemeBorderColor(
              theme.themeMode
            )}`}
          >
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )} p-2`}
            >
              Verbal
            </div>
          </div>
          <div className="flex gap-8 mt-6 md:gap-12">
            <p
              className={`w-[80%] h-[400px] text-ellipsis hidden md:block ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )} ${getThemeTextColor(theme.themeMode)} px-4 py-2 rounded-xl`}
            >
              VARC stands for Verbal Ability and Reading Comprehension. It is a
              section of aptitude tests that assesses a person's ability to
              understand and analyze written text, as well as their ability to
              understand and use the English language effectively. The Verbal
              Ability section of the VARC typically includes questions on
              grammar, vocabulary, sentence construction, and comprehension of
              written text. The Reading Comprehension section typically includes
              passages of written text followed by questions designed to test
              the person's understanding of the text. In placement tests, the
              VARC section is designed to test a candidate's ability to
              understand, analyze, and interpret written text, which is
              considered as an important skill for managers and leaders.
            </p>

            <div
              className={`basis-1/2 max-h-[400px] shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )}`}
            >
              <span
                className={`text-center block ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} text-lg`}
              >
                Practice Mode
              </span>
              <img src={Artboard1} className="w-48" />
              {/* <div className={`${getThemeLightTextColor(theme.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div> */}
            </div>
            <div
              className={`basis-1/2 max-h-[400px] shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )}`}
            >
              <span
                className={`text-center block ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} text-lg`}
              >
                Test Mode
              </span>
              <img src={Artboard2} className="w-48" />
              {/* <div className={`${getThemeLightTextColor(theme.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div> */}
            </div>
          </div>
          <div>
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              Priority
            </div>
            {/* <div
              className={`${getThemeLightTextColor(theme.themeMode)} text-md`}
            >
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
              Lunchdisco
            </div> */}
          </div>
          <div className="flex justify-center w-full">
            <div className="grid justify-between gap-6 mt-12 lg:grid-cols-3 md:grid-cols-1">
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
      <Toaster />
    </div>
    
  );
};

export default Verbal;
