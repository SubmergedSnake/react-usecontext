import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$13',
            id: 223324
        },
        {
            name: 'Inception',
            price: '$9',
            id: 2312474
        }
    ]);

    return (
        <div>
            {movies.map(movie => (
                <Movie 
                name={movie.name}/>
            ))}
        </div>
    );

}

export default MovieList;