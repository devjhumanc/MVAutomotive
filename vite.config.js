import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy index.html to 404.html after build
        copyFileSync(
          join(__dirname, 'dist', 'index.html'),
          join(__dirname, 'dist', '404.html')
        )
      },
    },
  ],
  base: '/MVAutomotive/',
  server: {
    port: 3000,
    open: true
  },
})
