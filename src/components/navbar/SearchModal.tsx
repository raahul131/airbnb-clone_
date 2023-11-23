import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const SearchModal = () => {
  return (
    <>
      <div>
        {/* For medium and large screen  */}
        <div className="hidden md:block">
          <div
            // onClick={() => console.log("Cliclked")}
            className="left-0 right-0 top-0 bottom-0 fixed bg-white/50 -z-10"
          ></div>
          <div
            // onClick={() => console.log("Clicled")}
            className="fixed top-[34%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center flex text-black h-32 w-full bg-white"
          >
            <div className="flex items-center justify-between border border-black/40 py-4 rounded-full px-5 md:mx-52 mx-24 w-full">
              <div className="px-5 md:px-10 ">
                <h1 className="text-base font-semibold">Where</h1>
                <p className="text-gray-600">Search destinations</p>
              </div>

              <div className="flex">
                <div className="border-x-2 border-black/50 px-3 md:px-10">
                  <h1 className="text-base font-semibold">Check in</h1>
                  <p className="text-gray-600">Add dates</p>
                </div>
                <div className="border-r-2 border-black/50 px-3 md:px-10">
                  <h1 className="text-base font-semibold">Check out</h1>
                  <p className="text-gray-600">Add dates</p>
                </div>
                <div className="px-3 md:px-10">
                  <h1 className="text-base font-semibold">who</h1>
                  <p className="text-gray-600">Addg guests</p>
                </div>
              </div>

              <div className="p-2 bg-rose-500 text-white rounded-full">
                <BiSearch size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* For small devices */}
        <div className="md:hidden block">
          <div className="left-0 right-0 top-0 bottom-0 fixed bg-neutral-100 z-10">
            <div className="flex justify-between items-center text-black">
              <span
                // onClick={() => console.log('Click')}
                className="p-2 mt-6 ml-6 bg-white rounded-full text-neutral-800 border-[1px] border-neutral-500"
              >
                <RxCross2 size={20} />
              </span>
              <div className="flex pt-7 gap-5 font-semibold text-lg">
                <h1 className="hover:border-b-2">Stay</h1>
                <h1>Experiences</h1>
              </div>
              <h1></h1>
            </div>

            <div className="fixed top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-2 px-5 py-3 text-black rounded-lg h-auto w-96 shadow-xl mt-5 border-[1px] border-neutral-500">
              <div className="text-xl mt-2 font-bold">Where to ?</div>
              <div className="mt-3 flex items-center border-[2px] rounded-xl px-5 py-4">
                <div className="pr-5">
                  <BiSearch size={25} />
                </div>
                <input
                  type="text"
                  placeholder="Search your destinations"
                  className="outline-none"
                />
              </div>
            </div>
            <div className="fixed top-[28%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-2 px-5 text-black rounded-lg h-auto w-96 shadow-xl border-[1px] border-neutral-500">
              <div className="flex justify-between items-center px-1">
                <h1 className="font-semibold">Who</h1>
                <p className="text-neutral-600">Add guests</p>
              </div>
            </div>
            <div className="relative top-[26%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-2 px-5 text-black rounded-lg h-auto w-96 shadow-xl border-[1px] border-neutral-500">
              <div className="flex justify-between items-center px-1">
                <h1 className="font-semibold">When</h1>
                <p className="text-neutral-600">Add guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
