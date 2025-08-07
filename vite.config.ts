import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Guguinha_Final/', // <- nome exato do repositório
  plugins: [react()],
})
