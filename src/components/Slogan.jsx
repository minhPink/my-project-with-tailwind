import React from "react";
import Cards from "../assets/desktop/isocard.svg";

export default function Slogan() {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p className="">
          Earn <span className="text-purple-400">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-26 py-1 px-6 bg-purple-400 rounded mt-8 hover:bg-pink-400 transition duration-700 ease-in-out">
          Start
        </button>
      </div>
      <div className="mt-[50px]">
        <img src={Cards} alt="" />
      </div>
    </section>
  );
}
