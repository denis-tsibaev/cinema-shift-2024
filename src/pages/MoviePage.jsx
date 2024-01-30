import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL, getMovie } from '../Service/ServiceApi';

export const MoviePage = () => {
    const [movie, setMovie] = useState({});
    const { filmId } = useParams();

    useEffect(() => {
        getMovie(filmId)
            .then(({ data }) => {
                setMovie(data.film);
                console.log(data.film);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [filmId]);

    return (
        <div className="moviePage">
            <h1>{movie.name}</h1>
            <img src={`${BASE_URL}${movie.img}`} width={240} alt={movie.name} />
            <p>{movie.description}</p>
            <p>
                Кинопоиск: <b>{movie.userRatings?.kinopoisk}</b>
            </p>
            <Link to={`/film/${filmId}/schedule`}>
                <button>Посмотреть расписание</button>
            </Link>
        </div>
    );
};
