import General from "./components/General"
import './index.scss'
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Default from "./components/Dashboards/Default";
import Ecommerce from "./components/Dashboards/Ecommerce";
import Project from "./components/Dashboards/Project";
import CurrentPage from './components/CurrentPage'
import Header from "./components/Header";
function App() {

  return (
    <> 
    <BrowserRouter>
    <div className="app-wrapper">
    <General/>
    <div id="container">
    <Header/>
    <Routes path='/' element={<CurrentPage/>} >

      <Route index element={<Default/>} />
      <Route path="index" element={<Default/>} />
      <Route path="dashboard_02" element={<Ecommerce/>} />
      <Route path="dashboard_03" element={<Project/>} />
  

    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
