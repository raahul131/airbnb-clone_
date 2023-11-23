import { AiFillStar } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ image, title, rating, distance, price, date }) => {
  return (
    <div className="cursor-pointer">
      <div>
        {/* <div className="absolute top-3 left-[330px] md: text-black right-0">
          <span className="right-10">
            <AiOutlineHeart size={30} />
          </span>
        </div> */}
        <img
          src={image}
          alt="hotel"
          className="object-cover rounded-2xl h-80 w-96 md:h-60 md:w-[300px]  hover:shadow-lg"
        />
      </div>
      <div className="flex flex-row justify-between pt-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex items-center flex-row gap-2 text-lg font-medium">
          <span>
            <AiFillStar />
          </span>
          {rating}
        </div>
      </div>
      <div className="text-neutral-600">{distance} Kilometers Away</div>
      <div className="text-neutral-600 tracking-wider text-base">{date}</div>
      <div className="mb-9">$ {price} night</div>
    </div>
  );
};

export default Card;
