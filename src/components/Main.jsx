import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Characters from '../pages/Characters'
import CharacterShow from '../pages/CharacterShow'
import CharacterNew from '../pages/CharacterNew'

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
            <Routes>
                # Chracters route when user logs in
                <Route path="/" element={<Characters userLogged={props.userLogged}/>}/>

                # Character view route
                <Route path="/character/:id" element={<CharacterShow />}/>

                # New Character
                <Route path="/characters/new" element={<CharacterNew userLogged={props.userLogged}/>}/>

            </Routes>
        </main>
    )
}

export default Main






  
