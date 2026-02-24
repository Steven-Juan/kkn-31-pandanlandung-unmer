import logo_kkn from "./logos/logo-kkn31.png";
import background from "./images/bg-megamendung.png";
import backgroundlight from "./images/bg-megamendung-light.png";
import menu_icon from "./icons/menu_icon.svg";
import menu_icon_dark from "./icons/menu_icon_dark.svg";
import ArrowIcon from "../assets/icons/arrow";
import CloseIcon from "../assets/icons/close";
import close_icon from "./icons/close_icon.svg";
import sun_icon from "./icons/sun_icon.svg";
import moon_icon from "./icons/moon_icon.svg";
import hero_img from "./images/hero_img.png";
import carousel_2 from "./images/carousel_2.jpeg";
import carousel_3 from "./images/carousel_3.jpeg";
import carousel_4 from "./images/carousel_4.jpeg";
import unmer_logo from "./logos/unmer_logo.png";
import lppm_logo from "./logos/lppm_logo.png";
import unmer_exceed from "./logos/unmer_exceed.png";
import unmer_brand from "./logos/unmer_brand.png";
import instagram_icon from "./icons/instagram_icon.png";
import instagram_icon_footer from "./icons/instagram.png";
import instagram_icon_footer_dark from "./icons/instagram_dark.png";
import tiktok_icon from "./icons/tiktok_icon.svg";
import tiktok_icon_dark from "./icons/tiktok_icon_dark.png";
import blogger_icon from "./icons/blogger.png";
import blogger_icon_dark from "./icons/blogger_dark.png";
import logo_kkn_simple from "./logos/logo_kkn_simple.png";
import post_ig_day16 from "./images/post_ig_day16.jpg";
import post_ig_day17 from "./images/post_ig_day17.jpg";
import post_ig_day18 from "./images/post_ig_day18.jpg";
import thumb_tiktok1 from "./images/thumb_tiktok1.png";
import thumb_tiktok2 from "./images/thumb_tiktok2.png";
import thumb_tiktok3 from "./images/thumb_tiktok3.png";
import thumb_blog1 from "./images/thumb_blog1.png";
import thumb_blog2 from "./images/thumb_blog2.png";
import thumb_blog3 from "./images/thumb_blog3.png";
import artikel_luaran from "./files/PKM-AI KKN 31.pdf";
import cover_artikel from "./files/cover_artikel.png";
interface ViteImageModule {
  default: string;
}

// Menentukan tipe Record: string (path) -> ViteImageModule (objek modul)
const prokerImages = import.meta.glob<ViteImageModule>(
  "./images/proker/*.{jpeg,png,jpg}",
  {
    eager: true,
  },
);

const getImg = (name: string): string => {
  const path = `./images/proker/${name}`;
  // Mencari path di dalam objek prokerImages
  const imageModule = prokerImages[path];

  // Mengembalikan URL default atau string kosong jika tidak ditemukan
  return imageModule ? imageModule.default : "";
};

export interface ProkerItem {
  title: string;
  description: string;
  image: string;
}

export const proker_data: ProkerItem[] = [
  {
    title: "Survei Lokasi",
    description:
      "Identifikasi permasalahan lingkungan di area sumber air RW 05, mulai dari sampah yang tidak terawat hingga sulitnya akses jalan bagi warga.",
    image: getImg("survei_lokasi.jpeg"),
  },
  {
    title: "Pembelian Perlengkapan",
    description:
      "Pengadaan bahan utama seperti kayu dan material infrastruktur lainnya dengan memastikan mutu dan ketahanan bahan untuk pembangunan di lapangan.",
    image: getImg("pembelian_perlengkapan.png"),
  },
  {
    title: "Pembuatan Plang Larangan",
    description:
      "Pemasangan papan larangan membuang sampah yang dilengkapi informasi edukatif mengenai waktu urai berbagai jenis sampah di alam.",
    image: getImg("pembuatan_plang.jpg"),
  },
  {
    title: "Pembuatan Jembatan",
    description:
      "Pembangunan sarana penyeberangan permanen guna memperbaiki akses masyarakat dalam melakukan pengawasan dan perawatan sumber air.",
    image: getImg("pembuatan_jembatan.jpg"),
  },
  {
    title: "Pembuatan Pagar",
    description:
      "Pemasangan pagar pembatas menggunakan bambu untuk melindungi area resapan air sekaligus memberikan batas visual zona konservasi.",
    image: getImg("pembuatan_pagar.jpg"),
  },
  {
    title: "Kerja Bakti Bersama Warga",
    description:
      "Aksi pembersihan jalur menuju sumber air dan perbaikan akses jalan menggunakan bongkahan material demi kelancaran perjalanan masyarakat.",
    image: getImg("kerja_bakti.jpg"),
  },
  {
    title: "Pembuatan Gapura Sumber Kucur",
    description:
      "Pembangunan dan pengecatan gapura sebagai penanda identitas kawasan agar lebih teratur, menarik, dan mudah dikenali pengunjung.",
    image: getImg("pembuatan_gapura.jpg"),
  },
  {
    title: "Penambahan Saluran Air",
    description:
      "Pemasangan pipa paralon tambahan untuk memperluas distribusi aliran air dari sumbernya agar lebih merata dan efisien bagi masyarakat.",
    image: getImg("penambahan_saluran.jpg"),
  },
  {
    title: "Pembuatan Pembatas Sumber Air",
    description:
      "Penataan struktur pembatas dari batu dan semen untuk melindungi kemurnian aliran air serta meminimalkan risiko kerusakan lingkungan.",
    image: getImg("pembuatan_pembatas.jpg"),
  },
  {
    title: "Pembuatan Tong Sampah",
    description:
      "Penyediaan tempat sampah yang dicat dan dilabeli berdasarkan jenisnya untuk mendorong masyarakat mengelola sampah secara terorganisir.",
    image: getImg("pembuatan_tong_sampah.jpg"),
  },
  {
    title: "Pembuatan Papan Penunjuk Jalan",
    description:
      "Pemasangan papan arah berbahan besi yang kokoh di lokasi strategis guna memudahkan pengunjung menemukan lokasi Sumber Kucur.",
    image: getImg("pembuatan_papan_penunjuk_jalan.jpg"),
  },
  {
    title: "Sosialisasi Pelestarian Sumber Kucur",
    description:
      "Penyampaian materi secara langsung kepada warga mengenai langkah-langkah menjaga keberlanjutan sumber air sebagai aset lingkungan desa.",
    image: getImg("kegiatan_sosialisasi.jpg"),
  },
];

const assets = {
  logo_kkn,
  background,
  backgroundlight,
  menu_icon,
  menu_icon_dark,
  ArrowIcon,
  CloseIcon,
  close_icon,
  sun_icon,
  moon_icon,
  blogger_icon,
  blogger_icon_dark,
  hero_img,
  instagram_icon,
  instagram_icon_footer,
  instagram_icon_footer_dark,
  tiktok_icon,
  tiktok_icon_dark,
  logo_kkn_simple,
  carousel_2,
  carousel_3,
  carousel_4,
  post_ig_day16,
  post_ig_day17,
  post_ig_day18,
  thumb_tiktok1,
  thumb_tiktok2,
  thumb_tiktok3,
  thumb_blog1,
  thumb_blog2,
  thumb_blog3,
  artikel_luaran,
  cover_artikel,
};

interface ViteAssetModule {
  default: string;
}
// 1. Ambil semua gambar dari folder carousel
const carouselImages = import.meta.glob<ViteAssetModule>(
  "./images/carousel/*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

// Helper untuk mengambil URL gambar berdasarkan nama file
const getCarouselImg = (name: string): string => {
  const path = `./images/carousel/${name}`;
  return carouselImages[path]?.default || "";
};

export const carousel_data = [
  {
    image: getCarouselImg("pembukaan_kkn_2026.jpg"),
    title:
      "Foto bersama saat pembukaan KKN di Balai Desa Pandanlandung pada 20 Januari 2026",
  },
  {
    image: getCarouselImg("fotbar_dpl.jpg"),
    title: "Foto bersama DPL di Sumber Kucur pada 28 Januari 2026",
  },
  {
    image: getCarouselImg("fotbar_lppm.jpg"),
    title:
      "Foto bersama tim LPPM yang berkunjung ke lokasi Sumber Kucur guna meninjau langsung progres dan realisasi program konservasi sumber air pada 4 Februari 2026",
  },
  {
    image: getCarouselImg("fotbar_dpl_lppm.jpg"),
    title:
      "Foto bersama tim LPPM dan DPL Kelompok 31, 32, serta 33 dalam kunjungan lanjutan pada 5 Februari 2026 ke lokasi Sumber Kucur untuk penilaian langsung terhadap hasil program kerja Kelompok 31",
  },
  {
    image: getCarouselImg("fotbar_sosialisasi.jpg"),
    title:
      "Foto bersama Bapak dan Ibu RW 05 setelah pelaksanaan kegiatan sosialisasi mengenai pentingnya menjaga dan melestarikan sumber air di wilayah RW 05",
  },
  {
    image: getCarouselImg("penutupan_kkn.jpg"),
    title:
      "Foto bersama saat penutupan KKN di Balai Desa Pandanlandung pada 18 Februari 2026",
  },
  {
    image: getCarouselImg("fotbar_bapakibuposko.jpg"),
    title:
      "Momen perpisahan dan foto bersama Bapak serta Ibu pemilik posko KKN 31 pada 19 Februari 2026. Dokumentasi ini diambil sebagai tanda terima kasih sekaligus pamit setelah berakhirnya masa pengabdian di Desa Pandanlandung",
  },
];

const fotoFiles = import.meta.glob<ViteAssetModule>(
  "./dokumentasi/foto/*.{jpeg,png,jpg}",
  { eager: true },
);
const videoFiles = import.meta.glob<ViteAssetModule>(
  "./dokumentasi/video/*.mp4",
  { eager: true },
);

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string; // Sekarang bersifat wajib karena diambil dari nama file
  id: number;
};

const processFiles = (
  files: Record<string, ViteAssetModule>,
  type: "image" | "video",
): GalleryItem[] => {
  return Object.entries(files).map(([path, module]) => {
    // 1. Ambil nama file lengkap (misal: "DSC_0059.jpg")
    const fullFileName = path.split("/").pop() || "";

    // 2. Ambil nama saja tanpa ekstensi (misal: "DSC_0059")
    const nameOnly = fullFileName.replace(/\.[^/.]+$/, "");

    // 3. Ekstrak angka untuk ID (sorting)
    const numericId = parseInt(fullFileName.replace(/\D/g, "")) || 0;

    return {
      type,
      src: module.default,
      // 4. Gunakan nama file sebagai title (merapikan _ jadi spasi jika ada)
      title: nameOnly.replace(/_/g, " "),
      id: numericId,
    };
  });
};

const allImages = processFiles(fotoFiles, "image");
const allVideos = processFiles(videoFiles, "video");

// Sorting berdasarkan ID
export const dokumentasi_data: GalleryItem[] = [
  ...allImages,
  ...allVideos,
].sort((a, b) => a.id - b.id);
export const company_logos = [
  logo_kkn,
  lppm_logo,
  unmer_exceed,
  unmer_logo,
  unmer_brand,
];
// 1. Ambil semua gambar tim sekaligus
const teamImages = import.meta.glob<ViteAssetModule>(
  "./images/teams/*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

// Helper untuk mengambil URL gambar berdasarkan nama file
const getTeamImg = (name: string): string => {
  const path = `./images/teams/${name}`;
  return teamImages[path]?.default || "";
};

export interface TeamMember {
  name: string;
  division: string;
  image: string;
  instagram?: string;
}

export const teamData: TeamMember[] = [
  // ================= DPL =================
  {
    name: "Elfrida Br. Silalahi, S.Pd., M.Pd.",
    division: "DPL",
    image: getTeamImg("dpl_elfrida.jpg"),
    instagram: "elfridasilalahi__",
  },

  // ================= BPH =================
  {
    name: "Shabrina Syadiyah Sari",
    division: "BPH - Ketua",
    image: getTeamImg("ketua_shabrina.jpg"),
    instagram: "shabrn.ss",
  },
  {
    name: "Sovita Choirul Nisa",
    division: "BPH - Sekretaris",
    image: getTeamImg("sekretaris_sovita.jpg"),
    instagram: "sovitacn",
  },
  {
    name: "Siti Nurrohmah",
    division: "BPH - Bendahara",
    image: getTeamImg("bendahara_ima.jpg"),
    instagram: "nurroh_1109",
  },

  // ================= ACARA =================
  {
    name: "Serli Amanda Putri",
    division: "Acara (CO)",
    image: getTeamImg("acara_amanda.jpg"),
    instagram: "srlamanda__",
  },
  {
    name: "Raihan Sahidallah",
    division: "Acara",
    image: getTeamImg("acara_raihan.jpg"),
    instagram: "rhnnsnn",
  },
  {
    name: "Shierlyana Andestian",
    division: "Acara",
    image: getTeamImg("acara_shierly.jpg"),
    instagram: "andshierly",
  },
  {
    name: "Surya Kusuma Prasetyo Aji",
    division: "Acara",
    image: getTeamImg("acara_surya.jpg"),
    instagram: "eir_nafnapulur",
  },

  // ================= PDD =================
  {
    name: "Seyladiva Ratry Maharani",
    division: "PDD (CO)",
    image: getTeamImg("pdd_seyladiva.jpg"),
    instagram: "seylvaarn",
  },
  {
    name: "Siti Komariyatul Hasanah",
    division: "PDD",
    image: getTeamImg("pdd_hasa.jpg"),
    instagram: "riya.hasanah",
  },
  {
    name: "Stefanus Alfrisius Daputra Susanto",
    division: "PDD",
    image: getTeamImg("pdd_alfris.jpg"),
    instagram: "vexworld_01",
  },

  // ================= HUMAS =================
  {
    name: "Sonya Aprina Korinta",
    division: "Humas (CO)",
    image: getTeamImg("humas_sonya.jpg"),
    instagram: "sonyaaprna",
  },
  {
    name: "Syafila Nadya Kartika",
    division: "Humas",
    image: getTeamImg("humas_nadya.jpg"),
    instagram: "ndyakrtka",
  },
  {
    name: "Steven Juan Tanoko",
    division: "Humas",
    image: getTeamImg("humas_juan.jpg"),
    instagram: "stevj00",
  },

  // ================= PERKAP =================
  {
    name: "Stefanus Padak Bura Wungbolong",
    division: "Perkap (CO)",
    image: getTeamImg("perkap_lex.jpg"),
    instagram: "stevenlex02",
  },
  {
    name: "Suwegi Dowansiba",
    division: "Perkap",
    image: getTeamImg("perkap_eghi.jpg"),
    instagram: "eghidowansiba",
  },
  {
    name: "Stefanus Budiman",
    division: "Perkap",
    image: getTeamImg("perkap_stefan.jpg"),
    instagram: "stevvann___",
  },
  {
    name: "Sugiarto Ale Bento",
    division: "Perkap",
    image: getTeamImg("perkap_yogi.jpg"),
    instagram: "yogii.bento",
  },

  // ================= KONSUMSI =================
  {
    name: "Sindi Syahrotul Nafisa",
    division: "Konsumsi (CO)",
    image: getTeamImg("konsumsi_sindy.jpg"),
    instagram: "sndyaaatmj",
  },
  {
    name: "Serilia K Tawurutubun",
    division: "Konsumsi ",
    image: getTeamImg("konsumsi_sherlly.jpg"),
    instagram: "shrllyyyyyy12__",
  },
  {
    name: "Muhammad Sopyandi",
    division: "Konsumsi",
    image: getTeamImg("konsumsi_iyan.jpg"),
    instagram: "_ynfvk",
  },
];

export default assets;
