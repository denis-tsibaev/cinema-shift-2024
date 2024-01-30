import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { MoviePage } from './pages/MoviePage.jsx';
import { Schedule } from './pages/Schedule.jsx';
import { NotFound } from './pages/NotFound.jsx';
import Container from './components/Container.jsx';

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/film/:filmId" element={<MoviePage />} />
                <Route path="/film/:filmId/schedule" element={<Schedule />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    );
}

export default App;
