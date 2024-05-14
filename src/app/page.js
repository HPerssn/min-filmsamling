"use client";
import React, { useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  return (
    <div>
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
}

export default HomePage;
