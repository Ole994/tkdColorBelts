import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Legger til relativ base-sti for korrekt håndtering av ressurser i produksjon
});

