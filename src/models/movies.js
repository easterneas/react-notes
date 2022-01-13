import { MovieService } from '../services/movie-service';

export const movies = {
  // Initial state pada Rematch
  state: {
    list: [],
    details: {}
  },

  // Reducers sama seperti cara kerja reducer di Redux,
  // hanya saja:
  // - kita tidak perlu set default parameter pada parameter state,
  // - cara kerja Reducers sama persis seperti dispatch dengan plain
  //   object atau object literal -> {} biasa, pada Redux
  reducers: {
    set (state, payload) {
      return { ...state, list: payload }
    },

    setDetails (state, payload) {
      return { ...state, details: payload }
    }
  },

  // Effects di Rematch memiliki cara kerja yang sama
  // seperti async Actions di Redux + Thunk
  effects: (dispatch) => ({
    async getMovies () {
      const { data } = await MovieService.getMovies()
      dispatch({ type: 'movies/set', payload: data })
    },

    async addNewMovie (movie) {
      const response = await MovieService.addNewMovie(movie)

      if(response.status === 201) {
        dispatch.movies.getMovies()
        return 'success'
      } else throw 'fail'
    },

    async updateMovie (id, movie) {
      const response = await MovieService.updateMovie(id, movie)

      if(response.status === 200) {
        dispatch.movies.getMovies()
        return 'success'
      } else throw 'fail'
    },

    async deleteMovie (id) {
      const response = await MovieService.deleteMovie(id)

      if(response.status < 400 ) {
        dispatch.movies.getMovies()
        return 'success'
      } else throw 'fail'
    }
  })
  // ! NOTE: effects dan reducers akan menyebabkan infinite loop
  // !       jika terdapat nama function yang sama di antara keduanya!
}
