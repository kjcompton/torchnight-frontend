import { useState,useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";

function CharacterShow () {
    
    const params = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState({})

    const getCharacter = async () => {
        try {
            console.log(params)
            const URL = `http://127.0.0.1:8000/api/v1/characters/${params.id}`
            const response = await fetch(URL)
            const data = await response.json()
            const foundCharacters = data.data
            setCharacter(foundCharacters)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCharacter = async () => {
        await fetch(`http://127.0.0.1:8000/api/v1/characters/${params.id}`, {
            method: "DELETE"
        }
        ).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleButton = (e) => {
        e.preventDefault()
        deleteCharacter().then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getCharacter()
    }, [])
    
    return (
        <>
            <h1>{character.name}</h1>
            <button type="button" onClick={handleButton}>DELETE</button>
        </>
    )
}

export default CharacterShow