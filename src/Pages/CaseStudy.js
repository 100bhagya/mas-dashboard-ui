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
import toast, { Toaster } from 'react-hot-toast';

const CaseStudy = (isOpen) => {
  const [rating, setRating] = useState();
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const toastMessage = (message) => toast(message);

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
      }).then((res)=>{
        toastMessage(`Rating submitted successfully !`);

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
        toastMessage(`Rating updated successfully ! `);

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
              Case Study
            </div>
          </div>
          <div className="flex gap-8 mt-6 md:gap-12">
            <p
              className={`w-[80%] hidden md:block ${getThemeWhiteDarkBGColor(
                theme.themeMode
              )} ${getThemeTextColor(theme.themeMode)} px-4 py-2 rounded-xl`}
            >
              <p>
                A case study for a placement interview is a problem-solving
                exercise in which a candidate is presented with a business
                problem or scenario and is asked to analyze it and come up with
                a solution. The case study is designed to assess the candidate's
                problem-solving, critical thinking, and decision-making skills,
                as well as their ability to communicate and present their ideas
                effectively.
              </p>
              <p>
                During a placement case study interview, the interviewer will
                typically present the candidate with a business problem or
                scenario and ask them to analyze the situation, identify the key
                issues and opportunities, and develop a solution or a plan of
                action. The interviewer may also ask the candidate to make
                assumptions or provide additional information to make the
                problem more manageable. The candidate will then present their
                analysis and solution to the interviewer, who will ask follow-up
                questions and provide feedback.
              </p>
              <p>
                The case study is used to evaluate the candidate's ability to:
              </p>
              <p className="pl-4">
                <ul className="list-disc">
                  <li>Understand a complex business problem or scenario</li>
                  <li>Identify and analyze key issues and opportunities</li>
                  <li>Develop a logical and structured solution</li>
                  <li>Communicate and present their ideas effectively</li>
                  <li>Handle pressure and stay calm under stress</li>
                </ul>
              </p>
              <p>
                Case study is a common method used in placement interviews,
                especially in consulting, finance, and strategy roles. It allows
                the interviewer to see how the candidate thinks and how they
                would approach a real-world problem.
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
            <div
              className={`text-3xl ${getThemeTextSecondaryColor(
                theme.themeMode
              )}`}
            >
              Case Study Practice
            </div>
            {/* <div
              className={`${getThemeLightTextColor(theme.themeMode)} text-md`}
            >
              Lörem ipsum mansskatt postform, förutom genusbudgetering pretrede.
              Lunchdisco
            </div> */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  {/* <div
                    className={`${getThemeLightTextColor(
                      theme.themeMode
                    )} text-center`}
                  >
                    Lörem ipsum mansskatt postform, förutom genusbudgetering
                    pretrede
                  </div> */}
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
      <Toaster />
    </div>
  );
};

export default CaseStudy;
