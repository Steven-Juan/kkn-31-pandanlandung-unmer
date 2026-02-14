import React, { type Dispatch, type SetStateAction } from "react";
import assets from "../assets";
import HeroCarousel from "./HeroCarousel";
import LogoDisplay from "./LogoDisplay";

type HeroProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-primary dark:text-text-invert">
      {/* BACKGROUND*/}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      {/* HERO CONTAINER */}
      <section id="home" className="flex flex-col items-center gap-4 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full">
        {/* Badge */}
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-px inline-flex items-center justify-center rounded-full transition duration-300">
          <div className="flex items-center gap-3 px-4 py-2 text-xs font-medium rounded-full bg-surface/80 dark:bg-primary/80 backdrop-blur">
            <div className="relative flex size-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2 rounded-full bg-cyan-500"></span>
            </div>
            Desa Pandanlandung, Kec. Wagir, Kab. Malang – KKN 2026
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
          Program konservasi sumber air dan edukasi lingkungan sebagai wujud
          pengabdian mahasiswa Universitas Merdeka Malang kepada masyarakat Desa
          Pandanlandung melalui kolaborasi, aksi nyata, dan pemberdayaan
          berkelanjutan.
        </p>

        <p className="text-xs font-semibold sm:text-sm text-muted dark:text-white/60">
          19 Januari – 19 Februari 2026
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#program"
            className="border-2 border-primary dark:border-surface px-8 h-12 rounded-md flex items-center justify-center hover:bg-accent/30 transition"
          >
            Lihat Program Kerja
          </a>
          <button className="bg-primary dark:bg-surface text-text-invert dark:text-text-primary px-8 h-12 rounded-md hover:bg-accent/90 transition flex items-center justify-center gap-2">
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
        <div className="relative mt-6 w-full max-w-6xl">
          <HeroCarousel />
        </div>
        <div className="relative">
          <LogoDisplay />
        </div>
      </section>
    </div>
  );
};

export default Hero;
