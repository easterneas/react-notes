import { UserService } from '../services/user-service';

export const base = {
  // Initial state pada Rematch
  state: {
    title: "React Notes",
    menus: [
      { name: 'Home', to: '/', type: 'internal' },
      { name: '18-21 - Concepts', to: '/concepts', type: 'internal' },
      { name: '20 - Hooks', to: '/hooks', type: 'internal' },
      { name: '21 - Fetching', to: '/fetching', type: 'internal' },
      { name: '23 - Styling', to: '/styling', type: 'internal' },
      { name: '24 - Router', to: '/router', type: 'internal' },
      { name: '25-26 - Redux di React', to: '/redux', type: 'internal' },
      { name: '27 - React Testing', to: '/testing', type: 'internal' },
    ],
    // Menu ini ditampilkan jika user belum login
    reduxMenus: [
      { name: 'Apa itu Redux?', to: '/redux', type: 'internal' },
      { name: 'Login', to: '/redux/login', type: 'internal' },
      { name: 'Register', to: '/redux/register', type: 'internal' },
    ],
    // Menu ini ditampilkan jika user sudah login
    reduxAuthenticatedMenus: [
      { name: 'Apa itu Redux?', to: '/redux', type: 'internal' },
      { name: 'Movies', to: '/redux/movies', type: 'internal' },
      { name: 'Studios', to: '/redux/studios', type: 'internal' },
    ],

    // User Authentication state
    userState: {
      name: ""
    },
    // akan terisi dengan name ketika sudah login
    // sebagai pengganti state isLoggedIn
  },

  // Reducers sama seperti cara kerja reducer di Redux,
  // hanya saja:
  // 1 - kita tidak perlu set default parameter pada parameter state,
  // 2 - cara kerja Reducers sama persis seperti dispatch dengan plain
  //     object atau object literal (atau {}) biasa, pada Redux
  reducers: {
    setTitle (state, payload) {
      return { ...state, title: payload }
    },

    setUserState (state, payload) {
      return { ...state, userState: { name: payload } }
    },
  },

  // Effects di Rematch memiliki cara kerja yang sama
  // seperti async Actions di Redux + Thunk
  // contoh:
  effects: dispatch => ({
    login: async (payload) => {
      const { email, password } = payload
      const { data } = await UserService.login({ email, password })

      if(data) {
        localStorage.setItem('token', data.token)
        dispatch({ type: 'base/setUserState', payload: data.name })

        return 'success'
      } else throw 'fail'
    },

    logout: async () => {
      const response = await UserService.logout()

      if(response.status === 200) {
        localStorage.removeItem('token')
        dispatch({ type: 'base/setUserState', payload: "" })

        return 'success'
      } else throw 'fail'
    },

    register: async (payload) => {
      const { name, email, password } = payload
      const { data } = await UserService.register({ name, email, password })

      if(data) {
        localStorage.setItem('token', data.token)
        dispatch.base.setUserState(data.name)

        return 'success'
      } else throw 'fail'
    },

    guard: async () => {
      const response = await UserService.guard()

      if(response.status === 200) {
        return 'success'
      } else {
        localStorage.removeItem('token')
        dispatch({ type: 'base/setUserState', payload: "" })

        throw 'fail'
      }
    }
  })
  // ! WARNING: effects dan reducers akan menyebabkan infinite loop
  // !          jika terdapat nama function yang sama di antara keduanya!
}
