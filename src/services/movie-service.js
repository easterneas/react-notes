import { movieEndpoint } from '../lib/axios';

export class MovieService {
  static getMovies = async () => await movieEndpoint.get('/')
  static getOneMovie = async (movieId) => await movieEndpoint.get(`/${movieId}`)
  static addNewMovie = async (body) => await movieEndpoint.post('/', body)
  static updateMovie = async (movieId, body) => await movieEndpoint.put(`/${movieId}`, body)
  static deleteMovie = async (movieId) => await movieEndpoint.delete(`/${movieId}`)
}
