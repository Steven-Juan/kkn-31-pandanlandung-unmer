import React, { useState, type Dispatch, type SetStateAction } from "react";
import assets from "../assets";

type HeroProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const Hero1: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-primary dark:text-text-invert">
      {/* BACKGROUND SVG */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between sm:md:mt-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 gap-16">
        <div className="text-center md:text-left sm:md:mb-20">
          <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px inline-flex items-center justify-center rounded-full transition duration-300 active:scale-100 mt-28 md:mt-32">
            <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-primary dark:text-text-invert rounded-full text-xs font-medium bg-surface/80 dark:bg-primary/80 backdrop-blur">
              <div className="relative flex size-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping duration-300"></span>
                <span className="relative inline-flex size-2 rounded-full bg-cyan-500"></span>
              </div>
              Desa Pandanlandung, Kec. Wagir, Kab Malang, Jawa Timur
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl leading-tight font-bold max-w-xl">
            KKN 31{" "}
            <span className="inline-flex">
              <span className="text-[#0067A5] dark:text-[#FFED00]">U</span>
              <span className="text-[#F7941D] dark:text-[#F7941D]">N</span>
              <span className="text-[#0067A5] dark:text-[#FFED00]">MER</span>
            </span>{" "}
            Pandanlandung
          </h1>

          <p className="text-sm text-muted max-w-lg mt-3">
            Dokumentasi kinerja, kolaborasi tim, dan program pengabdian
            masyarakat yang dijalankan secara terstruktur dan profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-primary dark:bg-surface text-text-invert dark:text-text-primary px-7 h-11 rounded-md hover:bg-accent transition">
              Get started
            </button>

            <button className="border border-secondary px-6 h-11 rounded-md hover:bg-white/10 transition">
              Watch After Movie
            </button>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
          alt="Hero illustration"
          className="max-w-xs sm:max-w-sm lg:max-w-md"
        />
      </section>
    </div>
  );
};

export default Hero1;
