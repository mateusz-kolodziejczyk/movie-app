import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import DiscoverSearchForm from '../components/discoverSearchForm';
import {MoviesContext} from '../contexts/moviesContext';


const MovieListPage = () => {
  const context = useContext(MoviesContext);
  /*const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });*/
  console.log(context.favorites);
  const movies = context.movies.filter((m) => {
    return !context.favorites.find((f) => {
        return m.id === f.id;
    })
  })

  return (
    <>
    <DiscoverSearchForm/>
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
    </>
  );
};
export default MovieListPage;