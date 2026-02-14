import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    process.env.NODE_ENV === 'production' && obfuscator({
      global: true,
      options: {
        compact: true,
        debugProtection: true, 
        stringArray: true, 
        rotateStringArray: true,
      }
    })
  ],
  build: {
    minify: 'esbuild',
    rollupOptions: {
        output: {
            manualChunks: {
                vendor: ['react', 'react-dom', 'zustand', 'firebase/app', 'firebase/firestore'],
                icons: ['lucide-react'] 
            }
        }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})