import { useState, useEffect } from "react"
import axios from "axios"

const HomePage = () => {
    const [data , setData] = useState() 
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3001/products')
                console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.log("error")
            }
        }
        fetchUsers();
    },[])
    return (
        <>
           <header className="header">
        <a href="/usuario" className="logo">Developer</a>
        <nav className="nav-items">
            <a href="/Usuario">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
        </>
    )
}
export default HomePage