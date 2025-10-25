import React from "react";

const sample = [
  "https://i.postimg.cc/05w2z8V2/Lego-Classic-Bricks.png",
  "https://i.postimg.cc/ZYB06PKG/Wooden-Train-Set.png",
  "https://i.postimg.cc/ZYB06PKG/Wooden-Train-Set.png",
  "https://i.postimg.cc/NGSBtWYw/Dino-Puzzle-48pc.png",
  "https://i.postimg.cc/xCdnjQcS/RC-Racer-Car.png",
  "https://i.postimg.cc/6psWrF1C/Plush-Bear.png",
];

const Gallery = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Gallery</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {sample.map((src, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="group card bg-base-100/80 backdrop-blur-sm border border-white/10 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 overflow-hidden rounded-2xl"
          >
            
            <div className="relative w-full aspect-[4/3] bg-base-200/50">
              <img
                src={src}
                alt={`toy-${i}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"/>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Featured</span>
                <span className="badge badge-outline badge-sm">New</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

