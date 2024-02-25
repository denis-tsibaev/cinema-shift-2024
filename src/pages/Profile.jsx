import React, { useState } from 'react';
import { sendPhoneNumberToGetCode, userSignin } from '../service/serviceApi';

export const Profile = () => {
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [regPressed, setRegPressed] = useState(false);
    const [otp, setOtp] = useState(null);

    const userPhoneAndOtp = {
        phone: userPhoneNumber,
        code: otp,
    };

    const phoneSubmit = () => {
        sendPhoneNumberToGetCode(userPhoneNumber);
    };

    const handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    return (
        <div>
            <h1>Личный кабинет</h1>

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
                            onChange={e => setUserPhoneNumber(e.target.value)}
                        />
                    </label>
                )}

                {!regPressed ? (
                    <button
                        type="button"
                        onClick={() => {
                            setRegPressed(true);
                            phoneSubmit();
                        }}
                    >
                        <b>Зарегистрироваться</b>
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            userSignin(userPhoneAndOtp);
                        }}
                    >
                        Войти
                    </button>
                )}
            </form>
        </div>
    );
};
