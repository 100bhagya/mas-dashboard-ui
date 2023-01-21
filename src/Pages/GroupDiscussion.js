import React, { useEffect, useState } from "react";
import TopicBar from "../Components/TopicBar";
import Artboard1 from "../images/Practice 2.png";
import Artboard2 from "../images/Test 2.png";
import StarsRating from "stars-rating";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../data/consts";
import Navbar from "../Components/Navbar";
import {
  getThemeBackgroundColor,
  getThemeBLightBackgroundColor,
  getThemeBorderColor,
  getThemeLightTextColor,
  getThemeTextColor,
  getThemeTextPrimaryColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
const GroupDiscussion = (isOpen) => {
  const [rating, setRating] = useState();
  const user = useSelector((state) => state.user);
  const app = useSelector((state) => state.app);
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
              Group Discussion
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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div
                className={`text-3xl text-sky-800 ${getThemeTextSecondaryColor(
                  app.themeMode
                )}`}
              >
                Upcoming GD
              </div>
              <div
                className={`${getThemeLightTextColor(app.themeMode)} text-md`}
              >
                Lörem ipsum mansskatt postform, förutom genusbudgetering
                pretrede. Lunchdisco
              </div>
            </div>
            <div
              className={`rounded-lg flex shadow-xl py-6 px-6 justify-between md:w-[600px] ${getThemeBackgroundColor(
                app.themeMode
              )}`}
            >
              <div className={`text-lg ${getThemeTextColor(app.themeMode)}`}>
                Date:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    app.themeMode
                  )} pl-4`}
                >
                  {" "}
                  22/09/2023
                </span>
              </div>
              <div className={`text-lg ${getThemeTextColor(app.themeMode)}`}>
                Time:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    app.themeMode
                  )} pl-4`}
                >
                  3 PM
                </span>
              </div>
              <div className={`text-lg ${getThemeTextColor(app.themeMode)}`}>
                Link:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    app.themeMode
                  )} pl-4`}
                >
                  www.google.com
                </span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:flex-row items-center gap-4 shadow-xl px-4 py-2 rounded-xl ${getThemeBackgroundColor(
              app.themeMode
            )}`}
          >
            <div className="flex flex-col gap-2">
              <div
                className={`${getThemeTextColor(
                  app.themeMode
                )} text-2xl font-semibold`}
              >
                Self Evaluation
              </div>
              <div
                className={`${getThemeLightTextColor(
                  app.themeMode
                )} text-center`}
              >
                Lörem ipsum mansskatt postform, förutom genusbudgetering
                pretrede
              </div>
            </div>
            <StarsRating
              value={rating}
              count={5}
              onChange={ratingChanged}
              size={50}
              color2={"#1b70c4"}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussion;
