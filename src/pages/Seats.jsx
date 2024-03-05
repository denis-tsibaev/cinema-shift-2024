// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const Seats = ({ hallName, places, time }) => {
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChangeInput = e => {
    if (e.target.checked) {
      setTotalPrice(totalPrice + Number(e.target.value));
    } else {
      setTotalPrice(totalPrice - Number(e.target.value));
    }
  };

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
        <p>Экран</p>
        <hr />
        <br />
        <br />
        <ol className={hallName}>
          {places.map((row, i) =>
            row.map((seat, j) => (
              <>
                <li key={j} className="checkbox-item">
                  <p className="checkbox-item-row">{i + 1}р</p>
                  <p className="checkbox-item-seat">{j + 1}м</p>
                  <label className="label-checkbox">
                    <p className="checkbox-item-price"> {seat.price}</p>
                    {seat.type !== 'BLOCKED' ? (
                      <input
                        type="checkbox"
                        value={seat.price}
                        className="input-checkbox-seat"
                        onChange={handleChangeInput}
                      />
                    ) : (
                      <input
                        disabled
                        type="checkbox"
                        className="input-checkbox-seat"
                      />
                    )}
                  </label>
                </li>
              </>
            )),
          )}
        </ol>
      </div>
      <p>Итого: {totalPrice}</p>
      <Button onClick={toggleModal} disabled={totalPrice === 0}>
        Подтвердить
      </Button>
      {showModal && (
        <Modal>
          <h2>Вы выбрали места</h2>
          <p>Сумма к оплате: {totalPrice}</p>
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
