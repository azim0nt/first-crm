import General from "./components/General"
import Header from './components/Header'
import './index.scss'
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Default from "./components/Dashboards/Default";
import Ecommerce from "./components/Dashboards/Ecommerce";
import Project from "./components/Dashboards/Project";
function App() {

  return (
    <> 
    <BrowserRouter>
    <div className="app-wrapper">
    <General/>
    <div id="container">
    <Header />
    <Routes path='/' element={<Default/>}>
      <Route path="index" element={<Default/>} />
      <Route path="dashboard_02" element={<Ecommerce/>} />
      <Route path="dashboard_03" element={<Project/>} />

    </Routes>
    <Outlet/>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
