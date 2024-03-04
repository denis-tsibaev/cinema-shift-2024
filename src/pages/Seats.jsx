// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const Seats = ({ hallName, places, time }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="seats-container">
        <h1>Выбор места</h1>
        <h2>
          {hallName === 'Red'
            ? 'Красный зал'
            : hallName === 'Green'
              ? 'Зеленый зал'
              : 'Синий зал'}
          , сеанс на: {time}
        </h2>
        <ol>
          {places.map((row, i) =>
            row.map((seat, j) => (
              <>
                <li>
                  {i + 1} ряд
                  <label>
                    {/* {seat.price} */}
                    <input type="checkbox" className="input-checkbox-seat" />
                  </label>
                </li>
              </>
            )),
          )}
        </ol>
      </div>
      <Button onClick={toggleModal}>Подтвердить</Button>
      {showModal && (
        <Modal>
          <h2>Вы выбрали места</h2>
          <p>Перейти к оплате билетов на выбранный сеанс?</p>
          <br />
          <br />
          <br />
          <Link to="/profile" style={{ color: 'white' }}>
            <Button>Перейти</Button>
          </Link>
          <Button onClick={toggleModal}>Отмена</Button>
        </Modal>
      )}
    </>
  );
};
