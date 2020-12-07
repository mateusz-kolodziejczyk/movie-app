import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCast } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCast(movie.id).then(reviews => {
      setCast(cast);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Actor Name</th>
          <th scope="col">Character Name</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(actor => {
          return (
            <tr key={actor.id}>
              <td>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/h100/${actor.profile_path}`
                      : "./actor-picture-placeholder.png"
                  }
                  className="movie"
                  alt={movie.title}
                />
              </td>
              <td>{actor.name}</td>
              <td>{actor.character}</td>
              <td>
                {" "}
                <Link
                  to={{
                    pathname: `/person/${actor.id}`,
                    state: {
                      actorID: actor.id,
                    }
                  }}
                >
                  Actor Profile
                  </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};