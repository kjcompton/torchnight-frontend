import { useState,useEffect } from 'react'
import potion from '../assets/potion.png'
import boots from '../assets/boots.png'
import sword from '../assets/sword.png'

const allItems = [
    {
        "name": "Health Potion",
        "price": 5,
        "value": "Item1", //amount the effect does 10 hp or 10 damage or 10 armour
        "target": "Item1",
        "effect": "Item1", //increase or decrease
        "attribute": "Item1", //Attribute that it effects
        "image": potion,
        "slot": "item1"
    },
    {
        "name": "Kunai",
        "price": 5,
        "value": "Item2", 
        "target": "Item2",
        "effect": "Item2", 
        "attribute": "Item2", 
        "image": potion,
        "slot": "item1"
    },
    {
        "name": "Spell",
        "price": 15,
        "value": "Item3", 
        "target": "Item3",
        "effect": "Item3", 
        "attribute": "Item3", 
        "image": potion,
        "slot": "item1"
    },
    {
        "name": "Elixer",
        "price": 10,
        "value": "Item4", 
        "target": "Item4",
        "effect": "Item4", 
        "attribute": "Item4", 
        "image": potion,
        "slot": "item1"
    },
    {
        "name": "Magic Potion",
        "price": 5,
        "value": "Item5", 
        "target": "Item5",
        "effect": "Item5", 
        "attribute": "Item5", 
        "image": potion,
        "slot": "item1"
    }
]
const allArmor = [
    {
        "name": "Chest Piece",
        "armorValue": "Armor1",
        "statValue": "Armor1", // amount the effect does 10 hp or 10 damage or 10 armour
        "stat": "Armor1", //stat that it increases
        "price": 25,
        "image": boots,
        "slot": "chest"
    },
    {
        "name": "Gloves",
        "armorValue": "Armor2",
        "statValue": "Armor2", 
        "stat": "Armor2",
        "price": 15,
        "image": boots,
        "slot": "gloves"
    },
    {
        "name": "Boots",
        "armorValue": "Armor3",
        "statValue": "Armor3", 
        "stat": "Armor3",
        "price": 15,
        "image": boots,
        "slot": "boots"
    },
    {
        "name": "Helmet",
        "armorValue": "Armor4",
        "statValue": "Armor4", 
        "stat": "Armor4",
        "price": 10,
        "image": boots,
        "slot": "helm"
    },
    {
        "name": "Ring",
        "armorValue": "Armor5",
        "statValue": "Armor5", 
        "stat": "Armor5",
        "price": 20,
        "image": boots,
        "slot": "ring"
    }
]

const allWeapons = [
    {
        "name": "Sword",
        "damageValue": "Weapon1",
        "statValue": "Weapon1", // amount the effect does 10 hp or 10 damage or 10 armour
        "stat": "Weapon1", //stat that it increases
        "price": 55,
        "image": sword,
        "slot": "weapon"
    },
    {
        "name": "Axe",
        "damageValue": "Weapon2",
        "statValue": "Weapon2", 
        "stat": "Weapon2", 
        "price": 60,
        "image": sword,
        "slot": "weapon"
    },
    {
        "name": "Bow",
        "damageValue": "Weapon3",
        "statValue": "Weapon3", 
        "stat": "Weapon3", 
        "price": 40,
        "image": sword,
        "slot": "weapon"
    },
    {
        "name": "Staff",
        "damageValue": "Weapon4",
        "statValue": "Weapon4", 
        "stat": "Weapon4", 
        "price": 50,
        "image": sword,
        "slot": "weapon"
    },
    {
        "name": "Dagger",
        "damageValue": "Weapon5",
        "statValue": "Weapon5", 
        "stat": "Weapon5", 
        "price": 30,
        "image": sword,
        "slot": "weapon"
    }
]



function Shop(props) {

    const [items, setItems] = useState([])
    const [armor, setArmor] = useState([])
    const [weapons, setWeapons] = useState([])


    const purchaseItem = async (name, slot, price, itemType) => {
        console.log(name)
        console.log(slot)

        const item = {
            [slot]: name
        }
        const newGold = props.userLogged.gold -= price
        const gold = {
            gold: newGold
        }
        console.log(gold)
        if (itemType == "armor") {
            setArmor(armor.filter(armor => armor.name !== name))
        }
        else if (itemType == "weapon") {
            setWeapons(weapons.filter(weapons => weapons.name !== name))
        }
        else if (itemType == "item") {
            setItems(items.filter(items => items.name !== name))
        }


        props.setUserLogged({...props.userLogged, ["gold"]: newGold})
        await fetch(`http://127.0.0.1:8000/api/v1/users/${props.userLogged.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gold)
        })

        await fetch(`http://127.0.0.1:8000/api/v1/characters/${props.userLogged.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        
    }

    const getRandom = (amount, storage) => {
        let newStorage = storage.slice()
        let returnedItems = []
        for (let i =0; i < amount; i++) {
            let index = Math.floor(Math.random()*newStorage.length)
            returnedItems.push(newStorage[index])
            newStorage.splice(index, 1)
            console.log("Item Storage: " + newStorage)
            console.log("Current Storage: " + returnedItems)
        }
        return returnedItems
    }

    useEffect(() => {
        setItems(getRandom(5, allItems))
        setArmor(getRandom(5, allArmor))
        setWeapons(getRandom(5, allWeapons))
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <h1 className="storeHeader text-center">Weapons</h1>
                <div className="grid grid-cols-4 gap-4 mt-3">
                    {weapons.map((weapon) => {
                        return (
                            <div className="item-card text-left" key={weapon.name}>
                                <img src={weapon.image}/>
                                <h2>{weapon.name}</h2>
                                <h2>{weapon.slot}</h2>
                                <h3>{weapon.price}</h3>
                                <button onClick={() => {purchaseItem(weapon.name, weapon.slot, weapon.price, "weapon")}}>Buy</button>
                            </div>
                        )
                    })}
                </div>
                <h1 className="storeHeader text-center mt-5">Armor</h1>
                <div className="grid grid-cols-4 gap-4 mt-3">
                    {armor.map((armor) => {
                        return (
                            <div className="item-card text-left" key={armor.name}>
                                <img src={armor.image}/>
                                <h2>{armor.name}</h2>
                                <h2>{armor.slot}</h2>
                                <h3>{armor.price}</h3>
                                <button onClick={() => {purchaseItem(armor.name, armor.slot, armor.price,"armor")}}>Buy</button>
                            </div>
                        )
                    })}
                </div>
                <h1 className="storeHeader text-center mt-5">Items</h1>
                <div className="grid grid-cols-4 gap-4 mt-3">
                    {items.map((item) => {
                        return (
                            <div className="item-card text-left" key={item.name}>
                                <img src={item.image}/>
                                <h2>{item.name}</h2>
                                <h2>{item.slot}</h2>
                                <h3>{`${item.price} g`}</h3>
                                <button onClick={() => {purchaseItem(item.name, item.slot, item.price, "item")}}>Buy</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Shop