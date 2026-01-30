import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadEnv } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/curriculumVitae/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: env.VITE_APP_PORT ? parseInt(env.VITE_APP_PORT) : 5173,
      open: env.VITE_APP_ENVIROMENT === 'development' ? '/curriculumVitae/' : true,
      host: env.VITE_APP_ENVIROMENT === 'development' ? '127.0.0.1' : undefined,
    },
  };
});