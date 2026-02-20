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
import carousel_1 from "./images/carousel_1.jpeg";
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
import video_music from "./videos/guilty as sin_ x about you (remix).mp4";

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
  video_music,
};

export const company_logos = [
  logo_kkn,
  lppm_logo,
  unmer_exceed,
  unmer_logo,
  unmer_brand,
];

export const carousel_data = [
  {
    image: carousel_1,
    title: "Konservasi Sumber Air",
  },
  {
    image: carousel_2,
    title: "Edukasi Lingkungan",
  },
  {
    image: carousel_3,
    title: "Kolaborasi Bersama Masyarakat",
  },
  {
    image: carousel_4,
    title: "Aksi Nyata Berkelanjutan",
  },
];

export interface ProkerItem {
  title: string;
  description: string;
  image: string;
}

export const proker_data: ProkerItem[] = [
  {
    title: "Pembuatan Plang Larangan",
    description:
      "Pemasangan plang berisi larangan keras membuang sampah di area sekitar Sumber Air Kucur, dilengkapi informasi waktu terurai berbagai jenis sampah sebagai bentuk edukasi kepada masyarakat.",
    image: carousel_1,
  },
  {
    title: "Pembuatan Plang Petunjuk Arah",
    description:
      "Pemasangan plang petunjuk arah pada jalur menuju Sumber Air Kucur guna memudahkan masyarakat menemukan lokasi sumber air.",
    image: carousel_2,
  },
  {
    title: "Pembuatan Jembatan Akses",
    description:
      "Pembangunan jembatan menuju sumber utama menggunakan material yang kuat untuk mempermudah akses dan memiliki ketahanan jangka panjang.",
    image: carousel_3,
  },
  {
    title: "Pembuatan & Pengecatan Pagar",
    description:
      "Pembuatan pagar pembatas menggunakan bambu serta pengecatan warna kuning untuk meningkatkan keamanan sekaligus memperindah kawasan sumber air.",
    image: carousel_4,
  },
  {
    title: "Pemasangan Gapura",
    description:
      "Pemasangan gapura sebagai penanda identitas Sumber Air Kucur menggunakan bahan bambu dan papan kayu.",
    image: carousel_1,
  },
  {
    title: "Pembuatan Tempat Sampah Pilah",
    description:
      "Pembuatan tempat sampah pilah dari kaleng cat bekas dan rangka kayu untuk memudahkan masyarakat menjaga kebersihan area sumber air.",
    image: carousel_2,
  },
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
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },

  // ================= BPH =================
  {
    name: "Shabrina Syadiyah Sari",
    division: "BPH - Ketua",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&w=400&auto=format&fit=crop",
    instagram: "shabrn.ss",
  },
  {
    name: "Sovita Choirul Nisa",
    division: "BPH - Sekretaris",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    instagram: "sovitacn",
  },
  {
    name: "Siti Nurrohmah",
    division: "BPH - Bendahara",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
    instagram: "nurroh_1109",
  },

  // ================= ACARA =================
  {
    name: "Serli Amanda Putri",
    division: "Acara (CO)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    instagram: "srlamanda__",
  },
  {
    name: "Raihan Sahidallah",
    division: "Acara",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Shierlyana Andestian",
    division: "Acara",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Surya Kusuma Prasetyo Aji",
    division: "Acara",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },

  // ================= KONSUMSI =================
  {
    name: "Serilia K Tawurutubun",
    division: "Konsumsi (CO)",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Sindi Syahrotul Nafisa",
    division: "Konsumsi",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Muhammad Sopyandi",
    division: "Konsumsi",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },

  // ================= PERKAP =================
  {
    name: "Stefanus Padak Bura Wungbolong",
    division: "Perkap (CO)",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Suwegi Dowansiba",
    division: "Perkap",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Stefanus Budiman",
    division: "Perkap",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Sugiarto Ale Bento",
    division: "Perkap",
    image:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },

  // ================= HUMAS =================
  {
    name: "Sonya Aprina Korinta",
    division: "Humas (CO)",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Syafila Nadya Kartika",
    division: "Humas",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Steven Juan Tanoko",
    division: "Humas",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },

  // ================= PDD =================
  {
    name: "Seyladiva Ratry Maharani",
    division: "PDD (CO)",
    image:
      "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Siti Komariyatul Hasanah",
    division: "PDD",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
  {
    name: "Stefanus Alfrisius Daputra Susanto",
    division: "PDD",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop",
    instagram: "loremipsum",
  },
];

export default assets;
