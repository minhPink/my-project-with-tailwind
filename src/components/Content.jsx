import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../assets/mobile/checkpoint.svg";
export default function Content() {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-20 rounded bg-gradient-to-b from-slate-400 to-purple-900 shadow-xl">
        <div className="mt-20 flex items-center justify-center py-10 gap-8">
          <FaRegUser className="text-26 mt-3 mr-3" />
          <p className="text-26">
            10245
            <p className="text-20">Cutomers</p>
          </p>
        </div>
        <div className="flex items-center justify-center py-10 gap-8">
          <BsCreditCardFill className="text-26 mt-3 mr-3" />
          <p className="text-26">
            10245
            <p className="text-20">Cutomers</p>
          </p>
        </div>
      </div>
      <div className="items-center">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p className="text-13">Card reports sent to your phone every weeks</p>
        </div>
      </div>
    </section>
  );
}
