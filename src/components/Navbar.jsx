import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react"; // Diperbaiki importnya
import { useIsMobile } from "../hooks/useMobile"; // 1. Impor hook baru kita

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile(); // 2. Gunakan hook untuk mendapatkan status mobile

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsExpanded(latest > 100);
  });

  // Logika IntersectionObserver tetap sama...
  useEffect(() => {
    if (!isExpanded) return;
    // ... (seluruh kode IntersectionObserver Anda di sini)
    const sections = ["beranda", "tentang", "proyek", "kontak"];
    const navLinks = sections.map((id) => document.getElementById(`nav-${id}`));
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link?.classList.remove("nav-active"));
          const activeLink = document.getElementById(`nav-${entry.target.id}`);
          activeLink?.classList.add("nav-active");
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) observer.observe(sectionEl);
    });
    return () => {
      sections.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) observer.unobserve(sectionEl);
      });
    };
  }, [isExpanded]);

  // --- MULAI: PERUBAHAN PENTING ADA DI SINI ---
  // 3. Buat varian animasi menjadi dinamis
  const navbarVariants = {
    initial: {
      width: isMobile ? "64px" : "80px", // Lebih kecil di mobile
      height: isMobile ? "64px" : "80px",
      borderRadius: "50%",
      opacity: 0.8,
    },
    expanded: {
      // Gunakan nilai yang berbeda untuk mobile dan desktop
      width: isMobile ? "90vw" : "600px", // '90vw' berarti 90% dari lebar layar
      height: "64px",
      borderRadius: "9999px",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  // Varian untuk item link tetap sama
  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    expanded: { opacity: 1, y: 0 },
  };
  // --- SELESAI ---

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        className="flex justify-center items-center bg-[var(--color-tertinary)]/20 backdrop-blur-md shadow-lg shadow-[var(--color-primary)] overflow-hidden"
        variants={navbarVariants}
        initial="initial"
        animate={isExpanded ? "expanded" : "initial"}
      >
        {isExpanded && (
          // 4. Gunakan class responsif untuk styling link
          <ul className="flex flex-row text-white text-base md:text-lg space-x-4 md:space-x-8 font-semibold font-rubik">
            <motion.li variants={navItemVariants}>
              <a href="#beranda" id="nav-beranda" className="nav-link">
                Beranda
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#tentang" id="nav-tentang" className="nav-link">
                Tentang
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#proyek" id="nav-proyek" className="nav-link">
                Proyek
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#kontak" id="nav-kontak" className="nav-link">
                Kontak
              </a>
            </motion.li>
          </ul>
        )}
      </motion.nav>
    </div>
  );
}
