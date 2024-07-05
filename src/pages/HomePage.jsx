import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Register from './Register';
import Usuario from './Usuario';
import Login from "./Login";
import ContactPage from "./ContactPage";
import Navegacion from "../components/Navegacion"
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      const specificData = response.data.map((item) => ({
        armadura: item.armadura,
        tipo: item.tipo,
        precio: item.precio,
      }));
      setData(specificData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Link to="/usuario">Usuario</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>

      {/* Renderizar los datos */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Armor: {item.armadura}, Type: {item.tipo}, Price: {item.precio}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
