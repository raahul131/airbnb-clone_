import { FiGlobe } from "react-icons/fi";

const Footer2 = () => {
  return (
    <>
      <div className="border-t-[1px] border-t-black/60 mt-5 pt-3">
        <div className="md:hidden block">
          <div className="flex text-sm">
            <p className="hover:underline flex items-center gap-2 pl-5 cursor-pointer font-medium">
              <span>
                <FiGlobe />
              </span>
              English (US)
            </p>
            <p className="hover:underline cursor-pointer font-medium pl-5">
              ₹ INR
            </p>
          </div>
        </div>

        <div className="pl-5 pt-4">
          <p>© {new Date().getFullYear()} Airbnb, Inc.</p>
        </div>

        <div className="px-5 font-thin flex justify-between pt-1 pb-2">
          <p>Terms</p>
          <span>&#x2022;</span>
          <p>Sitemap</p>
          <span>&#x2022;</span>
          <p>Privacy</p>
          <span>&#x2022;</span>
          <p>Your Privacy Choices</p>
        </div>
      </div>
    </>
  );
};

export default Footer2;
