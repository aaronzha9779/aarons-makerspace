import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to '/<your-repo-name>/' before deploying to GitHub Pages
// (project sites are served from a subpath). Leave as '/' for a custom domain.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
