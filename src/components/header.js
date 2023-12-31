import React from "react";
import { FaLinkedin, FaPlusCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="z-50 h-[88px] text-primaryWhiteText fixed w-full justify-between flex border-!b border-border max-w-[2880px] px-[40px] items-center">
      <div className="text-[21px] font-bold ">
        Amen<span className="text-gray-500">Olabode</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="font-semibold px-6 py-3 text-greenText cursor-pointer">
          Home
        </div>
        <div className="">About </div>
        <div className="">Portfolio </div>
        <div className="">CV </div>
      </div>

      <div className="flex">
        <div className="rounded-full px-8 py-2">Button</div>
        {/* <FaLinkedin /> */}
        {/* <div className="rounded-full px-8 py-2"></div> */}

      </div>
    </div>
  );
};

export default Header;
