import React from "react";
import { tamData } from "../Data";

const Team = () => {
  return (
    <div className="bg-slate-200 py-10 md:py-28">
      <div>
        <h1 className="text-center md:text-4xl font-bold text-2xl">Our team is here To Help</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {tamData.map((team) => (
          <div key={team.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-2 p-4 flex flex-col justify-center my-4 sm:my-8 text-center items-center">
            <img
              className="w-[150px]"
              src={team.img}
              alt=""
            />
            <h1 className="text-lg mt-2">{team.title}</h1>
            <h3 className="text-sm mt-1">{team.desc}</h3>
            <a className="underline text-blue-400 mt-1" href="#">
              {team.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;