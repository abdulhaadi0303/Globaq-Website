import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: './', // Ensures assets load correctly on cPanel
  plugins: [react(),tailwindcss(),]
});
