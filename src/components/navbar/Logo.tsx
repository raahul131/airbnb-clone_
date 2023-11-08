import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <img
        src={logo}
        height="100"
        width="100"
        alt="logo"
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
