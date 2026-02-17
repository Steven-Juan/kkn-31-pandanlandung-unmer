import React from "react";
import assets from "../assets";
import { proker_data } from "../assets";
import Title from "./Title";

type ProgramKerjaProps = {
  theme: "light" | "dark";
};

const ProgramKerja: React.FC<ProgramKerjaProps> = ({ theme }) => {
  return (
    <div className="relative isolate overflow-hidden text-primary dark:text-text-invert">
      {/* BACKGROUND */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      <section id="program-kerja" className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <Title
            title="Program Kerja"
            desc="Berbagai kegiatan strategis yang kami lakukan untuk mendukung pelestarian dan konservasi sumber air di Desa Pandanlandung secara berkelanjutan."
          />

          {/* ===== Grid Program ===== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {proker_data.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden
              bg-accent/80 dark:bg-accent/20
              backdrop-blur-xl shadow-lg
              transition duration-500 
              transform hover:scale-105"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover 
                  transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-primary dark:text-text-invert">
                    {item.title}
                  </h3>

                  <p className="text-sm text-primary/80 dark:text-text-invert/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition duration-500
                border border-primary/40"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramKerja;
