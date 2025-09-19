import { motion } from "motion/react";

export function FloatingIcon({ src, alt, className }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute w-16 h-16 opacity-80 backdrop-blur-md p-1 rounded-md ${className}`} // Opacity rendah agar tidak terlalu menonjol
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }} // Animasi naik-turun halus
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 2, // Delay acak agar tidak sinkron
      }}
    />
  );
}
