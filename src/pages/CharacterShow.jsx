import { useState,useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import rogue from '../assets/rogue.png'
import warrior from '../assets/warrior.png'
import mage from '../assets/mage.png'
import potion from '../assets/potion.png'

function CharacterShow () {
    
    const params = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState({})

    const getCharacter = async () => {
        try {
            console.log(params)
            const URL = `https://sheltered-bastion-87659.herokuapp.com/api/v1/characters/${params.id}`
            const response = await fetch(URL)
            const data = await response.json()
            const foundCharacters = data.data
            setCharacter(foundCharacters)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCharacter = async () => {
        await fetch(`https://sheltered-bastion-87659.herokuapp.com/api/v1/characters/${params.id}`, {
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
            <div className="characterInfo grid gap-4 grid-cols-2 grid-rows-1">
                <div className="mainCharacterInfo text-left">
                    <img className="portrait" src={character.image}/>
                    <h2 className="characterName">{character.name} ({character.id})</h2>
                    <div className="classText mt-3">
                        <h4 className=" text-left font-light">Level {character.level} <img src={warrior}/>{character.characterClass}</h4>
                    </div>
                </div>
                <div className="characterStats text-left">
                    <h2>Stats</h2>
                    <h3>HP: {character.hp}</h3>
                    <h3>MP: {character.mp}</h3>
                    <h3>Strength: {character.strength}</h3>
                    <h3>Dexterity: {character.dexterity}</h3>
                    <h3>Intelligence: {character.intelligence}</h3>
                    <h3>Experience: {character.xp}</h3>
                    
                </div>
            </div>
            <div className="itemsInfo grid gap-2 grid-cols-3">
                
                <div className="item-info-card text-left">
                    
                    <h2>{character.helm}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.chest}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.gloves}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.boots}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.weapon}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.ring}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.item1}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.item2}</h2>
                </div>
                <div className="item-info-card text-left">
                    
                    <h2>{character.item3}</h2>
                </div>
            </div>
            <div className="equipmentInfo grid gap-4 grid-cols-2 grid-rows-1">
                
            </div>
            <button className="deleteButton" type="button" onClick={handleButton}>DELETE</button>
        </>

    )
}

export default CharacterShow