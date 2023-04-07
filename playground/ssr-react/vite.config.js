import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
]

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
    esbuildOptions: {
      resolveExtensions: extensions,
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    minify: false,
  },
  ssr: {
    noExternal: ['react-native-paper'],
  },
  resolve: {
    extensions: extensions,
    alias: {
      'react-native': 'react-native-web',
    },
  },
})
