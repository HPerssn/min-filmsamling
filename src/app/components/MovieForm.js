import { useState } from "react";

export default function MovieForm({ addMovie }) {
  const [movie, setMovie] = useState({ title: "", director: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.title.trim() && movie.director.trim()) {
      addMovie(movie);
      setMovie({ title: "", director: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={movie.director}
        onChange={handleChange}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
