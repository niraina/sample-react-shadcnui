import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets') },
      { find: '@apps', replacement: path.resolve(__dirname, 'src/apps') },
      { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') }
    ],
  },
})