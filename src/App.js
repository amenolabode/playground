import Lottie from "lottie-react";
import Header from "./components/header";

function App() {
  return (
    <div className="">
      <Header />
      <div className=" justify-center pt-[12vh] pb-20 max-w-[2880px] mx-[40px]">
        <div className=" text-center relative overflow-hidden py-40 rounded-2xl">
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2210.64 410.78"
              className="absolute bottom-64 left-0 w-full h-full text-green-500"
              fill="#00FF6A"
              opacity={0.021}
            >
              <path
                d="M1356.41,410.78c-123.98,0-235.27-29.44-331.63-87.82-359.92-218.09-613.97-114.66-838.11-23.41C126.5,324.05,55.08,349.81,0,364.68v-56.7c51.75-13.96,107.03-36.47,165.55-60.3,111.3-45.31,237.45-96.67,383.5-107.57,168.97-12.61,334.08,31.53,504.75,134.95,233.33,141.38,524.31,67.13,727.34-20.06C2004.85,158.94,2208.95,1.33,2210.64,0V69c-1.78,1.41-44.5,34.98-116.11,81.14-65.96,42.52-169.84,104.07-290.17,155.84-136.08,58.55-265.08,92.94-383.44,102.23-21.86,1.71-43.38,2.57-64.51,2.57Z"
                strokeWidth="0"
                fill="#00FF6A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2210.64 410.78"
              className="absolute -top-4 left-0 w-full h-full text-green-500"
              fill="#00FF6A"
              opacity={0.021}
            >
              <path
                d="M1356.41,410.78c-123.98,0-235.27-29.44-331.63-87.82-359.92-218.09-613.97-114.66-838.11-23.41C126.5,324.05,55.08,349.81,0,364.68v-56.7c51.75-13.96,107.03-36.47,165.55-60.3,111.3-45.31,237.45-96.67,383.5-107.57,168.97-12.61,334.08,31.53,504.75,134.95,233.33,141.38,524.31,67.13,727.34-20.06C2004.85,158.94,2208.95,1.33,2210.64,0V69c-1.78,1.41-44.5,34.98-116.11,81.14-65.96,42.52-169.84,104.07-290.17,155.84-136.08,58.55-265.08,92.94-383.44,102.23-21.86,1.71-43.38,2.57-64.51,2.57Z"
                strokeWidth="0"
                fill="#00FF6A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2210.64 410.78"
              className="absolute top-56 left-0 w-full h-full text-green-500"
              fill="#00FF6A"
              opacity={0.021}
            >
              <path
                d="M1356.41,410.78c-123.98,0-235.27-29.44-331.63-87.82-359.92-218.09-613.97-114.66-838.11-23.41C126.5,324.05,55.08,349.81,0,364.68v-56.7c51.75-13.96,107.03-36.47,165.55-60.3,111.3-45.31,237.45-96.67,383.5-107.57,168.97-12.61,334.08,31.53,504.75,134.95,233.33,141.38,524.31,67.13,727.34-20.06C2004.85,158.94,2208.95,1.33,2210.64,0V69c-1.78,1.41-44.5,34.98-116.11,81.14-65.96,42.52-169.84,104.07-290.17,155.84-136.08,58.55-265.08,92.94-383.44,102.23-21.86,1.71-43.38,2.57-64.51,2.57Z"
                strokeWidth="0"
                fill="#00FF6A"
              />
            </svg> */}
          <div className="z-10 flex flex-col items-center">

            <div className="font-black w-5/6 mx-auto relative items-center text-[164px] leading-[12rem] ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-[#faffc8] to-green-200">
                Crafting <span className="italic">scalable</span> Digital Experiences
              </span>
            </div>

          </div>
        </div>

        <div className="w-2/3 mx-auto text-center items-center justify-center flex flex-col mt-16 text-[48px] font-bold text-primaryWhiteText py-4">
          <div className="w-full mb-8">About Me</div>
          <div className=" rounded-full overflow-hidden h-32 w-32 mb-8"> <img src="./image.jpg" alt="" /></div>

          <div className="w-full font-normal text-[32px]">
            Hey there 👋, I'm Amen, and I like to think of myself as a "founder at heart." I have a knack for solving problems. Whether it's optimizing user experiences through product design or creating a startup like
            <a href="https://ridefraser.com" className="underline"> Fraser </a>
            to revolutionize transportation in Africa, I'm all about making a positive impact through creative problem-solving.
            I thrive on the excitement of building something from the ground up and using design to make the world a better place.

          </div>
        </div>

        <div className="mt-24">
          <div className="relative w-1/3 rounded-2xl overflow-hidden group">
            <div className="bg-greenBg flex w-full h-full">
              <img
                src="./image.jpg"
                alt=""
                className="object-cover w-full transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
