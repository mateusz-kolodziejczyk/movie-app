import { Link, Route, withRouter } from "react-router-dom"
import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templatePersonPage";
import PersonDetails from "../components/personDetails";
import usePerson from "../hooks/usePerson";
import useImages from "../hooks/useImages";
import useMovieCredits from "../hooks/useMovieCredits";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id);
  const [images] = useImages(id);
  const [credits] = useMovieCredits(id);
  return (
    <>
    {person ?  (
        <>
          <PageTemplate person={person} images={images} credits={credits}>
            <PersonDetails person={person} />
          </PageTemplate>
       </>
    )
    : 
    (
        <p>Waiting for person details </p>
    )
    }
    </>
  );
};

export default withRouter(PersonPage);