// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <h2>Вы купили билеты!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Qui id doloremque nihil aliquam, nam eius illo,
                        cumque est iusto alias sapiente error rerum tempore quo
                        tempora sit! Cupiditate voluptate laborum unde odit
                        repudiandae eaque quis, accusamus blanditiis dicta,
                        autem nostrum illo totam aut mollitia fuga voluptatibus
                        sit culpa. Provident, temporibus?
                    </p>
                    <button type="button" onClick={toggleModal}>
                        Закрыть
                    </button>
                </Modal>
            )}
        </>
    );
};
