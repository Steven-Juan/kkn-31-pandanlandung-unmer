import React from "react";
import { motion } from "motion/react";
import assets from "../assets";
import Title from "./Title";

type LuaranProps = {
  theme: "light" | "dark";
};

const luaranData = [
  {
    title: "Poster Program Kerja",
    category: "Visual Design",
    desc: "Visualisasi program konservasi sumber air dan pengembangan potensi desa Pandanlandung.",
    image: assets.poster_luaran,
    link: "#",
  },
  {
    title: "Artikel Ilmiah PKM-AI",
    category: "Academic Article",
    desc: "Dokumentasi ilmiah hasil pengabdian masyarakat mengenai efektivitas partisipasi warga dalam pelestarian lingkungan.",
    image: assets.artikel_luaran,
    link: "#",
  },
];

const Luaran: React.FC<LuaranProps> = ({ theme }) => {
  return (
    <div id="luaran" className="scroll-mt-5 relative isolate overflow-hidden">
      {/* Background */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />
      <motion.div
        className="px-6 max-w-6xl mx-auto py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Title
          title="Luaran"
          desc="Hasil akhir kelompok KKN 31 Pandanlandung Universitas Merdeka Malang dalam bentuk karya publikasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          {luaranData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl p-1 border ${
                theme === "dark"
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              } backdrop-blur-sm transition-all`}
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {item.category}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all">
                  <span>Lihat Selengkapnya</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Luaran;
