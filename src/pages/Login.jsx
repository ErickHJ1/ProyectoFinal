import axios from "axios"
import { useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"


const Login = () => {
const [usuarioInput, setUsuarioInput] = useState("")
const [passInput, setPassInput] = useState("")
const [data, setData] = useState()
const navegacion=useNavigate("")


useEffect(() => {
    async function fetchUsers() {
        try {
            const response = await axios.get('http://localhost:3000/api/task')
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log("error")
        }
    }
    fetchUsers();
},[])
async function loginUser() {
    console.log("datos obtenidos con boton", data)
    if (data) {
        const user = data.find((user) => user.usuario === usuarioInput)
        console.log("datos filtrados pass", user.pass)
        console.log("datos users pass", passInput)
        if (user.pass === passInput) {
            console.log("usuario y contraseña correcto", user.pass)
            alert("Inicio de sesion correcto");
            localStorage.setItem("id", user.id)
            
                navegacion("/")
            
        }else alert('usuario y contraseña no coinciden')
      }}
    return (
        <>
        <input type="text" placeholder="Correo" value={usuarioInput} onChange={e => setUsuarioInput(e.target.value)}/>
        <input type="password" placeholder="Contraseña" value={passInput} onChange={e => setPassInput(e.target.value)}/>
        <button type="button" onClick={loginUser}>Iniciar Sesion</button>
        </>
    )
    }


export default Login