import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Puerto que Render espera
  },
  preview: {
    port: 8080, // Configura el puerto para 'vite preview' también
  },
});
