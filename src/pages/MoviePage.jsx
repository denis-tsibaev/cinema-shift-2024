import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { BASE_URL, getMovie } from '../service/serviceApi';

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
            <img src={`${BASE_URL}${movie.img}`} alt={movie.name} />
            <h2 className="moviePage__title">{movie.name}</h2>
            <p>{movie.description}</p>
            <p>
                Кинопоиск: <b>{movie.userRatings?.kinopoisk}</b>
            </p>
            <Link to={`/film/${filmId}/schedule`}>
                <Button>Посмотреть расписание</Button>
            </Link>
        </div>
    );
};
