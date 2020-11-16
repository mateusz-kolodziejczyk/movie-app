import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const toDo = () => true;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);
  
  console.log(movies);
  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        buttonHandler={toDo}
      />
  );
};

export default UpcomingMoviesPage;