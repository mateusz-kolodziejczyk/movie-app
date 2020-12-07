import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchlistButton from "../components/buttons/addToWatchlist"
import {MoviesContext} from '../contexts/moviesContext'
const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => { 
    return !(m.watchlist === true);
  });
  return (
      <PageTemplate
        title='LatestMovies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default LatestMoviesPage;