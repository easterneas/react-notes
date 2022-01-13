import axios from 'axios';

// ? Di Vite, saya gunakan import.meta.env untuk mengambil
// ? value pada file dotenv.
// ? Buka file .env.example untuk melihat struktur file dotenv.
const baseURL = import.meta.env.VITE_BASE_SESS26_URL

const baseEndpoint = axios.create({ baseURL, proxy: { '/': {
  target: baseURL,
  changeOrigin: true
} }})
const movieEndpoint = axios.create({ baseURL: `${baseURL}/movies` })
const genreEndpoint = axios.create({ baseURL: `${baseURL}/genres` })
const studioEndpoint = axios.create({ baseURL: `${baseURL}/studios` })

function injectToken (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`

  return config
}

baseEndpoint.interceptors.request.use(injectToken)
genreEndpoint.interceptors.request.use(injectToken)
movieEndpoint.interceptors.request.use(injectToken)
studioEndpoint.interceptors.request.use(injectToken)

export { baseEndpoint, movieEndpoint, studioEndpoint, genreEndpoint }
