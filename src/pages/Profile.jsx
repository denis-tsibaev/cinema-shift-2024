import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '../components/Button';
import {
    sendPhoneNumberToGetCode,
    userSignin,
    userUpdate,
} from '../service/serviceApi';

export const Profile = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(null);
    const [token, setToken] = useState(null);
    const [regPressed, setRegPressed] = useState(false);
    const [disabled, setDisabled] = useState(false);

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

    const handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
    };

    return (
        <>
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
                            <p>
                                {' '}
                                Введите ваш номер, мы отправим код подтверждения
                            </p>
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
                                sendPhoneNumberToGetCode(phone);
                            }}
                        >
                            <p>Получить отп код</p>
                        </button>
                    ) : (
                        <button
                            disabled={token}
                            type="submit"
                            onClick={async () => {
                                const token = await userSignin(userInfo);
                                setToken(token);
                                // localStorage.setItem('token', token);
                            }}
                        >
                            OK
                        </button>
                    )}
                    {token ? (
                        <p>
                            Авторизация по номеру телефона {phone} прошла
                            успешно!
                        </p>
                    ) : null}
                    {token ? (
                        <label>
                            Добавить имя
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                        </label>
                    ) : null}
                    {token ? (
                        <label>
                            Добавить почту
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                            />
                        </label>
                    ) : null}

                    {phone && token ? <p>телефон: {phone}</p> : null}
                    {name ? <p>имя: {name}</p> : null}
                    {email ? <p>почта: {email}</p> : null}
                    {token && !disabled ? (
                        <Button
                            onClick={async () => {
                                const data = await userUpdate({
                                    profile: {
                                        firstname: name,
                                        email: email,
                                    },
                                    phone,
                                });
                                console.log(data.success);
                                setDisabled(data.success);
                                toast('Данные обновлены');
                            }}
                            disabled={disabled}
                        >
                            Сохранить
                        </Button>
                    ) : null}

                    {token && disabled ? (
                        <>
                            <Button>
                                <Link style={{ color: '#fff' }} to="/tickets">
                                    Билеты
                                </Link>
                            </Button>
                        </>
                    ) : null}
                </form>
            </div>
            <ToastContainer />
        </>
    );
};
