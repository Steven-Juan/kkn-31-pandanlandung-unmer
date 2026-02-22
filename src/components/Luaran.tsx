import React, { useState } from "react";
import { motion } from "motion/react";
import assets from "../assets";
import Title from "./Title";

type LuaranProps = {
  theme: "light" | "dark";
  setGlobalModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHideFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

const luaranData = [
  {
    title: "Poster Program Kerja",
    category: "Postergrafis",
    desc: "Visualisasi program konservasi sumber air dan pengembangan potensi desa Pandanlandung.",
    image: assets.poster_luaran,
    link: assets.poster_luaran,
    isPopup: false,
  },
  {
    title:
      "KONSERVASI SUMBER AIR DAN EDUKASI LINGKUNGAN MASYARAKAT DESA PANDANLANDUNG",
    category: "PKM-AI",
    desc: "Studi mengenai konservasi sumber air dan edukasi lingkungan sebagai upaya pengembangan desa berkelanjutan di Desa Pandanlandung.",
    image: assets.cover_artikel,
    link: assets.artikel_luaran,
    isPopup: true,
  },
  {
    title: "Publikasi Artikel Jurnal KKN",
    category: "Artikel Ilmiah",
    desc: "Akses lengkap naskah publikasi hasil pengabdian masyarakat kelompok KKN 31 Pandanlandung.",
    image: assets.cover_artikel,
    link: "https://media.neliti.com/media/publications/217742-membangun-kebudayaan-dan-kepribadian-com.pdf", // File PDF yang akan di-preview
    isPopup: true, // KHUSUS YANG INI POPUP
  },
];

const Luaran: React.FC<LuaranProps> = ({
  theme,
  setGlobalModalOpen,
  setHideFooter,
}) => {
  const [previewPdf, setPreviewPdf] = useState<string | null>(null);

  const handleOpenPdf = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    setPreviewPdf(link);
    setGlobalModalOpen(true);
    setHideFooter(true);
  };

  const handleClosePdf = () => {
    setPreviewPdf(null);
    setGlobalModalOpen(false);
    setHideFooter(false);
  };

  return (
    <div id="luaran" className="relative z-10 scroll-mt-10 overflow-hidden">
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
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <Title
          title="Luaran"
          desc="Hasil akhir kelompok KKN 31 Pandanlandung Universitas Merdeka Malang dalam bentuk karya publikasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {luaranData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              // Cek jika isPopup true, maka gunakan fungsi handleOpenPdf
              onClick={
                item.isPopup ? (e) => handleOpenPdf(e, item.link) : undefined
              }
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-3xl p-1 border cursor-pointer ${
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
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                >
                  {item.category}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all text-primary dark:text-text-invert">
                  <span>
                    {item.isPopup ? "Preview Artikel" : "Lihat Selengkapnya"}
                  </span>
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

      {/* POPUP PREVIEW PDF */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          onClick={handleClosePdf}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full h-full max-w-6xl bg-white rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="p-4 bg-neutral-100 flex justify-between items-center border-b z-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-[10px]">
                  PDF
                </div>
                <span className="font-bold text-neutral-800 tracking-tight text-sm md:text-base">
                  Preview Artikel Ilmiah
                </span>
              </div>
              <button
                onClick={handleClosePdf}
                className="p-2 hover:bg-neutral-200 rounded-full transition-colors"
              >
                <img src={assets.close_icon} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* PDF BODY */}
            <div className="flex-1 w-full h-full bg-neutral-200 relative">
              <iframe
                src={`${previewPdf}#toolbar=0`}
                className="w-full h-full border-none"
                title="PDF Preview"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 bg-white border-t flex justify-between items-center">
              <p className="hidden md:block text-xs text-neutral-400 italic">
                *Jika PDF tidak muncul, klik tombol download untuk melihat
                dokumen.
              </p>
              <div className="flex gap-3 w-full md:w-auto">
                <a
                  href={previewPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex-1 md:flex-none text-center bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-lg"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Luaran;
