import React, { useEffect, useState } from 'react';
import { getSchedule } from '../Service/ServiceApi';
import { useParams } from 'react-router-dom';

export const Schedule = () => {
    const { filmId } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getSchedule(filmId).then(({ data }) => {
            setSchedules(data.schedules);
            console.dir(data.schedules);
        });
    }, [filmId]);

    return (
        <div>
            <h1>Расписание</h1>
            <ul>
                {schedules.map(({ date }) => (
                    <li key={date}>
                        <p>{date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
