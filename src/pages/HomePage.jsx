import React, { useState, useEffect } from "react";
import axios from "axios"

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes";
const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      const specificData = response.data.map((item) => ({
        id: item.id,
        armadura: item.armadura,
        descripcion: item.descripcion,
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
      <Navbar></Navbar>

      {/* Renderizar los datos */}
      <div className="contenedor">
        {data.map((item, index) => (
      <ul className="productos" key={index}>
          <Box maxWidth="240px">
  <Card size="9">
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 140,
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Text as="p" size="3">
      <Strong>{item.armadura}</Strong> {item.descripcion}, {item.precio}
    </Text>
  </Card>
</Box>
      </ul>
        ))}
        </div>
    </>
  );
};

export default HomePage;
