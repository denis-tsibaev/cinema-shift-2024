import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { sendPhoneNumberToGetCode, userSignin } from '../service/serviceApi';

export const Profile = ({
  phone,
  setPhone,
  name,
  setName,
  card,
  setCard,
  expDate,
  setExpDate,
  cvv,
  setCvv,
  email,
  setEmail,
  otp,
  setOtp,
  token,
  setToken,
  userInfo,
  tickets,
  totalPrice,
}) => {
  const [regPressed, setRegPressed] = useState(false);
  //   const [disabled, setDisabled] = useState(false);
  const [showModal, setShowModal] = useState(true);

  console.log(tickets, totalPrice);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'phone':
        return setPhone(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'card':
        return setCard(value);
      case 'expDate':
        return setExpDate(value);
      case 'cvv':
        return setCvv(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const navigate = useNavigate();

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
                disabled={token}
              />
            </label>
          ) : (
            <label>
              <p> Введите ваш номер, мы отправим код подтверждения</p>
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
            <Button
              style={{ width: '200px' }}
              type="submit"
              onClick={() => {
                setRegPressed(true);
                sendPhoneNumberToGetCode(phone);
              }}
            >
              Получить отп код
            </Button>
          ) : (
            <Button
              disabled={token}
              type="submit"
              onClick={async () => {
                const token = await userSignin(userInfo);
                setToken(token);
                // localStorage.setItem('token', token);
              }}
            >
              OK
            </Button>
          )}
          {token ? (
            <p>Авторизация по номеру телефона {phone} прошла успешно!</p>
          ) : null}

          {/* {phone && token ? <p>телефон: {phone}</p> : null}
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
          ) : null} */}

          {token && (
            <>
              <Button style={{ width: '200px' }} onClick={toggleModal}>
                Оплатить билеты
              </Button>
            </>
          )}
        </form>
      </div>
      {showModal && (
        <Modal>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Номер телефона*
              <input type="number" name="phone" onChange={handleChange} />
            </label>
            <label>
              Укажите имя
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
              Номер карты*
              <input type="number" name="card" onChange={handleChange} />
            </label>
            <label>
              Срок*
              <input type="text" name="expDate" onChange={handleChange} />
            </label>
            <label>
              CVV*
              <input type="text" name="cvv" onChange={handleChange} />
            </label>
          </form>
          <Button onClick={() => navigate('/tickets')}>Ок</Button>
          <Button onClick={toggleModal}>Отмена</Button>
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};
