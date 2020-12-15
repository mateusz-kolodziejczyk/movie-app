import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
  const { movieId } = props.match.params;
  
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieReviewPage;