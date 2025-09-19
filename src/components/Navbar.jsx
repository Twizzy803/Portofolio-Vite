import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsExpanded(latest > 100);
  });

  // --- MULAI: LOGIKA UNTUK ACTIVE LINK ---
  useEffect(() => {
    // 1. Jika navbar tidak expanded, jangan lakukan apa-apa.
    if (!isExpanded) {
      return;
    }

    // 2. Logika IntersectionObserver sekarang hanya akan berjalan
    //    KETIKA isExpanded menjadi true.
    const sections = ["beranda", "tentang", "proyek", "kontak"];
    const navLinks = sections.map((id) => document.getElementById(`nav-${id}`));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Aktif saat 50% section terlihat
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hapus class 'nav-active' dari semua link
          navLinks.forEach((link) => link?.classList.remove("nav-active"));
          // Tambahkan class ke link yang sesuai
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

    // Fungsi cleanup akan berjalan saat isExpanded berubah menjadi false
    return () => {
      sections.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) observer.unobserve(sectionEl);
      });
    };
  }, [isExpanded]); // 3. 'isExpanded' sebagai dependensi!
  // --- SELESAI: LOGIKA UNTUK ACTIVE LINK ---

  // Varian animasi (tidak ada yang berubah di sini)
  const navbarVariants = {
    initial: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      opacity: 0.8,
    },
    expanded: {
      width: "600px",
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
  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    expanded: { opacity: 1, y: 0 },
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        className="flex justify-center items-center bg-[var(--color-tertinary)]/20 backdrop-blur-md shadow-lg shadow-[var(--color-primary)] overflow-hidden"
        variants={navbarVariants}
        initial="initial"
        animate={isExpanded ? "expanded" : "initial"}
      >
        {isExpanded && (
          <ul className="flex flex-row text-white text-lg space-x-8 font-semibold font-rubik">
            {/* 4. PASTIKAN SETIAP LINK MEMILIKI ID YANG BENAR */}
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
