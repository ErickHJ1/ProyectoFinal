import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

import React from 'react'

const Rutas_privada = ({ route }) => {
    const { auth } = useContext(AuthContext)
  return auth ? route : <Navigate to="/login"/>
}

export default Rutas_privada
