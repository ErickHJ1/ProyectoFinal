import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Box,Card,Inset,Text,Strong,AlertDialog,Flex,Button, TextField, Heading, Grid } from '@radix-ui/themes'
const Usuario = () => {
  const [armadura, setArmadura] = useState()
  const [descripcion, setDescripcion] = useState()
  const [precio, setPrecio] = useState()
  const [nuevaArmadura, setArmaduraNueva] = useState()
  const [nuevaDescripcion, setDescripcionNueva] = useState()
  const [precioNuevo, setNuevoPrecio] = useState()
  const [datos, setDatos] = useState([])

  const Navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
        try {
            const response = await axios.get('http://localhost:3001/products')
            console.log(response.data)
            setDatos(response.data)
        } catch (error) {
            console.log("error")
        }
    }
    fetchUsers();
},[])
async function modificarProducto (id) {
  try {
    const newUser = { armadura:nuevaArmadura,descripcion: nuevaDescripcion, precio:precioNuevo }
    await axios.put(`http://localhost:3001/products/${id}`, newUser)

  } catch (error) {
    console.error('Error al agregar la tarea:', error);
  }

}
async function BorrarProducto(id) {
  try {
    await axios.delete(`http://localhost:3001/products/${id}`);
    setData(data.filter(item => item.id !== id))
  } catch (error) {
    console.error('Error al borrar el producto')
  }
}

  async function addProduct() {
    if (armadura.trim() ==='' && descripcion.trim() ==='' && precio.trim() === '') {
        alert("A")
        return
    } else {
    try {
        const newUser = { armadura, descripcion, precio};
        await axios.post('http://localhost:3001/products', newUser);
        setDescripcion('')
        setPrecio('')
        setArmadura('')
    } catch (error) {
        console.error('Error al agregar la tarea:', error);
    }

}

}
return (
  <>
  <Box p="8" >
    <Heading>
      Publicar mi juego
    </Heading>
    <Box maxWidth="280px" style={{backgroundColor:"#2d2d7c52", padding:"50px",borderRadius:"30px"}}>
      <form>
    <Text as='div' size="3" weight="regular" >
    <Grid gap="4">
      <input type="text" value={armadura} placeholder='Nombre de la armadura' onChange={e => setArmadura(e.target.value)}/>
      <input type="text" value={descripcion} placeholder='Descripcion de armadura' onChange={e => setDescripcion(e.target.value)}/>
      <input type="text" value={precio} placeholder='Precio de la armadura' onChange={e => setPrecio(e.target.value)}/>
      <button onClick={addProduct}>Añadir producto</button>
      </Grid>
      </Text>
      </form>
      </Box>
      </Box>
      <div >
        {datos.map((item,index)=>(
          <ul key={index} >
            <Box maxWidth="240px">
  <Card size="9" >
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
    <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="amber">Modificar</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Editar Producto</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Edita tu producto
    </AlertDialog.Description >
      <Flex direction="column" gap="3" >
        <label onChange={(e)=> setArmaduraNueva(e.target.value)}>
          <Text as='div' size="2" mb="1" weight="bold">
            Nombre de armadura:
          </Text>
          <TextField.Root placeholder='Ingrese el nuevo nombre'/>   
        </label>
        <label onChange={(e)=> setDescripcionNueva(e.target.value)}>
          <Text value={descripcion} as='div' size="2" mb="1" weight="bold">
            Descripcion de la armadura:
          </Text>
          <TextField.Root placeholder='Ingrese el nuevo nombre'/>   
        </label>
        <label onChange={(e)=> setNuevoPrecio(e.target.value)}>
          <Text as='div' size="2" mb="1" weight="bold" value={precio}>
            Precio de armadura:
          </Text>
          <TextField.Root placeholder='Ingrese el nuevo nombre'/>   
        </label>
      </Flex>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button onClick={()=>modificarProducto(item.id)} variant="solid" color="amber">
          Save
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Eliminar</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Eliminar definitivamente</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Seguro que quieres eliminar el siguiente producto????????
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red" onClick={()=>BorrarProducto(item.id)}>
          Delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
  </Card>
</Box>

          </ul>
        ))}
      </div>
      
    </>
  )
}


export default Usuario
