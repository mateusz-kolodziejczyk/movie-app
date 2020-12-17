import React from "react";
import "./personPage.css";
import PersonHeader from "../personHeader";
import PersonImages from "../personImages";
import PersonMovieCredits from "../personMovieCredits";

const TemplatePersonPage = ({ person, images,credits, children }) => {
  
  return (
    <>
      <PersonHeader person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
        <div className="col-9">
          {children}
        </div>
      </div>
      <PersonImages images={images}/>
      <PersonMovieCredits credits={credits}/>
    </>
  );
};

export default TemplatePersonPage;