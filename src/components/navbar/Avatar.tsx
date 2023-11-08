import avatar from "../../assets/placeholder.jpg";

const Avatar = () => {
  return (
      <img
        src={avatar}
        height="30"
        width="30"
        alt="avatar"
        className="rounded-full"
      />
  );
};

export default Avatar;
