import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This must match your GitHub Repository name exactly.
  // If your repo is https://github.com/cbjdsports/OrthoFlow -> use '/OrthoFlow/'
  base: '/OrthoFlow/',
})