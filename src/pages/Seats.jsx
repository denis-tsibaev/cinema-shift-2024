// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const Seats = () => {
    const [showModal, setShowModal] = useState(false);

    // const navigate = useNavigate();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const red = {
        row: [1, 2, 3, 4, 5, 6],
        seat: 6,
    };

    return (
        <>
            <div className="seats-container">
                <h1>Выбор места</h1>
                {red.row.map(el => (
                    <label key={el}>
                        {el}
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="input-checkbox-seat"
                        />
                    </label>
                ))}
            </div>
            <Button onClick={toggleModal}>Подтвердить</Button>
            {showModal && (
                <Modal>
                    <h2>Вы выбрали места</h2>
                    <p>Перейти к оплате билетов на выбранный сеанс?</p>
                    <br />
                    <br />
                    <br />
                    <Button>
                        <Link to="/profile" style={{ color: 'white' }}>
                            Перейти
                        </Link>
                    </Button>
                    <Button onClick={toggleModal}>Отмена</Button>
                </Modal>
            )}
        </>
    );
};
