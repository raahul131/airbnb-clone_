import { AiOutlineMenu } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { useState } from "react";
import Avatar from "./Avatar";
import SignModal from "./signModal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggelOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div className="hidden md:block py-3 px-4 hover:bg-neutral-100 transition cursor-pointer rounded-full">
          <FiGlobe size={20} />
        </div>
        <div
          onClick={toggelOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white right-0 top-12 text-sm z-40">
          <div className="flex flex-col cursor-pointer">
            <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
              Login
            </div>
            <div
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              onClick={() => setShowModal(true)}
            >
              SIgnUp
            </div>

            <SignModal
              show={showModal}
              closeModal={() => setShowModal(false)}
            />

            <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
              Help center
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
