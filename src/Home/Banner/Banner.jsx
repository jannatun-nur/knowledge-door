import { Carousel } from "@material-tailwind/react";
import slider1 from "../../../public/assets/banner/slider1.jpg";
import slider2 from "../../../public/assets/banner/slider2.jpg";
import slider3 from "../../../public/assets/banner/slider3.jpg";

const Banner = () => {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={slider1}
        alt="image 1"
        className=" h-[300px] lg:h-[450px] w-full object-cover bg-gradient-to-r from-gray-800 via-gray-300 to-gray-100"
      />
      <img
        src={slider2}
        className=" h-[300px] lg:h-[450px] w-full object-cover"
      />
      <img
        src={slider3}
        alt="image 3"
        className=" h-[300px] lg:h-[450px] w-full object-cover"
      />
    </Carousel>
  );
};

export default Banner;
