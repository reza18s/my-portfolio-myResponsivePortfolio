// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "I had a fantastic experience with Amir. He was friendly, knowledgeable, and efficient.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "I am a repeat customer of this business, and he never disappoint.I’ve recommended him to all my friends and family, and I will continue to do so",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "I can’t say enough good things about this guy. From the moment I contacted him, he were responsive and accommodating.",
  },
];

//next image
import Image from "next/image";

// data

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required moduls
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" flex flex-col items-center md:flex-row gap-x-8 h-[80%] md:h-full px-16 cursor-pointer pt-5">
              {/* avatar,name,position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                <div>
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20  xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
