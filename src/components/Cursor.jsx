import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MotionCursor() {
  // State untuk melacak varian kursor (default, saat hover link, saat hover teks)
  const [cursorVariant, setCursorVariant] = useState("default");

  // Gunakan useMotionValue untuk melacak posisi mouse tanpa memicu re-render.
  // Ini sangat penting untuk performa!
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Gunakan useSpring untuk membuat gerakan kursor terasa mulus dan "mengikuti"
  const springConfig = { damping: 25, stiffness: 500, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Fungsi ini akan dijalankan setiap kali mouse bergerak
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Tambahkan event listener saat komponen pertama kali dirender
    window.addEventListener("mousemove", moveCursor);

    // Hapus event listener saat komponen dilepas untuk mencegah memory leak
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  // Definisikan berbagai "state" atau "varian" untuk kursor kita
  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "#ffffff", // Warna putih
      mixBlendMode: "difference", // Efek warna keren yang akan membalik warna di belakangnya
      x: -16, // Offset agar pusat lingkaran pas dengan ujung pointer
      y: -16,
    },
    linkHover: {
      height: 80,
      width: 80,
      backgroundColor: "#F8B400", // Warna tertiary Anda saat hover link
      mixBlendMode: "normal",
      x: -40,
      y: -40,
    },
    textHover: {
      height: 12,
      width: 12,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      x: -6,
      y: -6,
    },
  };

  // Logika untuk mendeteksi elemen apa yang sedang di-hover oleh mouse
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setCursorVariant("linkHover"); // Jika di atas link atau tombol
      } else if (e.target.closest("h1, h2, h3, p, span")) {
        setCursorVariant("textHover"); // Jika di atas teks
      } else {
        setCursorVariant("default"); // Jika di tempat lain
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <motion.div
      // Styling dasar untuk kursor
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]" // z-index sangat tinggi
      // Gunakan nilai spring untuk posisi, bukan nilai mouse langsung
      style={{
        translateX: springX,
        translateY: springY,
      }}
      // Terapkan varian animasi
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 800, damping: 40 }} // Transisi cepat untuk perubahan ukuran
    />
  );
}
