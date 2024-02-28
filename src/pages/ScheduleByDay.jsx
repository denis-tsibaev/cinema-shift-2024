import { useState } from 'react';
import { Button } from '../components/Button';
import { Seats } from './Seats';

export const ScheduleByDay = ({ schedules, index }) => {
  const [hallName, setHallName] = useState('red');
  const [places, setPlaces] = useState([]);
  const [time, setTime] = useState(null);

  //   console.log('hallName', hallName);
  //   console.log('places', places);

  return (
    <>
      <ol className="dateList">
        {schedules[index]?.seances?.map(({ time, hall }, i) => (
          <li key={i} className="dateItem">
            <Button
              style={{ backgroundColor: hall.name }}
              onClick={() => {
                // console.log(schedules[index].seances[i].hall.places);
                setHallName(schedules[index].seances[i].hall.name);
                setPlaces(schedules[index].seances[i].hall.places);
                setTime(time);
              }}
            >
              {time}-
              {hall.name === 'Red'
                ? 'Красный зал'
                : hall.name === 'Green'
                  ? 'Зеленый зал'
                  : hall.name === 'Blue'
                    ? 'Синий зал'
                    : hall.name}
            </Button>
          </li>
        ))}
      </ol>
      <Seats hallName={hallName} places={places} time={time} />
    </>
  );
};
