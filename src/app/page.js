"use client";
import { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import MovieSort from "./components/MovieSort";

export default function HomePage() {
  const [movies, setMovies] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMovies = localStorage.getItem("movies");
      if (savedMovies) {
        return JSON.parse(savedMovies);
      } else {
        return [];
      }
    } else {
      return [];
    }
  });

  const addMovie = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };

  const deleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };

  return (
    <div>
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <MovieForm addMovie={addMovie} />
      <MovieSort setMovies={setMovies} movies={movies} />
    </div>
  );
}
