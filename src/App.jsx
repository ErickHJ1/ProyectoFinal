import Login from './pages/Login'
import './App.css'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import {  Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Register from './pages/Register';


function App() {
  return (
      <Routes>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
  ); 
}

export default App

