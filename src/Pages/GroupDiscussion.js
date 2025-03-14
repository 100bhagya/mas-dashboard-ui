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
  getThemeTextSecondaryColor,
  getThemeWhiteDarkBGColor,
} from "../data/themesData";
import toast, { Toaster } from 'react-hot-toast';
const GroupDiscussion = (isOpen) => {
  const [rating, setRating] = useState();
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const toastMessage = (message) => toast(message);

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
      }).then((res)=>{
        toastMessage(`Rating submitted successfully for ${item.category} `);

      }).catch((res)=>{
        toastMessage(`Something went wrong `);;

      })
    } else {
      var updateresponse = await fetch(`${API_BASE_URL}/api/task/task-rating`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.loginInfo.accessToken,
        },
        body: JSON.stringify(item),
      }).then((res)=>{
        toastMessage(`Rating updated successfully for ${item.category} `);

      }).catch((res)=>{
        toastMessage(`Something went wrong `);;

      })
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
              Group Discussion
            </div>
          </div>
          <div className="flex gap-8 mt-6 md:gap-12">
            <p
              className={`w-[80%] hidden md:block ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )} ${getThemeTextColor(theme.themeMode)} px-4 py-2 rounded-xl`}
            >
              <p>
                GD stands for Group Discussion. It is a method of evaluating a
                candidate's ability to communicate effectively and express their
                thoughts and ideas in a group setting. In a GD, a group of
                candidates are given a topic or a problem to discuss, and they
                are expected to express their opinions, ideas, and thoughts on
                the topic while also listening and responding to the ideas of
                others.
                <br />
                The purpose of GD is to assess a candidate's:
              </p>
              <p className="pl-4">
                <ul className="list-disc">
                  <li>
                    ability to express their thoughts and ideas clearly and
                    effectively
                  </li>
                  <li>
                    ability to listen to and respond to the ideas of others
                  </li>
                  <li>ability to work as part of a team</li>
                  <li>ability to think on their feet</li>
                  <li>ability to persuade others</li>
                  <li>
                    ability to handle pressure and stay calm in a group setting.
                  </li>
                </ul>
              </p>
              <p>
                GD is commonly used as a selection process in the placement
                process where it's used to evaluate the candidate's leadership,
                communication, and team-working skills.
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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div
                className={`text-3xl text-sky-800 ${getThemeTextSecondaryColor(
                  theme.themeMode
                )}`}
              >
                Upcoming GD
              </div>
              {/* <div
                className={`${getThemeLightTextColor(theme.themeMode)} text-md`}
              >
                Lörem ipsum mansskatt postform, förutom genusbudgetering
                pretrede. Lunchdisco
              </div> */}
            </div>
            <div
              className={`rounded-lg flex shadow-xl py-6 px-6 justify-between md:w-[600px] ${getThemeBackgroundColor(
                theme.themeMode
              )}`}
            >
              <div className={`text-lg ${getThemeTextColor(theme.themeMode)}`}>
                Date:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    theme.themeMode
                  )} pl-4`}
                >
                  {" "}
                  22/09/2023
                </span>
              </div>
              <div className={`text-lg ${getThemeTextColor(theme.themeMode)}`}>
                Time:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    theme.themeMode
                  )} pl-4`}
                >
                  3 PM
                </span>
              </div>
              <div className={`text-lg ${getThemeTextColor(theme.themeMode)}`}>
                Link:
                <span
                  className={`text-sm ${getThemeLightTextColor(
                    theme.themeMode
                  )} pl-4`}
                >
                  www.google.com
                </span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:flex-row items-center gap-4 shadow-xl px-4 py-2 rounded-xl ${getThemeBackgroundColor(
              theme.themeMode
            )}`}
          >
            <div className="flex flex-col gap-2">
              <div
                className={`${getThemeTextColor(
                  theme.themeMode
                )} text-2xl font-semibold`}
              >
                Self Evaluation
              </div>
              {/* <div
                className={`${getThemeLightTextColor(
                  theme.themeMode
                )} text-center`}
              >
                Lörem ipsum mansskatt postform, förutom genusbudgetering
                pretrede
              </div> */}
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
      <Toaster />
    </div>
  );
};

export default GroupDiscussion;
