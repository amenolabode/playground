import React from "react";

const Button = ({ buttonText }) => {
  return (
    <div className="h-fit items-center flex flex-col group relative cursor-pointer border border-gray-700 pt-2 pb-2 px-6 rounded-full transition ease-in-out duration-500 hover:border-gray-200 hover:scale-110">
      <div className="text-white  text-[16px] font-medium flex items-center relative">
        {buttonText.split("").map((letter, i) => (
          <div
            key={i}
            className="origin-top transition-transform duration-300 ease-in-out scale-y-100 group-hover:scale-y-0"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            {letter}
          </div>
        ))}
        <div
          className="origin-top transition-transform duration-300 ease-in-out scale-y-100 group-hover:scale-y-0"
          style={{ transitionDelay: `${buttonText.split("").length * 75}ms` }}
        >
          👋
        </div>
      </div>
      <div className="absolute bottom-2 text-white text-[16px] font-medium flex items-center ">
        {buttonText.split("").map((letter, i) => (
          <div
            key={i}
            className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            {letter}
          </div>
        ))}
        <div
          className=" origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: `${buttonText.split("").length * 75}ms` }}
        >
          👋
        </div>
      </div>
    </div>
  );
};

export default Button;
