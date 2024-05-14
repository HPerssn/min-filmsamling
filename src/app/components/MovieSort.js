export default function MovieSort({ setMovies, movies }) {
  const sortMoviesByTitle = (order) => {
    const sortedMovies = [...movies].sort((a, b) =>
      order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setMovies(sortedMovies);
  };

  const sortMoviesByRating = (order) => {
    const sortedMovies = [...movies].sort((a, b) =>
      order === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
    setMovies(sortedMovies);
  };

  return (
    <div>
      <select onChange={(e) => sortMoviesByTitle(e.target.value)}>
        <option value="">Sortera titel</option>
        <option value="asc">A-Ö</option>
        <option value="desc">Ö-A</option>
      </select>
      <select onChange={(e) => sortMoviesByRating(e.target.value)}>
        <option value="">Sortera rangordning</option>
        <option value="asc">Låg till hög</option>
        <option value="desc">Hög till låg</option>
      </select>
    </div>
  );
}
