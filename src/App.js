import Lottie from "lottie-react";
import Header from "./components/header";
import animationData from "./assets/animation_llky0m7h.json";

function App() {
  return (
    <div className="">
      <Header />
      <div className="bg-black justify-center pt-[20vh] pb-20 max-w-[2880px]   mx-[40px]">
        <div className="">
          <div className="flex text-primaryWhiteText gap-16 w-5/6 mx-auto mb-8"><div>Product Design</div>
            <div>Product Management</div>
            <div>Software Development</div></div>
          <div className="font-black w-5/6 mx-auto relative items-center text-white text-[164px] leading-[11rem] ">
            Crafting scalable <span className=" text-white">Digital Experiences</span>
            {/* <Lottie animationData={animationData} className="h-24 inline-flex" /> */}
          </div>
          <div className="mt-40 h-[50vh] w-5/6 mx-auto bg-white rounded-3xl"></div>
          {/* <div className="text-white w-1/3 text-[24px] leading-snug mt-6">
            I'm Amen O. Olabode- {" "}
            <span className="font-medium text-white italic">
              Product Designer,
            </span>{" "}
            product manager, product marketer and software developer with experience derived from
            shipping products  for startups in Nigeria and cofounding my own startup.
          </div> */}

        </div>
        {/* <img className="mx-auto rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/sparkdeals-a9107.appspot.com/o/img.webp?alt=media&token=4f94883e-1297-4e20-b003-375ae2ec0e16" alt="" /> */}
      </div>
    </div>
  );
}

export default App;
