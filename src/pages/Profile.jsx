import React, { useState } from 'react';
import { regNewUser } from '../service/serviceApi';

export const Profile = () => {
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPhone, setNewUserPhone] = useState('');

    const newUser = {
        name: newUserName,
        email: newUserEmail,
        phone: newUserPhone,
        // code: 345231,
    };

    const onNameChange = e => {
        setNewUserName(e.target.value);
    };
    const onEmailChange = e => {
        setNewUserEmail(e.target.value);
    };
    const onPhoneChange = e => {
        setNewUserPhone(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        regNewUser(newUser);
        console.log(newUser);
        e.currentTarget.reset();
    };

    return (
        <div>
            <h1>Личный кабинет</h1>
            <h3>Зарегистрироваться</h3>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <label>
                    Телефон
                    <input
                        type="phone"
                        name="phone"
                        required
                        onChange={onPhoneChange}
                    />
                </label>

                <label>
                    Имя
                    <input type="text" name="name" onChange={onNameChange} />
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={onEmailChange} />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};
