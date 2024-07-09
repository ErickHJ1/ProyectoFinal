import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Usuario = () => {
  const [armadura, setArmadura] = useState()
  const [tipo, setTipo] = useState()
  const [precio, setPrecio] = useState()
  const [data, SetData] = useState()

  const Navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
        try {
            const response = await axios.get('http://localhost:3001/products')
            console.log(response.data)
        } catch (error) {
            console.log("error")
        }
    }
    fetchUsers();
},[])
  async function addProduct() {
    if (armadura.trim() ==='' && tipo.trim() ==='' && precio.trim() === '') {
        alert("A")
        return
    } else {
    try {
        const newUser = { armadura, tipo, precio};
        await axios.post('http://localhost:3001/products', newUser);
        setTipo('')
        setPrecio('')
        setArmadura('')
        Navigate("/home")
    } catch (error) {
        console.error('Error al agregar la tarea:', error);
    }

}
}
return (
  <>
  <form action="submit">
      <input type="text" value={armadura} placeholder='Nombre de la armadura' onChange={e => setArmadura(e.target.value)}/>
      <input type="text" value={tipo} placeholder='Tipo de armadura' onChange={e => setTipo(e.target.value)}/>
      <input type="text" value={precio} placeholder='Precio de la armadura' onChange={e => setPrecio(e.target.value)}/>
      <button onClick={addProduct}>Añadir producto</button>
      <button>Modificar Producto</button>
      </form>
    </>
  )
}


export default Usuario
