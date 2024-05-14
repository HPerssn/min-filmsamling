export default function MovieList({ movies, deleteMovie }) {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          key={i}
          src="../../images/star.png"
          alt="star"
          className="star-image"
        />
      );
    }
    return stars;
  };

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h2>{movie.title}</h2>
          <div className="stars">{renderStars(movie.rating)}</div>
          <img
            src="../../images/delete.png"
            alt="delete"
            onClick={() => deleteMovie(index)}
            className="delete-image"
          />
        </div>
      ))}
    </div>
  );
}
