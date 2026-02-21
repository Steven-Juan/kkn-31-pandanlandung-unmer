import React, {
  useState,
  useRef,
  type SetStateAction,
  type Dispatch,
} from "react";
import { motion } from "motion/react";
import Title from "./Title";
import { dokumentasi_data } from "../assets";
import type { GalleryItem } from "../assets";
import assets from "../assets";

type DokumentasiProps = {
  theme: "light" | "dark";
  setGlobalModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ITEMS_PER_PAGE = 8;

const Dokumentasi: React.FC<DokumentasiProps> = ({
  theme,
  setGlobalModalOpen,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [preview, setPreview] = useState<GalleryItem | null>(null);

  const items = dokumentasi_data;

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleClosePreview = () => {
    setPreview(null);
    setGlobalModalOpen(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      id="dokumentasi"
      className="scroll-mt-10 relative isolate overflow-hidden"
    >
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className=" absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" px-6 max-w-6xl mx-auto py-16"
      >
        <Title
          title="Dokumentasi Kegiatan"
          desc="Kumpulan dokumentasi kegiatan KKN 31 Universitas Merdeka Malang di Desa Pandanlandung"
        />

        {/* GRID */}
        <div
          key={currentPage}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 min-h-100"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => {
                setPreview(item);
                setGlobalModalOpen(true);
              }}
              className="group relative rounded-2xl overflow-hidden
        bg-accent/80 dark:bg-accent/20
        backdrop-blur-xl shadow-lg
        transition duration-500 
        transform hover:scale-105 cursor-pointer
        h-fit"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  className="aspect-4/3 w-full object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.src}
                    className="aspect-4/3 w-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-base font-medium">
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h1 className="text-base font-medium">
                      {item.title ??
                        (item.type === "video"
                          ? "Video Dokumentasi"
                          : "Dokumentasi KKN")}
                    </h1>
                  </div>
                </h1>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className=" flex items-center justify-between border-t border-white/10 mt-4 pt-4">
          <p className="text-sm text-gray-800 dark:text-gray-400">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + ITEMS_PER_PAGE, totalItems)}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span> results
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 rounded-md dark:bg-white/10 bg-black/30 disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "dark:bg-accent bg-primary text-white"
                    : "dark:bg-white/10 bg-black/30"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 rounded-md dark:bg-white/10 bg-black/30 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        {/* PREVIEW MODAL */}
        {preview && (
          <div
            onClick={handleClosePreview}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-9998"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full p-4"
            >
              {preview.type === "image" ? (
                <img src={preview.src} className="rounded-xl w-full" />
              ) : (
                <video
                  ref={videoRef}
                  src={preview.src}
                  controls
                  autoPlay
                  className="rounded-xl w-full"
                />
              )}
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dokumentasi;
