import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../assets/mobile/checkpoint.svg";
export default function Content() {
  return (
    <section className="md:flex md:justify-around">
      <div className="ml-[70px] mr-[54px] text-20 rounded bg-gradient-to-b from-slate-400 to-purple-900 shadow-xl md:px-[100px]">
        <div className="mt-20 flex items-center justify-center py-10 gap-8 md:mt-2">
          <FaRegUser className="text-26 mt-3 mr-3" />
          <div className="text-26">
            10245
            <p className="text-20">Cutomers</p>
          </div>
        </div>
        <div className="flex items-center justify-center py-10 gap-8">
          <BsCreditCardFill className="text-26 mt-3 mr-3" />
          <div className="text-26">
            10245
            <p className="text-20">Cutomers</p>
          </div>
        </div>
      </div>
      <div className="items-center">
        <div className="check-content">
          <img src={checkIconMobile} className="md:w-10 md:mr-2" alt="" />
          <p className="text-13 md:text-20">
            Card reports sent to your phone every weeks
          </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} className="md:w-10 md:mr-2" alt="" />
          <p className="text-13 md:text-20">
            Card reports sent to your phone every weeks
          </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} className="md:w-10 md:mr-2" alt="" />
          <p className="text-13 md:text-20">
            Card reports sent to your phone every weeks
          </p>
        </div>
      </div>
    </section>
  );
}
