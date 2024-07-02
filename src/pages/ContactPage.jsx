import { useState } from "react"

const ContactPage = () => {
    const [correo, setCorreo] = useState()
    const [usuario, setUsuario] = useState()
    const [razon, setRazon] = useState()
    async function addUser() {
        if (correo.trim() ==='' && usuario.trim() ==='' && razon.trim() === '') {
            alert("A")
            return
        } else {
        try {
            const newUser = { correo, usuario, razon};
            await axios.post('http://localhost:3000/api/task', newUser);
        } catch (error) {
            console.error('Error al agregar la tarea:', error);
        }
    }
}

    return (
        <>
        <form action="submit">
            <input type="text" value={correo} placeholder="Correo" onChange={e => setCorreo(e.target.value)}/>
            <input type="text" value={usuario} placeholder="Usuario" onChange={e => setRazon(e.target.value)}/>
            <input type="text" value={razon} placeholder="Razón de contacto" onChange={e => setNumero(e.target.value)}/>
            <button type="button">Enviar Informacion</button>
        </form>
        </>
    )
}
export default ContactPage