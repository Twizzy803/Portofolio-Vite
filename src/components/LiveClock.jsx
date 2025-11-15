import React, { useState, useEffect } from "react";

export function LiveClock({ className }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Mengatur interval untuk memperbarui waktu setiap detik
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen dilepas (unmount)
    return () => clearInterval(timerId);
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  // Format waktu ke format HH:MM (misal: 13:22)
  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    // Gunakan div sebagai kontainer utama
    <div className={`absolute w-16 h-16 opacity-40 ${className}`}>
      {formattedTime}
    </div>
  );
}
