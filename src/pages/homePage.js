import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import DiscoverSearchForm from '../components/discoverSearchForm';
import { MoviesContext } from '../contexts/moviesContext';


const MovieListPage = (props) => {
  // Find out 
  const params = new URLSearchParams(props.location.search);
  const location = useLocation();
  const path = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);

  const context = useContext(MoviesContext);
  // Add to movies
  const moviesToAdd = context.movies.filter((m) => {
    return !context.favorites.find((f) => {
      return m.id === f.id;
    })
  })
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (path === "search") {
      context.loadMoviesQueryString(params.toString());
    }
    else {
      context.loadMovies();
      console.log("loaded movie");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Change the state of movies every time its changed
  useEffect(() => {
    setMovies(context.movies.filter((m) => {
      return !context.favorites.find((f) => {
        return m.id === f.id;
      })
    }));
  }, [context.movies, context.favorites])


  return (
    <>
      <DiscoverSearchForm />
      {movies ? <PageTemplate
        title="No. Movies"
        movies={movies}  /* Changed */
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />;
        }}
      /> : (<></>)}

    </>
  );
};
export default MovieListPage;