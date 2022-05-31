const API_KEY = process.env.REACT_APP_API_KEY;

export function getMovieByGenre(genre) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${randomNumber(100,0)}&sort_by=popularity.desc&with_genres=${genre}`)
}

export function randomNumber(max, min){
    return Math.round(min + Math.random() * (max-min))
}
