import React, { useEffect } from "react";

export default function Navbar() {
  // --- BAGIAN LOGIKA (useEffect) ---
  // Logika ini akan berjalan setelah komponen Navbar selesai dirender.
  useEffect(() => {
    const sections = ["beranda", "tentang", "proyek", "kontak"];
    // Nav links sekarang ada di dalam komponen ini, jadi kita tidak perlu mencarinya
    // di seluruh dokumen. Logika IntersectionObserver tetap sama.
    const navLinks = sections.map((id) => document.getElementById(`nav-${id}`));

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hapus class 'nav-active' dari semua link
          navLinks.forEach((link) => {
            if (link) link.classList.remove("nav-active");
          });

          // Tambahkan class 'nav-active' ke link yang sesuai
          const activeLink = document.getElementById(`nav-${entry.target.id}`);
          if (activeLink) {
            activeLink.classList.add("nav-active");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Mengamati setiap section di halaman
    sections.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    // Fungsi cleanup: berhenti mengamati saat komponen tidak lagi digunakan
    return () => {
      sections.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) {
          observer.unobserve(sectionEl);
        }
      });
    };
  }, []); // Array dependensi kosong agar hanya berjalan sekali saat komponen mount

  // --- BAGIAN TAMPILAN (JSX) ---
  // Kode HTML Anda diubah menjadi JSX.
  // Perhatikan: `class` diubah menjadi `className`.
  return (
    <section className="z-10 fixed w-full">
      <header className="flex text-white bg-[var(--color-secondary)] p-5">
        <div className="flex flex-row ml-5 items-center justify-between w-full">
          <h1 className="text-5xl font-bold">Portofolio</h1>
          <div className="ml-10">
            <ul className="flex flex-row text-xl space-x-10 mr-100 font-semibold">
              <li>
                <a href="#beranda" id="nav-beranda" className="nav-link">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" id="nav-tentang" className="nav-link">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#proyek" id="nav-proyek" className="nav-link">
                  Proyek
                </a>
              </li>
              <li>
                <a href="#kontak" id="nav-kontak" className="nav-link">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
}
