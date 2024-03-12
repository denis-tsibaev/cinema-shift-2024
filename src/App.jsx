import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './components/Container.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { MoviePage } from './pages/MoviePage.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Profile } from './pages/Profile.jsx';
import { Schedule } from './pages/Schedule.jsx';
import { Tickets } from './pages/Tickets.jsx';

function App() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(null);
  const [token, setToken] = useState(null);

  const userInfo = {
    phone: phone,
    name: name,
    email: email,
    code: otp,
    token: token,
  };

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:filmId" element={<MoviePage />} />
        <Route path="/film/:filmId/schedule" element={<Schedule />} />
        <Route
          path="/profile/*"
          element={
            <Profile
              phone={phone}
              setPhone={setPhone}
              name={name}
              setName={setName}
              card={card}
              setCard={setCard}
              expDate={expDate}
              setExpDate={setExpDate}
              cvv={cvv}
              setCvv={setCvv}
              email={email}
              setEmail={setEmail}
              otp={otp}
              setOtp={setOtp}
              token={token}
              setToken={setToken}
              userInfo={userInfo}
            />
          }
        />
        <Route path="/tickets" element={<Tickets userInfo={userInfo} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
