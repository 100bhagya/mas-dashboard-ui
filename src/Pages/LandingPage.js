import React, { useState } from "react";
import TopicBar from "../Components/TopicBar";
import Graph from "../Components/Graph";

const CourseCard = () => {
  return (
    <div>
      <div classname="">
        <div className=" shadow-xl p-4 rounded-3xl">
          <h3 className="text-cyan-600 lg:text-2xl lg:p-10 md:p-2 text-center">
            {" "}
            Casestudy{" "}
          </h3>
          <p className="mt-10"> 4 hour | 75%</p>
          <div class="w-full bg-gray-200 h-1">
            <div class="bg-blue-600 h-1" style={{ width: "75%" }}></div>
          </div>
          <div className="mt-5">Deadline : 22 nov 2022</div>
        </div>
      </div>
    </div>
  );
};

const NotificationBar = () => {
  return (
    <div>
      <div className="flex gap-1 justify-between p-4  md:flex-row flex-col border-b ">
        <h3 className="md:text-xl text-lg"> Case Study </h3>
        <h3 className="md:text-md text-sm py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <h3 className="md:text-md text-sm text-rose-400 ">22 Nov 2023</h3>
      </div>
    </div>
  );
};

const LandingPage = (isOpen) => {
  const [leaderboard, setLeaderboard] = useState(false);

  const activateLeaderboard = () => {
    setLeaderboard(!leaderboard);
  };
  return (
    <>
      <div className="flex">
        <TopicBar value={(isOpen = true)} />

        <div className="flex flex-grow basis-3/5">
          <div className="flex-grow">
            <div className="md:p-10 p-6">
              <div className="text-3xl text-sky-800">Hello, Lorem</div>

              <div
                style={{
                  borderTop: "2px solid blue",
                  marginTop: "0.5rem",
                }}
              ></div>
              <div className="text-xl text-sky-800 mt-5">
                Latest test Performance
              </div>

              <div
                id="performanceCard"
                className="grid grid-cols-5 gap-4 md:p-10 p-6 shadow-xl  rounded-2xl"
              >
                <div>
                  <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                    Tech
                  </div>
                  <div className="md:text-2xl text-lg text-sky-800 mt-4">
                    #18
                  </div>
                  <div className="md:text-md text-sm">10 Nov</div>
                </div>
                <div>
                  <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                    Tech
                  </div>
                  <div className="md:text-2xl text-lg text-sky-800 mt-4">
                    #18
                  </div>
                  <div className="md:text-md text-sm">10 Nov</div>
                </div>
                <div>
                  <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                    Tech
                  </div>
                  <div className="md:text-2xl text-lg text-sky-800 mt-4">
                    #18
                  </div>
                  <div className="md:text-md text-sm">10 Nov</div>
                </div>
                <div>
                  <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                    Tech
                  </div>
                  <div className="md:text-2xl text-lg text-sky-800 mt-4">
                    #18
                  </div>
                  <div className="md:text-md text-sm">10 Nov</div>
                </div>
                <div>
                  <div className="md:text-2xl  text-xl border-b-2 w-fit pb-2 border-gray-500">
                    Tech
                  </div>
                  <div className="md:text-2xl text-lg text-sky-800 mt-4">
                    #18
                  </div>
                  <div className="md:text-md text-sm">10 Nov</div>
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">
                  Performance History
                </div>
                <div className="text-right shadow-2xl rounded-2xl">
                  <select
                    name="category"
                    className="mr-10 my-5 bg-blue-500 px-5 py-1 rounded-lg text-xl text-white"
                  >
                    <option value="Quant" selected className="">
                      Quant
                    </option>
                    <option value="Quant" className="">
                      Quant
                    </option>
                    <option value="Quant" className="">
                      Quant
                    </option>
                  </select>
                  <Graph />
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">
                  Course completion
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div>
              </div>
              <div>
                <div className="text-xl text-sky-800 my-10">Notification</div>
                <div className="shadow-xl rounded-2xl">
                  <NotificationBar />
                  <NotificationBar />
                  <NotificationBar />
                </div>
              </div>

              <p
                className="text-3xl text-center text-sky-800 mt-24"
                style={{ fontFamily: "Cookie, cursive" }}
              >
                Remember why you started
              </p>
            </div>
          </div>
        </div>
        <div
          className={`basis-1/5 bg-[#EDF3FF] top-8 md:top-0 md:relative w-full transition duration-700 ease-in-out absolute md:-translate-x-0 ${
            leaderboard ? "hidden" : ""
          }`}
        >
          <div className="my-6 text-3xl text-[#2255B8] text-center">
            Leaderboard
          </div>
          <div className="p-2  ">
            <div className="flex p-4 justify-between border-b-2 border-b-blue-800 text-blue-600 text-lg">
              <div className="w-12"></div>
              <div> Name </div>
              <div> Score </div>
              <div> Rank </div>
            </div>
            <div className="flex p-4 justify-between">
              <img
                className="w-12 h-12 rounded-full shadow-sm"
                alt=""
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
              <div> Lorem </div>
              <div> 24/7 </div>
              <div> 1 </div>
            </div>
            <div className="flex p-4 justify-between">
              <img
                className="w-12 h-12 rounded-full shadow-sm"
                alt=""
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
              <div> Lorem </div>
              <div> 24/7 </div>
              <div> 1 </div>
            </div>
            <div className="flex p-4 justify-between">
              <img
                className="w-12 h-12 rounded-full shadow-sm"
                alt=""
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
              <div> Lorem </div>
              <div> 24/7 </div>
              <div> 1 </div>
            </div>
            <div className="flex justify-center gap-1 my-3">
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
            <div className="flex p-4 justify-between bg-[#86ACF5] rounded-md">
              <img
                className="w-12 h-12 rounded-full shadow-sm"
                alt=""
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
              <div> Lorem </div>
              <div> 24/7 </div>
              <div> 1 </div>
            </div>
            <div className="flex p-4 justify-between">
              <img
                className="w-12 h-12 rounded-full shadow-sm"
                alt=""
                src="https://randomuser.me/api/portraits/women/81.jpg"
              />
              <div> Lorem </div>
              <div> 24/7 </div>
              <div> 1 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
