import { genreEndpoint } from '../lib/axios';

export class GenreService {
  static getGenres = async () => await genreEndpoint.get('')
  static getOneGenre = async (studioId) => await genreEndpoint.get(`/${studioId}`)
}
