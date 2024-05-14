export default function MovieList({ movies, deleteMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h2>{movie.title}</h2>
          <p>{movie.director}</p>
          <p>{movie.rating}</p>
          <button onClick={() => deleteMovie(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
