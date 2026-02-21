import { motion } from "motion/react";
import Title from "./Title";

type PublikasiItem = {
  title: string;
  description: string;
  category: "Jurnal" | "Berita" | "Artikel" | "Luaran";
  link?: string;
  file?: string;
};

const publikasi_data: PublikasiItem[] = [
  {
    title: "Konservasi Sumber Air Desa Pandanlandung",
    description:
      "Laporan kegiatan konservasi sumber air sebagai bentuk pengabdian mahasiswa kepada masyarakat.",
    category: "Luaran",
    file: "#",
  },
  {
    title: "Edukasi Lingkungan Berbasis Partisipatif",
    description:
      "Artikel mengenai pendekatan partisipatif dalam edukasi lingkungan kepada masyarakat desa.",
    category: "Artikel",
    link: "#",
  },
  {
    title: "KKN 31 UNMER di Desa Pandanlandung",
    description:
      "Liputan kegiatan KKN 31 Universitas Merdeka Malang di media lokal.",
    category: "Berita",
    link: "#",
  },
];

const Publikasi = () => {
  return (
    <motion.section
      id="publikasi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-6 max-w-6xl mx-auto py-20 scroll-mt-28"
    >
      <Title
        title="Publikasi & Luaran"
        desc="Hasil publikasi, artikel, berita, serta luaran kegiatan KKN 31 Universitas Merdeka Malang."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {publikasi_data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group rounded-2xl p-6 
            bg-white/40 dark:bg-surface/40
            backdrop-blur-xl shadow-lg
            transition duration-500 hover:scale-105"
          >
            {/* Category Badge */}
            <span
              className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full 
              bg-primary/20 text-primary dark:bg-primary/30 dark:text-text-invert"
            >
              {item.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-primary dark:text-text-invert">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted dark:text-white/70 mb-6">
              {item.description}
            </p>

            {/* Action */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                className="text-sm font-medium text-primary dark:text-text-invert hover:underline"
              >
                Baca Selengkapnya →
              </a>
            )}

            {item.file && (
              <a
                href={item.file}
                download
                className="text-sm font-medium text-primary dark:text-text-invert hover:underline"
              >
                Download Dokumen →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Publikasi;
