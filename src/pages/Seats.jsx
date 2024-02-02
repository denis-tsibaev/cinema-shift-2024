import { useParams } from 'react-router-dom';

export const Seats = () => {
    const { hallName } = useParams();
    console.log(hallName);

    return (
        <div>
            <h1>Выбор места</h1>
            <label>
                qwe
                <input type="checkbox" name="" id="" />
            </label>
        </div>
    );
};
