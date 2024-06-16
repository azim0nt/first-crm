import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentPage from './components/CurrentPage';
import Default from './components/Dashboards/Default';
import Ecommerce from './components/Dashboards/Ecommerce';
import Project from './components/Dashboards/Project';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-wrapper">
          <div id="container">
            <Routes>
              {/* Защищенные маршруты */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <CurrentPage />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Default />} />
                <Route path='dashboard_01' element={<Default />} />
                <Route path="dashboard_02" element={<Ecommerce />} />
                <Route path="dashboard_03" element={<Project />} />
              </Route>
              {/* Маршруты для Login и Register */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
