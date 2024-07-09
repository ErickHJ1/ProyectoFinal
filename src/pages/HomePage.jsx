import React, { useState, useEffect } from "react";
import axios from "axios"

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      const specificData = response.data.map((item) => ({
        id: item.id,
        armadura: item.armadura,
        tipo: item.tipo,
        precio: item.precio,
      }));
      setData(specificData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  
async function BorrarProducto(id) {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      setData(data.filter(item => item.id !== id))
    } catch (error) {
      console.error('Error al borrar el producto')
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar></Navbar>

      {/* Renderizar los datos */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Armor: {item.armadura}, Type: {item.tipo}, Price: {item.precio} <button onClick={() => BorrarProducto(item.id)}>Eliminar-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
