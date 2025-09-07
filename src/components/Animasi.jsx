import { motion } from "motion/react";

export function AnimasiNama({ text }) {
  return (
    <motion.h1
      className="text-5xl font-bold mb-4 bg-[var(--color-tertinary)] p-4 text-[var(--color-primary)] rounded-lg"
      initial={{ opacity: 0, x: 20 }} // Keadaan Awal: tak terlihat & sedikit di kanan
      animate={{ opacity: 1, x: 0 }} // Keadaan Akhir: terlihat & di posisi normal
      transition={{ duration: 0.8 }} // Durasi animasi 0.8 detik
    >
      {text}
    </motion.h1>
  );
}

export function AnimasiScroll({ children }) {
  return (
    <motion.div
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

export function AnimasiKanan({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
