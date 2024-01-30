import React, { useEffect, useState } from 'react';
import { BASE_URL, getMoviesToday } from '../Service/ServiceApi';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesToday()
            .then(({ data }) => {
                setMovies(data.films);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    console.log('movies', movies);
    return (
        <div>
            {movies && (
                <>
                    <h1>Афиша</h1>
                    <ul>
                        {movies.map(film => (
                            <li>
                                <h3>{film.name}</h3>
                                <img
                                    src={`${BASE_URL}${film.img}`}
                                    width={240}
                                    alt={film.name}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
