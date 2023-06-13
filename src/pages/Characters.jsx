import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"
import rogue from '../assets/rogue.png'
import warrior from '../assets/warrior.png'
import mage from '../assets/mage.png'

function Characters (props) {
    const [characters, setCharacters] = useState([])
    

    const charactersByUser = async () => {
        try {
            const URL = `http://127.0.0.1:8000/api/v1/characters/test/${props.userLogged.id}`
            const response = await fetch(URL)
            const data = await response.json()
            const foundCharacters = data.data
            console.log(foundCharacters)
            setCharacters(foundCharacters)
        } catch (error) {
            console.log(error)
        }
    }

    const checkClass = (className) => {
        console.log(className)
        
        if (className == "warrior") {
            return <img src={warrior}/>
        }
        else if (className == "rogue") {
            return rogue
        }
        else if (className == "mage") {
            return mage
        }
    } 
    useEffect(() => {
        charactersByUser()
        console.log(props.userLogged)
    }, [])

    return (
        <>
        <Link to={`/characters/new`}><button className="newCharacterButton" type="button">New Character</button></Link>
        <div className="grid grid-cols-4 gap-4 mt-5">
            {characters.map((character) => {
                return (
                    <Link key={character.id} to={`/character/${character.id}`}>
                    <div className="character-card" key={character.id}>
                        {console.log(character)}
                        <img src={character.image} />
                        <h2 className="text-left font-bold mt-3">{character.name}</h2>
                        <div className="classText mt-3">
                           
                            <img src={warrior}/>
                            <h4 className=" text-left font-light">{character.characterClass}</h4>
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
        
        </>
    )
    
}

export default Characters