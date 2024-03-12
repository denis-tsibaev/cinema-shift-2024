import { useEffect } from 'react';
// import { getTickets } from '../service/ServiceApi';

export const Tickets = ({ userInfo }) => {
  useEffect(() => {
    // getTickets(userInfo);
  }, []);

  return (
    <div className="tickets">
      <h1>Билеты</h1>

      <h3>здесь будет отображаться список билетов</h3>
    </div>
  );
};
