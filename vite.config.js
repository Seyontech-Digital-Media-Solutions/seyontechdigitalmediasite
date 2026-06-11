import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
<<<<<<< HEAD
  base: '/',  // Change this to just '/'
=======
  base: mode === 'production'
    ? '/seyontechdigitalmediasite/'
    : '/',
>>>>>>> f43e37feefdb14e79acdbc38c4b9fcba64d60ee4
}))