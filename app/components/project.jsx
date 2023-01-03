import { BsArrowRight } from "react-icons/bs";

function Project() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto py-32 px-12">
        <div className="text-white">
          <p className="text-[#A1A1A1]">Portfolio</p>
          <h1 className="w-2/3 mt-4 text-3xl">
            All Creative Works, Selected Projects
          </h1>
          <p className="mt-4 text-[#A1A1A1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex mb-8">
            <a
              href="/"
              className="font-semibold px-6 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-[#F9C221]"
            >
              EXPLORE MORE
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="border-4 border-white min-h-[100px] row-span-2">2</div>
        <div className="border-4 border-white min-h-[450px] row-span-2">3</div>
        <div className="border-4 border-white min-h-[450px] row-span-2">4</div>
        <div className="border-4 border-white min-h-[100px] row-span-2">5</div>
        <div className="border-4 border-white min-h-[450px] row-span-2">6</div>
      </div>
    </div>
  );
}

export default Project;
