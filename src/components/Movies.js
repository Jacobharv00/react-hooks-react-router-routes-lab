import React from "react";
import { movies } from "../data";

// prettier-ignore
function Movies() {
  const displayMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <h3>Time: {movie.time} minutes</h3>
        Genres:
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
