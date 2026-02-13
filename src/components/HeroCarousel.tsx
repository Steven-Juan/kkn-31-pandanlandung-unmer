import { useEffect, useState } from "react";
import { carousel_images } from "../assets";

const HeroCarousel = () => {
  const [current, setCurrent] = useState<number>(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === carousel_images.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carousel_images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carousel_images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full">
      {/* Wrapper */}
      <div className="relative h-125 md:h-150 overflow-hidden rounded-[40px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {carousel_images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {carousel_images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition p-2 rounded-full"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition p-2 rounded-full"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
