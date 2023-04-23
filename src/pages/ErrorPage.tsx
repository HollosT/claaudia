import React from 'react';
import {useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  const goHome = () => {
    navigate('/')
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button onClick={goHome}>Home</button>
    </div>
  );
};

export default ErrorPage;
