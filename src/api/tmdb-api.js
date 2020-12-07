export const getMovies = () => {
    return apiRequestWithResults(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`);
}
export const getUpcomingMovies = () => {
    return apiRequestWithResults(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
};

export const getTopRatedMovies = () => {
    return apiRequestWithResults(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`);
}

export const getMovie = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
};

export const getGenres = () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
        .then(res => res.json())
        .then(json => json.genres);
};

export const getMovieCast = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
    .then(res => res.json())
    .then(json => json.cast);
}

export const getMovieReviews = id => {
    return apiRequestWithResults(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`);
};

// Function for any api request that sends out a json file with results, common in this app
// It includes any query to get a list of movies
const apiRequestWithResults = (apiRequest) => {
    return fetch(
        apiRequest
    )
        .then(res => res.json())
        .then(json => json.results);
}