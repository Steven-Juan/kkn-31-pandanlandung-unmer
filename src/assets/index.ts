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
  hero_img,
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

export default assets;
