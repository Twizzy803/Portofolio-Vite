import { motion } from "motion/react";
import React, { useMemo } from "react";

export function AnimasiNama({ text }) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, x: 20 }} // Keadaan Awal: tak terlihat & sedikit di kanan
      animate={{ opacity: 1, x: 0 }} // Keadaan Akhir: terlihat & di posisi normal
      transition={{ duration: 0.8 }} // Durasi animasi 0.8 detik
    >
      {text}
    </motion.h1>
  );
}

export function AnimasiScroll({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // Ganti 'animate' menjadi 'whileInView'
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // Animasi hanya berjalan sekali
    >
      {children}
    </motion.div>
  );
}

export function AnimasiKiri({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimasiKanan({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimasiText({ text, className }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className={className}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Fungsi untuk mengacak array. Kita tetap butuh ini untuk urutan delay.
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export function PixelatedImage({ src, alt, gridSize = 20, className }) {
  // Buat array indeks yang berurutan untuk posisi grid
  const gridIndexes = useMemo(
    () => Array.from({ length: gridSize * gridSize }, (_, i) => i),
    [gridSize]
  );

  // Buat array acak untuk delay animasi
  const shuffledIndexes = useMemo(
    () => shuffle([...gridIndexes]),
    [gridIndexes]
  );

  // Variasi animasi untuk kontainer
  const gridContainer = {
    // Kita tidak butuh staggerChildren lagi di sini
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // Variasi animasi untuk setiap piksel
  const pixel = {
    visible: (i) => ({
      // Terima 'i' dari prop 'custom'
      opacity: 1,
      scale: 1,
      transition: {
        // Gunakan nilai dari array acak untuk menentukan delay
        delay: shuffledIndexes[i] * 0.005, // Sesuaikan pengali untuk kecepatan
      },
    }),
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      className={`grid ${className}`}
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      variants={gridContainer}
      initial="hidden"
      animate="visible"
      aria-label={alt}
    >
      {/* Kita map menggunakan array yang BERURUTAN */}
      {gridIndexes.map((index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        return (
          <motion.div
            key={index}
            className="aspect-square"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              backgroundPosition: `${(col / (gridSize - 1)) * 100}% ${
                (row / (gridSize - 1)) * 100
              }%`,
            }}
            variants={pixel}
            custom={index} // <-- Kirim indeks BERURUTAN ke 'custom'
          ></motion.div>
        );
      })}
    </motion.div>
  );
}
