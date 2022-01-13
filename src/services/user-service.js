import { baseEndpoint } from '../lib/axios';

export class UserService {
  static register = async (body) => await baseEndpoint.post('/register', body)
  static login = async (body) => await baseEndpoint.post('/login', body)
  static logout = async () => await baseEndpoint.post('/logout')
  static guard = async () => await baseEndpoint.get('/movies')
}
