import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TIDAK ADA LAGI BLOK 'css: { postcss: { ... } }' DI SINI
  server: {
    port: 8033,
    host: true,
  },
});
