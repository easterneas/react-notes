import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default (({ mode }) => {
  // * lanjutan dari file src/lib/axios.js
  // * Note: di vite.config.js, bedanya, saya gunakan process.env.
  // *       Mengapa? Karena aplikasi React yang sudah berbasis ESModule
  // *       tidak mengenal process.env, sementara Vite (vite.config.js
  // *       lebih tepatnya) masih mengenal process.env.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  // ! proses di atas HARUS ditambahkan dulu, karena file .env yang kita
  // ! sudah buat masih belum dikenal oleh Vite pada proses defineConfig() ini.

  return defineConfig({
    plugins: [react()],

    // Cara kerja server.proxy di Vite itu sama seperti
    // cara kita melakukan proxy melalui package.json.

    // Namun, dikarenakan di sini kita gunakan Vite, pengaturan
    // proxy di package.json secara otomatis tidak berlaku.
    server: {
      proxy: {
        // key ini berisi endpoint yang kita tuju
        // dari pemanggilan fetch().
        // Contoh di sini adalah untuk fetch()
        // yang awalannya adalah '/users', seperti
        // fetch('/users/1/todos')
        '/users': {
          target: process.env.VITE_BASE_JSONPLACEHOLDER_URL,
          // changeOrigin berarti kita mengubah origin
          // dari endpoint yang dituju.
          changeOrigin: true,
        },
        // ! Note: proxy berikut tidak berjalan pada Axios.
        '/register': {
          target: process.env.VITE_BASE_SESS26_URL,
          changeOrigin: true
        },
        '/login': {
          target: process.env.VITE_BASE_SESS26_URL,
          changeOrigin: true
        },
        '/movies': {
          target: process.env.VITE_BASE_SESS26_URL + '/movies',
          changeOrigin: true
        },
        '/studios': {
          target: process.env.VITE_BASE_SESS26_URL + '/studios',
          changeOrigin: true
        },
        '/genres': {
          target: process.env.VITE_BASE_SESS26_URL + '/genres',
          changeOrigin: true
        }
      }
    }
  })
})
