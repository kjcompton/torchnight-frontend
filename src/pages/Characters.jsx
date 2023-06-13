import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"

function Characters (props) {
    const [characters, setCharacters] = useState([])
    

    const charactersByUser = async () => {
        try {
            const URL = `http://127.0.0.1:8000/api/v1/characters/test/${props.userLogged.id}`
            const response = await fetch(URL)
            const data = await response.json()
            const foundCharacters = data.data
            setCharacters(foundCharacters)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        charactersByUser()
        console.log(props.userLogged)
    }, [])

    return (
        <>
        <div className="grid grid-cols-4 gap-4">
            {characters.map((character) => {
                return (
                    <div key={character.id}>
                        <img src={character.img} alt={character.name} />
                        <h1>{character.name}</h1>
                        <h2>{character.characterClass}</h2>
                        <Link to={`/character/${character.id}`}>View</Link>
                    </div>
                )
            })}
        </div>
        <Link to={`/characters/new`}><button type="button">New Character</button></Link>
        </>
    )
    
}

export default Characters