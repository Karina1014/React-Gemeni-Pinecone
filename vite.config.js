import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: import.meta.env.VITE_PORT || 3000,  // Usamos la variable de entorno VITE_PORT
    host: '0.0.0.0',  // Asegúrate de que la aplicación escuche en todas las interfaces de red
  }
})
