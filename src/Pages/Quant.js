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

const RatingCard = ({ serialNo, Title, currentChapter }) => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const [rating, setRating] = useState(
    currentChapter && currentChapter.length > 0
      ? currentChapter[0].rating
      : null
  );

  const ratingChanged = async (newRating) => {
    setRating(newRating);
    let item = {
      category: "Quant",
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
const Quant = (isOpen) => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const [ratingResponse, setRatingResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/task/task-rating?category=Quant`, {
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
              Quant
            </div>
          </div>
          <div className="flex mt-6 gap-8 md:gap-12">
            <p
              className={`w-[80%] h-[210px] text-ellipsis hidden md:block ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )} ${getThemeTextColor(theme.themeMode)} px-4 py-2 rounded-xl`}
            >
              Quantitative aptitude is a branch of mathematics that focuses on
              problem-solving using numerical and quantitative methods. It is
              often used in aptitude tests, such as those used for college
              admissions or job applications, to assess a person's ability to
              reason and solve mathematical problems. The topics covered in
              quantitative aptitude include arithmetic, algebra, geometry, and
              data interpretation.
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
              <div className={`${getThemeLightTextColor(theme.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
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
              <div className={`${getThemeLightTextColor(theme.themeMode)}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
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
            <div
              className={`${getThemeLightTextColor(theme.themeMode)} text-md`}
            >
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
              {ratingResponse.length === 0 && (
                <>
                  <RatingCard
                    serialNo={1}
                    Title="Probability"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={2}
                    Title="Statistics"
                    currentChapter={[]}
                  />
                  <RatingCard serialNo={3} Title="P & C" currentChapter={[]} />
                  <RatingCard
                    serialNo={4}
                    Title="Profit & Loss"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={5}
                    Title="Simple & Compound Interest"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={6}
                    Title="Time & Work"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={7}
                    Title="Average, Mixture & Allegations"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={8}
                    Title="Time, Speed & Distance"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={9}
                    Title="Geometry"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={10}
                    Title="Coordinate Geometry"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={11}
                    Title="Trigonometry"
                    currentChapter={[]}
                  />
                  <RatingCard
                    serialNo={12}
                    Title="Numbers"
                    currentChapter={[]}
                  />
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
        </div>
      </div>
    </div>
  );
};

export default Quant;
