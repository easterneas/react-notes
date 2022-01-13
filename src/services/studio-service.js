import { studioEndpoint } from '../lib/axios';

export class StudioService {
  static getStudios = async () => await studioEndpoint.get('')
}
