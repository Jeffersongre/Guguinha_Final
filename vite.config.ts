import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FINAL/', // MUITO IMPORTANTE
  plugins: [react()],
})
