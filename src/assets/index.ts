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
import pembukaan_kkn from "./images/carousel/pembukaan_kkn_2026.jpg";
import fotbar_dpl from "./images/carousel/fotbar_dpl.jpg";
import fotbar_lppm from "./images/carousel/fotbar_lppm.jpg";
import fotbar_dpl_lppm from "./images/carousel/fotbar_dpl_lppm.jpg";
import fotbar_sosialisasi from "./images/carousel/fotbar_sosialisasi.jpg";
import penutupan_kkn from "./images/carousel/penutupan_kkn.jpg";
import fotbar_bapakibuposko from "./images/carousel/fotbar_bapakibuposko.jpg";
import dpl_elfrida from "./images/teams/dpl_elfrida.jpg";
import ketua_shabrina from "./images/teams/ketua_shabrina.jpg";
import sekretaris_sovita from "./images/teams/sekretaris_sovita.jpg";
import bendahara_ima from "./images/teams/bendahara_ima.jpg";
import acara_amanda from "./images/teams/acara_amanda.jpg";
import acara_surya from "./images/teams/acara_surya.jpg";
import acara_raihan from "./images/teams/acara_raihan.jpg";
import acara_shierly from "./images/teams/acara_shierly.jpg";
import pdd_seyladiva from "./images/teams/pdd_seyladiva.jpg";
import pdd_hasa from "./images/teams/pdd_hasa.jpg";
import pdd_alfris from "./images/teams/pdd_alfris.jpg";
import humas_sonya from "./images/teams/humas_sonya.jpg";
import humas_nadya from "./images/teams/humas_nadya.jpg";
import humas_juan from "./images/teams/humas_juan.jpg";
import perkap_lex from "./images/teams/perkap_lex.jpg";
import perkap_eghi from "./images/teams/perkap_eghi.jpg";
import perkap_yogi from "./images/teams/perkap_yogi.jpg";
import perkap_stefan from "./images/teams/perkap_stefan.jpg";
import konsumsi_sindy from "./images/teams/konsumsi_sindy.jpg";
import konsumsi_sherlly from "./images/teams/konsumsi_sherlly.jpg";
import konsumsi_iyan from "./images/teams/konsumsi_iyan.jpg";
import survei_lokasi from "./images/proker/survei_lokasi.jpeg";
import pembelian_perlengkapan from "./images/proker/pembelian_perlengkapan.png";
import pembuatan_plang from "./images/proker/pembuatan_plang.jpg";
import pembuatan_jembatan from "./images/proker/pembuatan_jembatan.jpg";
import pembuatan_pagar from "./images/proker/pembuatan_pagar.jpg";
import kerja_bakti from "./images/proker/kerja_bakti.jpg";
import pembuatan_gapura from "./images/proker/pembuatan_gapura.jpg";
import penambahan_saluran from "./images/proker/penambahan_saluran.jpg";
import pembuatan_pembatas from "./images/proker/pembuatan_pembatas.jpg";
import pembuatan_tong_sampah from "./images/proker/pembuatan_tong_sampah.jpg";
import pembuatan_papan_penunjuk_jalan from "./images/proker/pembuatan_papan_penunjuk_jalan.jpg";
import kegiatan_sosialisasi from "./images/proker/kegiatan_sosialisasi.jpg";
//Dokumentasi
import video_survei from "./dokumentasi/video/survei_awal.mp4";

export type GalleryItem =
  | { type: "image"; src: string; title?: string }
  | { type: "video"; src: string; title?: string };

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

export const carousel_data = [
  {
    image: pembukaan_kkn,
    title:
      "Foto bersama saat pembukaan KKN di Balai Desa Pandanlandung pada 20 Januari 2026",
  },
  {
    image: fotbar_dpl,
    title: "Foto bersama DPL di Sumber Kucur pada 28 Januari 2026",
  },
  {
    image: fotbar_lppm,
    title:
      "Foto bersama tim LPPM yang berkunjung ke lokasi Sumber Kucur guna meninjau langsung progres dan realisasi program konservasi sumber air pada 4 Februari 2026",
  },
  {
    image: fotbar_dpl_lppm,
    title:
      "Foto bersama tim LPPM dan DPL Kelompok 31, 32, serta 33 dalam kunjungan lanjutan pada 5 Februari 2026 ke lokasi Sumber Kucur untuk penilaian langsung terhadap hasil program kerja Kelompok 31",
  },
  {
    image: fotbar_sosialisasi,
    title:
      "Foto bersama Bapak dan Ibu RW 05 setelah pelaksanaan kegiatan sosialisasi mengenai pentingnya menjaga dan melestarikan sumber air di wilayah RW 05",
  },
  {
    image: penutupan_kkn,
    title:
      "Foto bersama saat penutupan KKN di Balai Desa Pandanlandung pada 18 Februari 2026",
  },
  {
    image: fotbar_bapakibuposko,
    title:
      "Momen perpisahan dan foto bersama Bapak serta Ibu pemilik posko KKN 31 pada 19 Februari 2026. Dokumentasi ini diambil sebagai tanda terima kasih sekaligus pamit setelah berakhirnya masa pengabdian di Desa Pandanlandung",
  },
];

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
    image: survei_lokasi,
  },
  {
    title: "Pembelian Perlengkapan",
    description:
      "Pengadaan bahan utama seperti kayu dan material infrastruktur lainnya dengan memastikan mutu dan ketahanan bahan untuk pembangunan di lapangan.",
    image: pembelian_perlengkapan,
  },
  {
    title: "Pembuatan Plang Larangan",
    description:
      "Pemasangan papan larangan membuang sampah yang dilengkapi informasi edukatif mengenai waktu urai berbagai jenis sampah di alam.",
    image: pembuatan_plang,
  },
  {
    title: "Pembuatan Jembatan",
    description:
      "Pembangunan sarana penyeberangan permanen guna memperbaiki akses masyarakat dalam melakukan pengawasan dan perawatan sumber air.",
    image: pembuatan_jembatan,
  },
  {
    title: "Pembuatan Pagar",
    description:
      "Pemasangan pagar pembatas menggunakan bambu untuk melindungi area resapan air sekaligus memberikan batas visual zona konservasi.",
    image: pembuatan_pagar,
  },
  {
    title: "Kerja Bakti Bersama Warga",
    description:
      "Aksi pembersihan jalur menuju sumber air dan perbaikan akses jalan menggunakan bongkahan material demi kelancaran perjalanan masyarakat.",
    image: kerja_bakti,
  },
  {
    title: "Pembuatan Gapura Sumber Kucur",
    description:
      "Pembangunan dan pengecatan gapura sebagai penanda identitas kawasan agar lebih teratur, menarik, dan mudah dikenali pengunjung.",
    image: pembuatan_gapura,
  },
  {
    title: "Penambahan Saluran Air",
    description:
      "Pemasangan pipa paralon tambahan untuk memperluas distribusi aliran air dari sumbernya agar lebih merata dan efisien bagi masyarakat.",
    image: penambahan_saluran,
  },
  {
    title: "Pembuatan Pembatas Sumber Air",
    description:
      "Penataan struktur pembatas dari batu dan semen untuk melindungi kemurnian aliran air serta meminimalkan risiko kerusakan lingkungan.",
    image: pembuatan_pembatas,
  },
  {
    title: "Pembuatan Tong Sampah",
    description:
      "Penyediaan tempat sampah yang dicat dan dilabeli berdasarkan jenisnya untuk mendorong masyarakat mengelola sampah secara terorganisir.",
    image: pembuatan_tong_sampah,
  },
  {
    title: "Pembuatan Papan Penunjuk Jalan",
    description:
      "Pemasangan papan arah berbahan besi yang kokoh di lokasi strategis guna memudahkan pengunjung menemukan lokasi Sumber Kucur.",
    image: pembuatan_papan_penunjuk_jalan,
  },
  {
    title: "Sosialisasi Pelestarian Sumber Kucur",
    description:
      "Penyampaian materi secara langsung kepada warga mengenai langkah-langkah menjaga keberlanjutan sumber air sebagai aset lingkungan desa.",
    image: kegiatan_sosialisasi,
  },
];

export const dokumentasi_data: GalleryItem[] = [
  { type: "image", src: carousel_2, title: "Kerja Bakti" },
  { type: "image", src: carousel_3, title: "Perbaikan Akses" },
  { type: "image", src: carousel_4, title: "Pemasangan Gapura" },

  { type: "image", src: carousel_2 },
  { type: "image", src: carousel_3 },
  { type: "image", src: carousel_4 },

  { type: "image", src: carousel_2 },
  { type: "image", src: carousel_3 },
  { type: "image", src: carousel_4 },

  { type: "image", src: carousel_2 },
  { type: "image", src: carousel_3 },
  { type: "image", src: carousel_4 },

  {
    type: "video",
    src: video_survei,
    title: "Survei Awal Lokasi Sumber Kucur",
  },
];

export const company_logos = [
  logo_kkn,
  lppm_logo,
  unmer_exceed,
  unmer_logo,
  unmer_brand,
];
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
    image: dpl_elfrida,
    instagram: "elfridasilalahi__",
  },

  // ================= BPH =================
  {
    name: "Shabrina Syadiyah Sari",
    division: "BPH - Ketua",
    image: ketua_shabrina,
    instagram: "shabrn.ss",
  },
  {
    name: "Sovita Choirul Nisa",
    division: "BPH - Sekretaris",
    image: sekretaris_sovita,
    instagram: "sovitacn",
  },
  {
    name: "Siti Nurrohmah",
    division: "BPH - Bendahara",
    image: bendahara_ima,
    instagram: "nurroh_1109",
  },

  // ================= ACARA =================
  {
    name: "Serli Amanda Putri",
    division: "Acara (CO)",
    image: acara_amanda,
    instagram: "srlamanda__",
  },
  {
    name: "Raihan Sahidallah",
    division: "Acara",
    image: acara_raihan,
    instagram: "rhnnsnn",
  },
  {
    name: "Shierlyana Andestian",
    division: "Acara",
    image: acara_shierly,
    instagram: "andshierly",
  },
  {
    name: "Surya Kusuma Prasetyo Aji",
    division: "Acara",
    image: acara_surya,
    instagram: "eir_nafnapulur",
  },

  // ================= PDD =================
  {
    name: "Seyladiva Ratry Maharani",
    division: "PDD (CO)",
    image: pdd_seyladiva,
    instagram: "seylvaarn",
  },
  {
    name: "Siti Komariyatul Hasanah",
    division: "PDD",
    image: pdd_hasa,
    instagram: "riya.hasanah",
  },
  {
    name: "Stefanus Alfrisius Daputra Susanto",
    division: "PDD",
    image: pdd_alfris,
    instagram: "vexworld_01",
  },

  // ================= HUMAS =================
  {
    name: "Sonya Aprina Korinta",
    division: "Humas (CO)",
    image: humas_sonya,
    instagram: "sonyaaprna",
  },
  {
    name: "Syafila Nadya Kartika",
    division: "Humas",
    image: humas_nadya,
    instagram: "ndyakrtka",
  },
  {
    name: "Steven Juan Tanoko",
    division: "Humas",
    image: humas_juan,
    instagram: "stevj00",
  },

  // ================= PERKAP =================
  {
    name: "Stefanus Padak Bura Wungbolong",
    division: "Perkap (CO)",
    image: perkap_lex,
    instagram: "stevenlex02",
  },
  {
    name: "Suwegi Dowansiba",
    division: "Perkap",
    image: perkap_eghi,
    instagram: "eghidowansiba",
  },
  {
    name: "Stefanus Budiman",
    division: "Perkap",
    image: perkap_stefan,
    instagram: "stevvann___",
  },
  {
    name: "Sugiarto Ale Bento",
    division: "Perkap",
    image: perkap_yogi,
    instagram: "yogii.bento",
  },

  // ================= KONSUMSI =================
  {
    name: "Sindi Syahrotul Nafisa",
    division: "Konsumsi (CO)",
    image: konsumsi_sindy,
    instagram: "sndyaaatmj",
  },
  {
    name: "Serilia K Tawurutubun",
    division: "Konsumsi ",
    image: konsumsi_sherlly,
    instagram: "shrllyyyyyy12__",
  },

  {
    name: "Muhammad Sopyandi",
    division: "Konsumsi",
    image: konsumsi_iyan,
    instagram: "_ynfvk",
  },
];

export default assets;
