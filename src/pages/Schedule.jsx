import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSchedule } from '../service/serviceApi';

export const Schedule = () => {
    const { filmId } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        getSchedule(filmId).then(({ data }) => {
            setSchedules(data.schedules);
            console.dir(data.schedules);
        });
    }, [filmId]);

    const onDateClick = () => {
        console.log('onDateClick');
        toast.error('Go beyond!', { autoClose: 500, theme: 'colored' });
    };

    return (
        <div>
            <h1>Расписание</h1>
            <ul className="dateList">
                {schedules.map(({ date, seances }) => (
                    <li key={date} className="dateItem">
                        <button onClick={onDateClick}>{date} </button>
                        <ul>
                            {seances.map(({ time, hall }) => (
                                <li key={time}>
                                    {time}
                                    {' - '}
                                    {hall.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <ToastContainer />
        </div>
    );
};
