import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div className="absolute top-[7700px] md:top-[1800px] md:bottom-0 w-full">
      <div className="bg-zinc-100 w-full border-t border-black/30 mt-5 mb-[72px]">
        <div className="mx-6 md:mx-10 lg:mx-12 mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-40 sm:grid-cols-1">
          <div>
            <p className="font-medium underline">Support</p>
            <ul className="leading-normal">
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Help Center
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                AirCover
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Combating discrimination
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Supporting people with disabilities
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Cancellation options
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Report neighborhood concern
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium underline">Hosting</p>
            <ul className="leading-normal">
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Airbnb your home
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                AirCover for Hosts
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Hosting resources
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Community forum
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Hosting responsibility
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Airbnb-friendly apartments
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium underline">Airbnb</p>
            <ul className="leading-normal">
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Newsroom
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                New features
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Careers
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Investors
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Gift cards
              </li>
              <li className="pt-2 font-light cursor-pointer hover:underline">
                Airbnb.org disaster relief
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 p-6 border  border-black/40 hidden md:block">
          <div className="justify-between grid-cols-2 lg:flex md:flex sm:flex-1pt-4">
            <ul className="flex gap-4 font-light cursor-pointer items-center">
              <li className="hover:text-black hover:underline">
                © {new Date().getFullYear()} Airbnb, Inc. &#x2022;
              </li>
              <li className="hover:text-black hover:underline">
                Terms &#x2022;
              </li>
              <li className="hover:text-black hover:underline">
                Sitemap &#x2022;
              </li>
              <li className="hover:text-black hover:underline">
                Privacy &#x2022;
              </li>
              <li className="hover:text-black hover:underline">
                Your Privacy Choices
              </li>
            </ul>

            <div className="flex gap-7 items-center">
              <p className="hover:underline cursor-pointer font-medium">
                English (US)
              </p>
              <p className="hover:underline cursor-pointer font-medium">
                ₹ INR
              </p>
              <span className="cursor-pointer hover:text-blue-900  text-lg transition-all duration-200">
                <BsFacebook />
              </span>
              <span className="cursor-pointer hover:text-blue-700 text-xl  transition-all duration-200">
                <BsTwitter />
              </span>
              <span className="cursor-pointer hover:text-pink-700 text-lg transition-all duration-200">
                <BsInstagram />
              </span>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <Footer2 />
        </div>
      </div>
    </div>
  );
};

export default Footer;
