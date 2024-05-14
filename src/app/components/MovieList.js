export default function MovieList({ movies, deleteMovie }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.director}</p>
          <p>{movie.rating}</p>
          <button onClick={() => deleteMovie(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
