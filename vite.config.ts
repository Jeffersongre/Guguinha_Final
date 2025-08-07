import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // <- nome exato do repositório
  plugins: [react()],
})
