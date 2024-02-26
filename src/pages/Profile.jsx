import React, { useState } from 'react';
import { sendPhoneNumberToGetCode, userSignin } from '../service/serviceApi';

export const Profile = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [regPressed, setRegPressed] = useState(false);

    const userInfo = {
        phone: phone,
        name: name,
        email: email,
        code: otp,
        token: token,
    };

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'phone':
                return setPhone(value);
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            default:
                return;
        }
    };

    const phoneSubmit = () => {
        sendPhoneNumberToGetCode(phone);
    };

    const handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    return (
        <div>
            <h1>Личный кабинет</h1>
            <h2>Регистрация</h2>

            <form className="form" onSubmit={handleSubmit}>
                {regPressed ? (
                    <label>
                        Введите OTP код
                        <input
                            type="text"
                            onChange={e => setOtp(e.target.value)}
                        />
                    </label>
                ) : (
                    <label>
                        Телефон
                        <input
                            type="phone"
                            name="phone"
                            required
                            onChange={handleChange}
                        />
                    </label>
                )}

                {!regPressed ? (
                    <button
                        type="submit"
                        onClick={() => {
                            setRegPressed(true);
                            phoneSubmit();
                        }}
                    >
                        <b>Получить отп код</b>
                    </button>
                ) : (
                    <button
                        disabled={token}
                        type="submit"
                        onClick={async () => {
                            userSignin(userInfo);
                            const apiToken = await userSignin(userInfo);
                            setToken(apiToken);
                            localStorage.setItem('token', apiToken);
                            // console.log(apiToken);
                            // console.log(await userSignin(userInfo));
                        }}
                    >
                        OK
                    </button>
                )}
                {token ? (
                    <>
                        <p>Авторизация прошла успешно!</p>
                        <p>{phone}</p>
                        <p>{name}</p>
                        <p>{email}</p>
                    </>
                ) : null}
            </form>
        </div>
    );
};
