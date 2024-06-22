import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentPage from './components/CurrentPage';
import Default from './components/Dashboards/Default';
import Ecommerce from './components/Dashboards/Ecommerce';
import Project from './components/Dashboards/Project';
import Login from './components/Login';
import Register from './components/Register';
import { useReducer } from 'react';
import { context, initialState, globalReducer } from './store';
import ProjectList from './components/Applications/ProjectList'
import CreateNew from './components/Applications/CreateNew'
import Kanban from './components/Kanban'
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const contextPayload = {
    store:state,
    setStore: dispatch
  }
  return (
    <context.Provider value={contextPayload}>
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
                <Route path="projects" element={<ProjectList />} />
                <Route path="project_create" element={<CreateNew />} />
                <Route path="kanban" element={<Kanban />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
    </context.Provider>
  );
}

export default App;
