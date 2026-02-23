import React, { useState, type Dispatch, type SetStateAction } from "react";
import { proker_data } from "../assets";
import Title from "./Title";
import { motion } from "motion/react";
import assets from "../assets";

type ProgramKerjaProps = {
  setGlobalModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ProgramKerja: React.FC<ProgramKerjaProps> = ({ setGlobalModalOpen }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleClosePreview = () => {
    setPreviewImage(null);
    setGlobalModalOpen(false);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="program-kerja"
      className="scroll-mt-10 relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24 text-primary dark:text-text-invert"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <Title
          title="Program Kerja"
          desc="Berbagai kegiatan strategis yang kami lakukan untuk mendukung pelestarian dan konservasi sumber air di Desa Pandanlandung secara berkelanjutan."
        />

        {/* ===== Grid Program ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proker_data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              onClick={() => {
                setPreviewImage(item.image);
                setGlobalModalOpen(true);
              }}
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
            </motion.div>
          ))}
        </div>
      </div>
      {/* PREVIEW MODAL */}
      {previewImage && (
        <div
          onClick={handleClosePreview}
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            // Menggunakan h-fit dan w-fit agar container mengikuti ukuran gambar yang sudah di-contain
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
          >
            {/* TOMBOL CLOSE - Sekarang nempel di pojok kanan atas gambar */}
            <button
              onClick={handleClosePreview}
              className="absolute -top-4 -right-4 z-[100000] bg-primary hover:bg-red-500 text-white p-2 rounded-full shadow-xl transition-all duration-300 group"
            >
              <img
                src={assets.close_icon}
                alt="Close"
                className="w-5 h-5 invert group-hover:rotate-90 transition-transform duration-300"
              />
            </button>

            {/* GAMBAR PREVIEW */}
            <img
              src={previewImage}
              className="rounded-xl shadow-2xl border border-white/20 max-h-[85vh] w-auto object-contain"
              alt="Preview Program Kerja"
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProgramKerja;
