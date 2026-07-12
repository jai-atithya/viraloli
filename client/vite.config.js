import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      workbox: {
        globPatterns: ["**/*.{jsx,js,css,html,png,svg,ico}"],
      },

      manifest: {
        name: "Viraloli",
        short_name: "Viraloli",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/src/assets/tamilLogo.png",
            type: "image/png",
          },
        ],
      },
    }),
  ],
})