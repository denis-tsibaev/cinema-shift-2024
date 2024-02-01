import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const ScheduleByDay = ({ schedules, index }) => {
    return (
        <ul className="dateList">
            {schedules[index]?.seances?.map(({ time, hall }, i) => (
                <li key={i} className="dateItem">
                    <Link to="seats">
                        <Button style={{ backgroundColor: hall.name }}>
                            {time}-
                            {hall.name === 'Red'
                                ? 'Красный зал'
                                : hall.name === 'Green'
                                  ? 'Зеленый зал'
                                  : hall.name === 'Blue'
                                    ? 'Синий зал'
                                    : hall.name}
                        </Button>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
