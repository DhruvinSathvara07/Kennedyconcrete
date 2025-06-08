import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // This is important for SPA routing
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },

  // For development server
  server: {
    historyApiFallback: true,
  },

  // For production build - this handles the 404 issue
  preview: {
    historyApiFallback: true,
  }
})