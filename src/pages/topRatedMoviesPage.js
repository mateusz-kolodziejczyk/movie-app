import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchlistButton from "../components/buttons/addToWatchlist"
import {MoviesContext} from '../contexts/moviesContext'

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated;
  return (
      <PageTemplate
        title='Popular Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default TopRatedMoviesPage;