const MovieList = (props) => {
  console.log(props)
  const { moviesData, editHandler, deleteHandler } = props
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Genre</th>
          <th>Producer</th>
          <th>Released in</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          moviesData.map(movie => (
            <tr key={movie.id} onClick={editHandler}>
              <td>{ movie.id }</td>
              <td>{ movie.name }</td>
              <td>{ movie.Genre.name }</td>
              <td>{ movie.Studio.name }</td>
              <td>{ movie.yearReleased }</td>
              <td>
                <button onClick={editHandler} class="btn btn-sm btn-primary">Edit</button> |
                <button onClick={() => deleteHandler(movie.id)} class="btn btn-sm btn-primary">Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default MovieList
