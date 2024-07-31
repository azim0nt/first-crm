import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (isAuthenticated) {
    return element; // Показываем запрашиваемый элемент
  } else {
    // Если не авторизован, перенаправляем на страницу логина
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
