// import { useParams } from 'react-router-dom';

export const Seats = () => {
    // const { hallName } = useParams();
    // console.log(hallName);

    // switch (hallName) {
    //     case hallName === 'Red':
    //         return <div>Red</div>;
    //     case hallName === 'Green':
    //         return <div>Green</div>;
    //     case hallName === 'Blue':
    //         return <div>Blue</div>;

    //     default:
    //         return <div>Default</div>;
    // }

    // const x = [1, 2, 3, 4, 5, 6];

    const red = {
        row: [1, 2, 3, 4, 5, 6],
        seat: 6,
    };

    // for (let i = 0; i <= red.row; i++) {
    //     for (let j = 0; j <= red.seat; j++) {
    //         console.log(i, j);
    //     }
    // }

    // const seatsMarkUp = arr => {
    //     for (let index = 0; index < arr.length; index++) {
    //         console.log(arr[index]);

    //         return (
    //             <label>
    //                 {arr[index]}
    //                 <input
    //                     type="checkbox"
    //                     name=""
    //                     id=""
    //                     className="input-checkbox-seat"
    //                 />
    //             </label>
    //         );
    //     }
    // };

    return (
        <div>
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
    );
};
