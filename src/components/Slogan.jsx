import React from "react";
import Cards from "../assets/desktop/isocard.svg";

export default function Slogan() {
  return (
    <section className="flex flex-col items-center text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-400">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-26 py-1 px-6 bg-purple-400 rounded mt-8 hover:bg-pink-400 transition duration-700 ease-in-out md:text-36">
          Start
        </button>
      </div>
      <div className="mt-[50px] md:absolute md:right-[-5rem] md:top-[-5rem]">
        <img src={Cards} alt="" />
      </div>
    </section>
  );
}
