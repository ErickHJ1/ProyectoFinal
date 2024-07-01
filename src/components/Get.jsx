async function fetchUsers() {
    try {
        const response = await axios.get('http://localhost:3000/api/task')
        console.log(response.data)
    } catch (error) {
        console.log("error")
    }
}
export default fetchUsers