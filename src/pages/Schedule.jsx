import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../components/Button';
import { getSchedule } from '../service/ServiceApi';
import { ScheduleByDay } from './ScheduleByDay';

export const Schedule = ({
  hallName,
  setHallName,
  places,
  setPlaces,
  time,
  setTime,
  tickets,
  setTickets,
  totalPrice,
  setTotalPrice,
}) => {
  const { filmId } = useParams();
  const [schedules, setSchedules] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getSchedule(filmId).then(({ data }) => {
      setSchedules(data?.schedules);
      //   console.dir(data.schedules);
      //   console.log('data.schedules', data.schedules);
    });
  }, [filmId]);

  return (
    <div>
      <h1>Расписание</h1>

      {schedules.map(({ date }, index) => (
        <Button
          className="schedule-button"
          onClick={() => setIndex(index)}
          key={index}
        >
          {date}
        </Button>
      ))}
      <h2>Выбрана дата: {schedules[index]?.date}</h2>
      <h3>Выберите время и зал</h3>

      <ScheduleByDay
        schedules={schedules}
        index={index}
        hallName={hallName}
        setHallName={setHallName}
        places={places}
        setPlaces={setPlaces}
        time={time}
        setTime={setTime}
        tickets={tickets}
        setTickets={setTickets}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />

      <ToastContainer />
    </div>
  );
};
