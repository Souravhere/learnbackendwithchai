import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // here will will added the servier proxy
  server:{
    // with this proxy we are telling vite to redirect all the request that start with /api to http://localhost:4000
    proxy:{
      '/api': "http://localhost:4000"
    },
  },
  plugins: [react()],
})
