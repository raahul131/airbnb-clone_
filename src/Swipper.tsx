import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Swipper = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <h1>Swipper</h1>
      <Carousel responsive={responsive} className="text-red-500 bg-black">
        <div className="h-10 w-10 border-2">Item 1</div>
        <div className="h-10 w-10 border-2">Item 2</div>
        <div className="h-10 w-10 border-2">Item 3</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
        <div className="h-10 w-10 border-2">Item 4</div>
      </Carousel>
    </div>
  );
};

export default Swipper;