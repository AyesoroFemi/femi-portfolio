import { FaPlay } from "react-icons/fa";
import Logo from "../assets/fms.png";

function Hero() {
  return (
    // #1C1C1C
    // [#18191F]
    <div className="bg-[#1C1C1C]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-[50%_50%] pl-16 h-[95%] text-white  pt-4">
        <div className="mt-[200px]">
          <div className="">
            <p className="mb-4 text-[#A1A1A1] text-lg">Frontend Developer</p>
            <div className="text-7xl">
              <p>Hello, </p>
              <p>I'm Femi </p>
              <p>Ayesoro.</p>
            </div>
            <a
              href="/"
              className="w-1/3 font-semibold px-6 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-[#F9C221]"
            >
              <FaPlay />
              WATCH RESUME
            </a>
          </div>
        </div>
        <div className="max-w-[100%]">
          <img className="w-[100%] h-[100%]" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
