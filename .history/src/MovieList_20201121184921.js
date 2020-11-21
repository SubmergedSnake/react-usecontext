import React, { useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const listStyle = {
    background: 'darkslategray'
}

const MovieList = () => {
const [movies, setMovies] = useContext(MovieContext);
    return (
        <div style={listStyle}>
            <h1>{value}</h1>
            {/*{movies.map(movie => (
                <Movie 
                name={movie.name}
                price={movie.price}
                key={movie.id}
            />
            ))}*/}
        </div>
    );

}

export default MovieList;