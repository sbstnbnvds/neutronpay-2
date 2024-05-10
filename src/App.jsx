import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Business from './pages/Business/Business';
import AppPage from './pages/App/AppPage';
import Blog from './pages/Blog/Blog';
import BlogPage from './pages/Blog/components/BlogPage';
import Company from './pages/Company/Company';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';



import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/company' element={<Company />} />
        <Route path='/business' element={<Business />} />
        <Route path='/app' element={<AppPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
