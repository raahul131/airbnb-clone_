import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full md:hover:shadow-md shadow-lg transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Anyweek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden md:block">Add Gusets</div>
          <div className="p-2 bg-rose-500 text-white rounded-full">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;