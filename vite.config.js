import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['assets/emaillogo.png'] // Optional, but only if you want to exclude certain assets
    }
  },
  plugins: [react()],
})
