import { useState, useEffect } from "react"
import axios from "axios"

const ContactPage = () => {
    const [correo, setCorreo] = useState()
    const [usuario, setUsuario] = useState()
    const [razon, setRazon] = useState()
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3001/Contacto')
                console.log(response.data)
            } catch (error) {
                console.log("error")
            }
        }
        fetchUsers();
    },[])
    async function addRequest() {
        if (correo.trim() ==='' && usuario.trim() ==='' && razon.trim() === '') {
            alert("A")
            return
        } else {
        try {
            const newUser = { correo, usuario, razon};
            await axios.post('http://localhost:3001/Contacto', newUser);
        } catch (error) {
            console.error('Error al agregar la tarea:', error);
        }
    }
}

    return (
        <>
        <form>
            <input type="text" value={correo} placeholder="Correo" onChange={e => setCorreo(e.target.value)}/>
            <input type="text" value={usuario} placeholder="Usuario" onChange={e => setUsuario(e.target.value)}/>
            <input type="text" value={razon} placeholder="Mensaje" onChange={e => setRazon(e.target.value)}/>
            <button type="button" onClick={addRequest}>Enviar Informacion</button>
        </form>
        </>
    )
}
export default ContactPage