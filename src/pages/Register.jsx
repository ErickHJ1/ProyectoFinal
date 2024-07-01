import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
const Register = () => {
    const [correo, setCorreo] = useState('')
    const [usuario, setUsuario] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3000/api/task')
                console.log(response.data)
            } catch (error) {
                console.log("error")
            }
        }
        fetchUsers();
    },[])

    return(
        <>
        <input placeholder="correo" type="text" value={correo} onChange={e => setCorreo(e.target.value)}/>
        <input placeholder="usuario" type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <input placeholder="password" type="password" value={pass} onChange={e => setPass(e.target.value)}/>
        <button onClick={addUser}>Registrarse</button>
        </>
    )
    async function addUser() {
        if (correo.trim() ==='' && usuario.trim() ==='' && pass.trim() === '') {
            alert("A")
            return
        } else {
        try {
            const newUser = { correo, usuario, pass};
            await axios.post('http://localhost:3000/api/task', newUser);
        } catch (error) {
            console.error('Error al agregar la tarea:', error);
        }
        navigate("/login")
    }
}
}
export default Register