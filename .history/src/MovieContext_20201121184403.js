import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
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
        <MovieContext.Provider value={'Hello'}>
            {props.children}
        </MovieContext.Provider>
    );
}