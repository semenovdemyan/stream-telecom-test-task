import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname аналог для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// получаем абсолютный путь к корню проекта без process
const projectRoot = path.resolve(__dirname);

export default defineConfig(({ mode }) => {
  // загружаем .env или .env.production
  const env = loadEnv(mode, projectRoot, '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
