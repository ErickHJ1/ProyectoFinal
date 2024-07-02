import Login from './pages/Login'
import './App.css'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import {  Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Register from './pages/Register';
import Usuario from './pages/Usuario';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/usuario' element={<Usuario/>}> </Route>
      </Routes>
  ); 
}

export default App

