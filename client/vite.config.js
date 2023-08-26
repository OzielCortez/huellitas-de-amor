import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    external: ['firebase/auth'],
    // ...otras opciones de Rollup si las tienes
  },
  plugins: [react()],
})
