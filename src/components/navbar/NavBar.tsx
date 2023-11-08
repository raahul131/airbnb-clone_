import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <>
      <div className=" bg-white w-full z-10 md:shadow-md">
        <div className="py-4 md:border-b-[1px]">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
