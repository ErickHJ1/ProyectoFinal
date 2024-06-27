import Login from './components/Login'
import './App.css'
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </Router>
  ); 
}

export default App
