import React from 'react';

const MovieList = () => {

    return (
        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    );

}

export default MovieList;