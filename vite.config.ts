import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '#': path.resolve(__dirname, "./src/assets/css"),
      '$': path.resolve(__dirname, "./src/assets"),
      '&': path.resolve(__dirname, "./src/assets/img")
    }
  },
  build: {
    target: "es2019",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  base: "/"
})
