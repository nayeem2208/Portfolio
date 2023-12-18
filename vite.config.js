import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/Portfolio/",
  plugins: [react()],
  server:{
    port:2000,
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:3000',
    //     changeOrigin:true
    //   },
    // },
  },
})
