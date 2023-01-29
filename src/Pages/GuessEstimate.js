import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 2.png";
import Artboard2 from "../images/Test 2.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";
import TableContent from "../Components/TableContent";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextSecondaryColor,
  getThemeWhiteDarkBGColor,
} from "../data/themesData";

const GuessEstimate = (isOpen) => {
  const [rating, setRating] = useState();
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/task/task-rating?category=CaseStudy`, {
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
      category: "CaseStudy",
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
              Guess Estimate
            </div>
          </div>
          <div className="flex mt-6 gap-8 md:gap-12">
            <p
              className={`w-[80%] hidden md:block ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )} ${getThemeTextColor(theme.themeMode)} px-4 py-2 rounded-xl`}
            >
              <p>
                Guesstimate is a method of solving a problem or making an
                estimate by using rough and approximate calculations, rather
                than precise and exact ones. The purpose of guesstimate is to
                come up with a quick, rough estimate or a solution that is good
                enough for the given situation.
              </p>
              <p>
                This method is often used in business, finance, and engineering
                to quickly estimate costs, revenues, or other important metrics.
              </p>
              <p>Guesstimate problems typically involve:</p>
              <p>
                <ul className="ml-4 list-disc">
                  <li>
                    estimating a quantity without having all the information.
                  </li>
                  <li>
                    using assumptions and simplifications to make the problem
                    more manageable.
                  </li>
                  <li>
                    using rough calculations and common sense to come up with a
                    quick answer.
                  </li>
                </ul>
              </p>
              <p>
                The key to solving guesstimate problems is to use a logical and
                structured approach and to clearly state your assumptions and
                simplifications. It's important to remember that the goal is not
                to come up with a precise answer, but to come up with an
                estimate that is good enough for the given situation.
                Guesstimate questions are also common in aptitude tests, such as
                those used for job interviews, where they aim to assess the
                candidate's ability to think on their feet and solve problems
                with limited information.
              </p>
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
              className={`basis-1/2  max-h-[400px] shadow-xl rounded-xl p-6 flex flex-col gap-6 justify-center items-center ${getThemeWhiteDarkBGColor(
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
          <div className="flex flex-col gap-6">
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              Guess Estimate Practice
            </div>
            <div
              className={`${getThemeLightTextColor(theme.themeMode)} text-md`}
            >
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
              Lunchdisco
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TableContent name={"buddy"} />
              <div className="flex flex-col gap-4">
                <TableContent name={"buddy1"} />
                <div
                  className={`${getThemeBackgroundColor(
                    theme.themeMode
                  )} text-center justify-center rounded-xl px-2 py-1 shadow-2xl flex flex-col items-center`}
                >
                  <div
                    className={`${getThemeTextColor(
                      theme.themeMode
                    )} text-2xl font-semibold`}
                  >
                    Self Evaluation
                  </div>
                  <div
                    className={`${getThemeLightTextColor(
                      theme.themeMode
                    )} text-center`}
                  >
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

export default GuessEstimate;
