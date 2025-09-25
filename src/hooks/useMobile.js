// hooks/useIsMobile.js

import { useState, useEffect } from "react";

export function useIsMobile() {
  // Kita akan mengecek dua hal: apakah pointer-nya kasar (sentuhan) ATAU layarnya kecil.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query untuk mendeteksi perangkat sentuh (pointer kasar)
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)");
    // Media query untuk mendeteksi layar kecil
    const isSmallScreen = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      // Sebuah perangkat dianggap "mobile" jika itu adalah perangkat sentuh ATAU layarnya sangat kecil.
      setIsMobile(hasCoarsePointer.matches || isSmallScreen.matches);
    };

    // Panggil sekali saat pertama kali dijalankan
    handleResize();

    // Tambahkan listener untuk resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}