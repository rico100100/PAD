
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying as a Project Page, set `base` to '/<repo>/'.
// For User/Org Page or local, empty string works.
export default defineConfig({
  plugins: [react()],
  base: '', // set to '/your-repo/' if needed for GitHub Pages project site
})
