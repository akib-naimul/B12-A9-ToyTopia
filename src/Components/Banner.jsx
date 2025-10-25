import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Speed. Fun. Imagination.",
    subtitle: "Discover the latest vehicles & action toys",
    img: "https://i.postimg.cc/xCdnjQcS/RC-Racer-Car.png"
  },
  {
    title: "STEM Robot Kits",
    subtitle: "Build and learn with hands-on science fun",
    img: "https://i.postimg.cc/TPVp5TdW/STEM-Robot-Kit.png"
  },
  {
    title: "Soft Toys for Sweet Dreams",
    subtitle: "Cute plushies and stuffed friends for every child",
    img: "https://i.postimg.cc/6psWrF1C/Plush-Bear.png"
  }
];


const Banner = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[420px] sm:h-[500px] md:h-[550px] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.title}</h1>
                <p className="text-lg text-white/80 mb-4">{s.subtitle}</p>
                <button className="btn btn-primary w-fit">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Banner;
