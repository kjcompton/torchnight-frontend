import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Characters from '../pages/Characters'
import CharacterShow from '../pages/CharacterShow'
import CharacterNew from '../pages/CharacterNew'
import SignUp from '../pages/SignUp'
import Shop from '../pages/Shop'
import Game from '../pages/Game'

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

                # Sign Up
                <Route path="/signup" element={<SignUp/>}/>

                # Shop
                <Route path="/shop" element={<Shop userLogged={props.userLogged} setUserLogged={props.setUserLogged}/>}/>

                # Game
                <Route path="/game" element={<Game/>}/>

            </Routes>
        </main>
    )
}

export default Main






  
