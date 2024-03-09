import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Страница не найдена</h1>
      <p>Попробуйте вернуться на главную страницу</p>
      <Button type="button" onClick={() => navigate('/')}>
        Вернуться
      </Button>
    </>
  );
};
