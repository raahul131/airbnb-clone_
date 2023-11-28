import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const SignModal = ({ show, closeModal }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") closeModal();
  };

  if (!show) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] h-[400px] flex flex-col border bg-white rounded-md overflow-y-scroll pb-5">
          <button
            className="fixed font-semibold place-self-start bg-rose-500 text-white rounded-lg px-2 py-1 border-[1px] mt-1 ml-1 border-black/50 hover:bg-rose-600"
            onClick={closeModal}
          >
            X
          </button>
          <div className="text-center text-base font-semibold border-b-[1px] border-black/20 pb-3 pt-5">
            Log in or Sign up
          </div>
          <div className="text-lg font-semibold pt-5 pb-3 px-2">
            Welcome to Airbnb
          </div>
          <div className="border mx-10">
            <h1 className="text-neutral-600 border-b-[1px] px-2 pt-1">
              Country/Region
              <input
                type="text"
                placeholder=""
                className={`w-full outline-none px-2 py-2 rounded-md`}
              />
            </h1>
            <h1 className="text-neutral-600 px-2 pt-1">
              Phone Number
              <input
                type="text"
                placeholder="Enter you phone number"
                className={`w-full outline-none py-2 rounded-md`}
              />
            </h1>
          </div>
          <button className="bg-rose-500 mx-10 mt-4 text-white rounded-md py-2 font-semibold text-base hover:bg-rose-600">
            Continue
          </button>

          <div className="flex justify-center items-center gap-20 border-[1px] border-black/50 mx-10 mt-3 rounded-md py-2 hover:bg-slate-50 transition-all duration-300">
            <span className="text-blue-700 pl-">
              <SiFacebook size={20} />
            </span>
            <p className="text-base font-semibold pr-28">
              Continue with Facebook
            </p>
          </div>
          <div className="flex justify-center items-center gap-20 border-[1px] border-black/50 mx-10 mt-3 rounded-md py-2 hover:bg-slate-50 transition-all duration-300">
            <span className="pr-5">
              <FcGoogle size={21} />
            </span>
            <p className="text-base font-semibold pr-28">
              Continue with Google
            </p>
          </div>
          <div className="flex justify-center items-center gap-20 border-[1px] border-black/50 mx-10 mt-3 rounded-md py-2 hover:bg-slate-50 transition-all duration-300">
            <span className="pr-7">
              <BsApple size={21} />
            </span>
            <p className="text-base font-semibold pr-28">Continue with Apple</p>
          </div>
          <div className="flex justify-center items-center gap-20 border-[1px] border-black/50 mx-10 mt-3 rounded-md py-2 hover:bg-slate-50 transition-all duration-300">
            <span className="pr-8">
              <MdOutlineEmail size={21} />
            </span>
            <p className="text-base font-semibold pr-28">Continue with Email</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignModal;
