import React, { useState } from 'react';
import Movie from './Movie';

const listStyle = {
    background: 'darkslategray'
}

const MovieList = () => {

    return (
        <div style={listStyle}>
            {/*{movies.map(movie => (
                <Movie 
                name={movie.name}
                price={movie.price}
                key={movie.id}
            />*/}
            ))}
        </div>
    );

}

export default MovieList;