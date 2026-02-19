import React from "react";
import assets from "../assets";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-primary/20 dark:border-surface/20">
      <div className="backdrop-blur-xl bg-surface/50 dark:bg-primary/70 py-16 text-center px-6 sm:px-12 lg:px-24 xl:px-40">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={assets.logo_kkn}
            alt="Logo KKN 31"
            className="w-auto h-16"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base text-primary dark:text-text-invert opacity-80 mb-6">
          Copyright © 2025 KKN 31 Universitas Merdeka Malang. All rights
          reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img
              src={assets.instagram_icon_svg}
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img src={assets.tiktok_icon} alt="TikTok" className="w-5 h-5" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img
              src={assets.blogspot_icon}
              alt="Blogspot"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
