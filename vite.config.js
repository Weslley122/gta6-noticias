import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  // Servidor de desenvolvimento só na própria máquina (não aparece na rede).
  server: { host: 'localhost' },
  preview: { host: 'localhost' },
  build: {
    sourcemap: false, // não publica o código-fonte original
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacidade: resolve(__dirname, 'privacidade.html'),
        termos: resolve(__dirname, 'termos.html'),
      },
    },
  },
})
