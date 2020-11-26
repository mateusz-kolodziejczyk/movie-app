import React from "react";
const AddToWatchlistButton = ({ movie }) => {

  const handleAddToWatchlist = e => {
    console.log(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchlist}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchlistButton;