import { GenreService } from '../services/genre-service';

export const genres = {
  // Initial state pada Rematch
  state: {
    list: [],
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
  },

  // Effects di Rematch memiliki cara kerja yang sama
  // seperti async Actions di Redux + Thunk
  effects: (dispatch) => ({
    async getGenres () {
      const { data } = await GenreService.getGenres()
      dispatch({ type: 'genres/set', payload: data })
    }
  })
  // ! NOTE: effects dan reducers akan menyebabkan infinite loop
  // !       jika terdapat nama function yang sama di antara keduanya!
}
