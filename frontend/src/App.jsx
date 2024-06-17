import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentPage from './components/CurrentPage';
import Default from './components/Dashboards/Default';
import Ecommerce from './components/Dashboards/Ecommerce';
import Project from './components/Dashboards/Project';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <BrowserRouter>

        <div className="app-wrapper">
          <div id="container">
            <Routes>

              <Route
                path="/"
                element={

                    <CurrentPage />

                }
              >
                <Route index element={<Default />} />
                <Route path='dashboard_01' element={<Default />} />
                <Route path="dashboard_02" element={<Ecommerce />} />
                <Route path="dashboard_03" element={<Project />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
