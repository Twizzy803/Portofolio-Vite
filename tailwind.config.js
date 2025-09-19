/** @type {import('tailwindcss').Config} */
export default {
  // BAGIAN INI SANGAT KRUSIAL
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Bagian 'theme' untuk semua nilai desain
  theme: {
    extend: {
      colors: {
        primary: "#393E46",
        secondary: "#5C636E",
        tertiary: "#F8B400",
        quaternary: "#F7F7F7",

        // Nama kustom Anda sudah benar di sini
        "custom-primary": "#FF5733", // Contoh: Warna oranye terang
        "custom-secondary": "#C70039", // Contoh: Warna merah tua
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        kode: ['"Kode Mono"', "monospace"],
      },
    },
  },

  // Bagian 'plugins' harus berada di sini, di level atas
  plugins: [],
};
