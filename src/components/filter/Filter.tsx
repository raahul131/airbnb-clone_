import { TbHomeSignal } from "react-icons/tb";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { RiChatSmile3Line } from "react-icons/ri";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { MdOutlineLocalFireDepartment, MdSportsGolf } from "react-icons/md";
import { GiWindmill } from "react-icons/gi";
import { TbBuildingCommunity } from "react-icons/tb";
import { PiMountains } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { PiBuildingsLight } from "react-icons/pi";
import { MdCabin } from "react-icons/md";
import { PiSnowflake } from "react-icons/pi";
import { PiTreeEvergreenBold } from "react-icons/pi";
import { GiRiver } from "react-icons/gi";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { useState } from "react";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [currentIndex, setCurrentIndex] = useState(8);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? filterItems.length - 1 : filterItems.length + 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === filterItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const filterItems = [
    { label: "Home", icon: <TbHomeSignal size={30} /> },
    { label: "Pool", icon: <LiaSwimmingPoolSolid size={30} /> },
    { label: "Luxe", icon: <RiChatSmile3Line size={30} /> },
    { label: "Treehouses", icon: <GiSpookyHouse size={30} /> },
    { label: "Rooms", icon: <MdOutlineBedroomChild size={30} /> },
    { label: "Breakfast", icon: <MdOutlineFreeBreakfast size={30} /> },
    { label: "Mansion", icon: <BsBuildingsFill size={30} /> },
    { label: "Trending", icon: <MdOutlineLocalFireDepartment size={30} /> },
    { label: "Golfing", icon: <MdSportsGolf size={30} /> },
    { label: "Windmills", icon: <GiWindmill size={30} /> },
    { label: "Design", icon: <TbBuildingCommunity size={30} /> },
    { label: "Mountains", icon: <PiMountains size={30} /> },
    { label: "Beach", icon: <TbBeach size={30} /> },
    { label: "Cities", icon: <PiBuildingsLight size={30} /> },
    { label: "Cabin", icon: <MdCabin size={30} /> },
    { label: "Snow", icon: <PiSnowflake size={30} /> },
    { label: "Lakes", icon: <PiTreeEvergreenBold size={30} /> },
    { label: "River", icon: <GiRiver size={30} /> },
  ];

  return (
    <div className="absolute top-[80px] w-full shadow-md md:shadow-none bg-white">
      <div className="max-w-[3020px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-2">
        <ul className="flex justify-start overflow-auto mx-5 scroll-hide">
          {/* Prev Slide button */}
          {/* <div
            className="fixed -ml-5 border-[2px] border-black p-1 rounded-full bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110"
            onClick={prevSlide}
          >
            <FaLessThan size={20} />
          </div> */}
          {filterItems.map((item, i) => (
            <div
              onClick={() => {
                setSelectedFilter(i);
              }}
              key={i}
              className={`items-center justify-center flex flex-col hover:border-b-[2px] text-neutral-500 hover:text-black hover:border-b-black cursor-pointer mr-4 transition-all duration-100 min-w-[60px] ${
                i === selectedFilter
                  ? "text-black border-b-[2px] border-b-black"
                  : ""
              } `}
            >
              {item.icon}
              <span className="font-medium text-sm pb-2">{item.label}</span>
            </div>
          ))}
          {/* Nest Slide Button*/}
          {/* <div
            onClick={nextSlide}
            className="absolute right-3 border-[2px] border-black p-1 rounded-full bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110"
          >
            <FaGreaterThan size={20} />
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
