import {getMoviesList} from '../utils/movieUtils.js';

// Settea la lista de peliculas que se creo en movieUtils.js
const moviesList = getMoviesList();

export function getMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(moviesList);
            reject('Hubo un problema al querer consultar las peliculas');
        }, 2000)
    });
}