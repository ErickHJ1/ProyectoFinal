import Login from './pages/Login'
import './App.css'
import "./css/style.css"
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Register from './pages/Register';
import Usuario from './pages/Usuario';
import Rutas_privada from './routes/Rutas_privada';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path='/home' element={<HomePage/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/usuario' element={<Rutas_privada route={<Usuario/>}/>}> </Route>
      </Routes>
      </AuthProvider>
  ); 
}

export default App

