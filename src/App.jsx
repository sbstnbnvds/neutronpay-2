import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Company from './pages/Company/Company';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/company' element={<Company/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
