import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./CharacterNew.css"
import rogue from '../assets/rogue.png'
import warrior from '../assets/warrior.png'
import mage from '../assets/mage.png'
import portrait1 from '../assets/portrait1bg.png'
import portrait2 from '../assets/portrait2bg.png'
import portrait3 from '../assets/portrait3_bg.png'
import portrait4 from '../assets/portrait4bg.png'
import portrait5 from '../assets/portrait5bg.png'
import portrait6 from '../assets/portrait6bg.png'
import portrait7 from '../assets/portrait7bg.png'
import portrait8 from '../assets/portrait8bg.png'
import portrait9 from '../assets/portrait9bg.png'
import portrait10 from '../assets/portrait10bg.png'
import portrait11 from '../assets/portrait11bg.png'
import portrait12 from '../assets/portrait12bg.png'

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
        helm: "",
        chest: "",
        gloves: "",
        boots: "",
        weapon: "",
        ring: "",
        item1: "",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        name: '',
        characterClass: '',
        image: '', 
    })
    

    const createCharacter = async (character) => {
        await fetch("https://sheltered-bastion-87659.herokuapp.com/api/v1/characters/create", {
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
        <div className="container mx-auto">
            <h1 className="createCharacterHeading">Create Character</h1>
            <form className="columns-1 ..." onSubmit={handleSubmit}>
                <div className="w-full mt-6">
                    <label className="block float-left font-bold" htmlFor="name">Name</label>
                    <input className="w-full rounded" type='text' id='name' value={form.name} name="name" onChange={handleChanges}/>
                </div>
                <div className="w-full mt-6">
                    <h6 className="text-left font-bold">Choose a Class</h6>
                    <div className="flex classIcons">
                        
                        <input className="hidden" type='radio' id='characterClassWarrior' value="warrior" name="characterClass" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="characterClassWarrior"><img src={warrior}/></label>
                        
                        <input className="hidden" type='radio' id='characterClassRogue' value="rogue" name="characterClass" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="characterClassRogue"><img src={rogue}/></label>
                        
                        <input className="hidden" type='radio' id='characterClassMage' value="mage" name="characterClass" onChange={handleChanges}/>
                        <label className="border-2 rounded" htmlFor="characterClassMage"><img src={mage}/></label>
                    </div>
                </div>
                <div className="w-full mt-6">
                <h6 className="text-left font-bold">Choose an Avatar</h6>
                    <div className="portraitIcons grid grid-cols-4 gap-4">
                        
                        <input className="hidden" type='radio' id='portrait1' value={portrait1} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait1"><img src={portrait1}/></label>
                        
                        <input className="hidden" type='radio' id='portrait2' value={portrait2} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait2"><img src={portrait2}/></label>

                        <input className="hidden" type='radio' id='portrait3' value={portrait3} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait3"><img src={portrait3}/></label>

                        <input className="hidden" type='radio' id='portrait4' value={portrait4} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait4"><img src={portrait4}/></label>
                        
                        <input className="hidden" type='radio' id='portrait5' value={portrait5} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait5"><img src={portrait5}/></label>

                        <input className="hidden" type='radio' id='portrait6' value={portrait6} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait6"><img src={portrait6}/></label>

                        <input className="hidden" type='radio' id='portrait7' value={portrait7} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait7"><img src={portrait7}/></label>

                        <input className="hidden" type='radio' id='portrait8' value={portrait8} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait8"><img src={portrait8}/></label>

                        <input className="hidden" type='radio' id='portrait9' value={portrait9} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait9"><img src={portrait9}/></label>

                        <input className="hidden" type='radio' id='portrait10' value={portrait10} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait10"><img src={portrait10}/></label>

                        <input className="hidden" type='radio' id='portrait11' value={portrait11} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait11"><img src={portrait11}/></label>

                        <input className="hidden" type='radio' id='portrait12' value={portrait12} name="image" onChange={handleChanges}/>
                        <label className="mr-2 border-2 rounded" htmlFor="portrait12"><img src={portrait12}/></label>
                    </div>
                </div>
                <input className="mt-5" type='submit'value="Create Character"/>
            </form>
        </div>
    )
}

export default CharacterNew