import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CharacterNew = (props) => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        id: `${props.userLogged.id}`,
        level: 1,
        xp: 1,
        hp: 10,
        mp: 10,
        strength: 1,
        dexterity: 1,
        intelligence: 1,
        helm: "helm",
        chest: "chest",
        gloves: "gloves",
        boots: "boots",
        ring: "ring",
        item1: "item1",
        item2: "item2",
        item3: "item3",
        item4: "item4",
        item5: "item5",
        name: '',
        characterClass: '',
        image: '', 
    })
    

    const createCharacter = async (character) => {
        await fetch("http://127.0.0.1:8000/api/v1/characters/create", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }

  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        createCharacter(form).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Character</h1>
            <label>Name</label>
            <input type='text' id='name' value={form.name} name="name" onChange={handleChanges}/>
            <label>Class</label>
            <input type='text' id='characterClass' value={form.characterClass} name="characterClass" onChange={handleChanges}/>
            <label>Image</label>
            <input type='text' id='image' value={form.image} name="image" onChange={handleChanges}/>
            <input type='submit'value="Submit"/>
        </form>
    )
}

export default CharacterNew