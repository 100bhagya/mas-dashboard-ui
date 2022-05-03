import React from "react";
import TableContent from "../Components/TableContent";
import TopicBar from "../Components/TopicBar";
import Puzzle from "../images/puzzles.png";

const Puzzles = () => {

  return (
    <div className="flex">
      <TopicBar />
      <div className=" py-10 md:px-20 px-10">
        <div className=" pb-4 border-b-2 border-[#2255B8]">
          <div className="text-3xl text-sky-800">Puzzles</div>
          <div className="text-slate-600 text-md">22 february ,2022</div>
        </div>

        <div className="flex items-center">
          <div className="lg:basis-1/2 md:basis-3/5 mt-16">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis, non. In unde tempora dolorem expedita quasi possimus
              provident ut minima, reiciendis quo fugit similique vel labore
              dolor perferendis quod delectus consequuntur, beatae eligendi
              temporibus atque laborum cupiditate commodi autem! Modi, id
              aspernatur. Voluptas facilis inventore ipsum modi recusandae sed
              autem? Quae eveniet soluta nostrum eum ratione? Aperiam earum nam
              atque, cum beatae incidunt facere a. Amet laborum vel consectetur
              voluptatibus rem harum similique excepturi tenetur possimus vitae?
              Aspernatur exercitationem, sint atque dicta labore pariatur nihil
              tempore est itaque magni aliquid quasi excepturi architecto
              tempora optio perspiciatis saepe provident doloribus ut dolores
              reiciendis! Et ut dolor odio, nisi repellendus saepe velit
              perspiciatis ipsa corporis autem veritatis, ab reprehenderit eos
              est! Ad aspernatur consectetur nemo sunt doloribus soluta?
            </p>
            <div className="mt-12">
              <button className="py-2 px-6 text-white rounded-xl bg-[#2255B8]">
                {" "}
                Click here to continue reading
              </button>
            </div>
          </div>
          <div className="md:basis-2/5 lg:basis-1/2 ml-20">
            <img className="" alt="" src={Puzzle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
