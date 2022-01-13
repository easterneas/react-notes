import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MovieForm from '../../components/session26/movies/MovieForm';
import MovieList from '../../components/session26/movies/MovieList';

const inputValues = {
  name: '',
  yearReleased: '',
  StudioId: '',
  GenreId: ''
}

export default function Movies() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const movies = useSelector(state => state.movies.list)
  const studios = useSelector(state => state.studios.list)
  const genres = useSelector(state => state.genres.list)

  useEffect(() => {
    dispatch({ type: 'movies/getMovies' })
    dispatch({ type: 'studios/getStudios' })
    dispatch({ type: 'genres/getGenres' })
  }, [])

  const addMovie = (values, { setSubmitting }) => {
    dispatch({ type: 'movies/addNewMovie', payload: values })
    .then(() => alert("Successfully added new movie to collection!"))
    .catch(e => alert(e))
    .finally(() => setSubmitting(false))
  }

  // TODO: akan di-update di v1.1
  // const updateMovie = (values, { setSubmitting }) => {
  //   dispatch({ type: 'movies/updateMovie', payload: values })
  //   .then(() => {
  //     alert("Successfully updated a movie!")
  //   })
  //   .catch(e => alert(e))
  //   .finally(() => setSubmitting(false))
  // }

  const deleteMovie = (id) => {
    dispatch({ type: 'movies/deleteMovie', payload: id })
    .then(() => alert("Successfully deleted a movie!"))
    .catch(e => alert(e))
  }

  const logout = () => {
    dispatch({ type: 'base/logout' })
    .then(() => {
      alert("Successfully logged out!")
      navigate("/redux/login")
    })
    .catch(e => alert(e))
  }

  return (
    <>
      <div>
        <h3>Create New Movie</h3>
        <MovieForm submitHandler={addMovie} inputValues={inputValues} studios={studios} genres={genres}/>
      </div>

      <div>
        <MovieList moviesData={movies} deleteHandler={deleteMovie} />
      </div>

      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  )
}
