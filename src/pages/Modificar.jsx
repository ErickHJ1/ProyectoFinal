import { useEffect, useState } from "react";
import axios from "axios";

const Modificar = () => {
    const [armadura, setArmadura] = useState()
  const [tipo, setTipo] = useState()
  const [precio, setPrecio] = useState()
  const [tasks, setTasks] = useState([]);


  const modificarProducto = async () =>  {
        try {
          await axios.put(`http://localhost:3001/Contacto${id}`, { completed: true });
          setTasks(tasks.map(producto => (producto.id === id ? { ...producto, completed: true } : producto)));
        } catch (error) {
          console.error('Error al marcar la tarea como completada:', error);
        }
      
  }
    return (
        <>
        <form >
            <input type="text" value={correo} placeholder="Correo" onChange={e => setArmadura(e.target.value)}/>
            <input type="text" value={usuario} placeholder="Usuario" onChange={e => setTipo(e.target.value)}/>
            <input type="text" value={razon} placeholder="Razón de contacto" onChange={e => setPrecio(e.target.value)}/>
            <button type="button" onClick={modificarProducto}>Enviar Informacion</button>
        </form>
        </>
    )
}

export default Modificar