import { Link } from "react-router-dom";
import { hotels } from "../../utils/hotelsData";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      {" "}
      <div className="absolute top-[170px] md:top-[190px] mx-6 md:mx-0">
        <div className="md:px-14">
          <ul className="flex flex-wrap justify-evenly mb-16 md:mb-0">
            {hotels.map((data, index) => (
              <Link to={"/details/" + data.id} key={index}>
                <Card
                  image={data.image}
                  title={data.title}
                  rating={data.rating}
                  distance={data.distance}
                  price={data.price}
                  date={data?.date}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cards;
