import { useState } from 'react'

function Main(props) {
    // const [userss, setUsers] = useState([])
    // const getPeople = async() => {
    //     const URL = 'https://sheltered-bastion-87659.herokuapp.com/api/v1/users/'
    //     const response = await fetch(URL)
    //     const data = await response.json()
    //     setUsers((prevState) => {
    //       return data.data 
    //     })
    //     return data
    //   }

    return (
        <main>
            <h1>{props.userLogged}User is logged in</h1>
        </main>
    )
}

export default Main






  
