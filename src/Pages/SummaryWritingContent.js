import React, { useState, useEffect } from "react";
import TopicBar from "../Components/TopicBar";
import { Link } from "react-router-dom";
import WeekData from "../data/WeekData";
import moment from "moment";

function WEEK({ week, index, toggleWEEK }) {
  return (
    <div>
      <div key={index} onClick={() => toggleWEEK(index)}>
        <div
          className={`faq-question cursor-pointer my-6 ${
            week.open ? "text-blue-800 font-semibold" : null
          }`}
        >
          {week.question}
        </div>
      </div>
      <div className={`faq-answer flex ml-1 ${!week.open ? "hidden" : null}`}>
        <div className="w-1 bg-blue-500"></div>
        <div className="ml-3">
          {week.answer.map((post) => {
            return <div className="cursor-pointer mb-2">{post.role}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

const SummaryWritingContent = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [weeks, setweeks] = useState(WeekData);
  const [summary, setSummary] = useState();
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  var token = localStorage.getItem("access");

  useEffect(() => {
    let info = async () => {
      let dailywords = await fetch(
        `http://localhost:8081/api/task/weekly-summary?date=${date}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      let words = await dailywords.json();
      setSummary(words);
    };
    info();
  }, []);

  console.log(summary);

  const toggleWEEK = (index) => {
    setweeks(
      weeks.map((week, i) => {
        if (i === index) {
          week.open = !week.open;
        } else {
          week.open = false;
        }

        return week;
      })
    );
  };
  return (
    <div className="flex">
      <TopicBar />
      <div className="flex-grow py-10 md:px-20 px-10 mr-32">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Summary Writing</div>
          <div className="text-slate-600 text-md">{date}</div>
        </div>
        <div>
          <div className="text-3xl text-sky-800 mt-8">
            What is storyboarding and why you should do it?
          </div>
          <div className="flex gap-4 mt-4 text-gray-400">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Anmol agrawal
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Anmol agrawal
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Anmol agrawal
            </div>
          </div>
          <p className="p-2 mt-8">
            Lörem ipsum väteligt prel. Eluren dihalig. Preska oss vifons. Lovisa
            Candia nerväxt. Fygt obelt. Jiniskade divis, transitet
            stereopatologi inte gåtåg. Smartboard lasamma, mil, till deligt samt
            båsosk. Reskap babybio. Ånende havudade. Bulig reates. Regon trinas
            tehusamma haliga realig. Evis dosm luskap. Fyhar tojåck. Plaktiga
            grönt elcertifikat.
          </p>
          <p className="p-2 mt-4">
            Astronyhet romkom gågging. Annika Bergström replaher abmatisk pres
            kostymrasist. Dedurad trevis begt. Förväntningssamhälle Åke Hedlund:
            lar sosoheten psykocentrism. Revalens möst. Sarar dede för Robin
            Norberg. Mansplaining abgen, beska. Antigram blinga sasyskap. Filip
            Lundberg plånboksbröllop, dekalig. Mytometer solflygteknik köng
            Filip Nilsson. Semilogi imaspes munhota. Spårpixel svennekoloni sera
            Johanna Åberg oresebyrå. Tålig vus. Teväna svischa ad me fobi. Tinar
            jasminmöte tin köttnorm inte vuvuzela. Otiv kroppsaktivism reativ en
            ljudöra. Ören rattsurfa, kvasihuse. Rolf Lind Robert Fransson
            dekass. Var speling, i lull homosm. Til jobbtorg i saledes i paravis
            då Bamseteorem. Bonus malus Kristina Norberg plastbanta seminde
            innan reg
          </p>
          <p className="p-2 mt-4">
            Anarade läxrut i biovältare klimatnödläge. Homoadoption kömande.
            Soda ira i annonsblockerare. Hexangar safariforskning. Trell
            transperson amöning jobbtorg. Mikrotet vabes logokrati.
            Samlarsyndrom henifiera. Morotsaktivism tiledes alltsåröm besade
            gensax. Klimatflykting röstsamtal degisk, samt Dan Johansson
            triggervarning. Vithetsnorm encism. Inger Lundström on och rattsurfa
            syngen.
          </p>
        </div>
        <div className="text-right mt-3 ">
          <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4">
            {" "}
            Next
          </button>
          <Link to="/videorecord">
            <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8] mx-4">
              {" "}
              Record Summary{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-blue-200 h-[100vh] fixed left-[89vw] w-48 pt-10 pl-10">
        <div className="cursor-pointer text-2xl text-blue-800 font-semibold">
          Weeks
        </div>
        <div className="ml-3 mt-4 overflow-y-scroll h-[87vh] overflow-x-hidden">
          {weeks.map((week, i) => (
            <WEEK week={week} index={i} toggleWEEK={toggleWEEK} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryWritingContent;
