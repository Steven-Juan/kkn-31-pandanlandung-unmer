import React, { type Dispatch, type SetStateAction } from "react";
import assets from "../assets";

type HeroProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-primary dark:text-text-invert">
      {/* BACKGROUND (tetap pakai punyamu) */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      {/* HERO CONTAINER */}
      <section className="flex flex-col items-center gap-4 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full">
        {/* Badge */}
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px inline-flex items-center justify-center rounded-full transition duration-300">
          <div className="flex items-center gap-3 px-4 py-2 text-xs font-medium rounded-full bg-surface/80 dark:bg-primary/80 backdrop-blur">
            <div className="relative flex size-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2 rounded-full bg-cyan-500"></span>
            </div>
            Desa Pandanlandung, Kec. Wagir, Kab Malang
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-semibold xl:leading-20.5 max-w-4xl">
          KKN 31{" "}
          <span className="inline-flex">
            <span className="text-[#0067A5] dark:text-[#FFED00]">U</span>
            <span className="text-[#F7941D]">N</span>
            <span className="text-[#0067A5] dark:text-[#FFED00]">MER</span>
          </span>{" "}
          Pandanlandung
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-muted dark:text-white/75 max-w-xl">
          Dokumentasi kinerja, kolaborasi tim, dan program pengabdian masyarakat
          yang dijalankan secara terstruktur dan profesional.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button className="bg-primary dark:bg-surface text-text-invert dark:text-text-primary px-8 h-12 rounded-md hover:bg-accent transition flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8 5v14l11-7-11-7z" />
            </svg>
            Watch After Movie
          </button>
        </div>

        {/* Illustration */}
        <div className="relative mt-6">
          <img
            src={assets.hero_img}
            alt="Hero illustration"
            className="w-full max-w-6xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
