import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistButton from "../components/buttons/addToWatchlist"
const UpcomingMoviesPage = () => {
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
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviesPage;