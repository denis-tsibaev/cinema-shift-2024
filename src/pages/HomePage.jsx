import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, getMoviesToday } from '../Service/ServiceApi';
import { Button } from '../components/Button';

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

    // console.log('movies', movies);
    return (
        <div>
            {movies && (
                <>
                    <h1 className="afisha-title">Афиша</h1>
                    <ul className="movieList">
                        {movies.map(film => (
                            <li key={film.id} className="movieItem">
                                <img
                                    src={`${BASE_URL}${film.img}`}
                                    alt={film.name}
                                />
                                <h3 className="afisha-movie-name">
                                    {film.name}
                                </h3>
                                <Link to={`/film/${film.id}`}>
                                    <Button text="Подробнее" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
