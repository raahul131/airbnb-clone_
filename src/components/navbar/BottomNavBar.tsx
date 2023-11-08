import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaUserCircleSolid } from "react-icons/lia";

const BottomNavBar = () => {
  return (
    <div>
      <div className="fixed w-full bottom-0 py-3 px-10 items-center justify-evenly flex border-t-[2px] md:hidden text-black/70">
        <div className="items-center justify-center flex flex-col hover:text-rose-500">
          <FiSearch size={25} />
          <span>Explore</span>
        </div>
        <div className="items-center justify-center flex flex-col hover:text-rose-500">
          <AiOutlineHeart size={25} />
          <span>Wishlists</span>
        </div>
        <div className="items-center justify-center flex flex-col hover:text-rose-500">
          <LiaUserCircleSolid size={25} />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
