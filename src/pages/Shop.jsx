import { useState,useEffect } from 'react'

const allItems = [
    {
        "name": "Item1",
        "price": 10,
        "value": "Item1", //amount the effect does 10 hp or 10 damage or 10 armour
        "target": "Item1",
        "effect": "Item1", //increase or decrease
        "attribute": "Item1", //Attribute that it effects
        "image": "Item1",
        "slot": "item1"
    },
    {
        "name": "Item2",
        "price": 10,
        "value": "Item2", 
        "target": "Item2",
        "effect": "Item2", 
        "attribute": "Item2", 
        "image": "Item2",
        "slot": "item1"
    },
    {
        "name": "Item3",
        "price": 10,
        "value": "Item3", 
        "target": "Item3",
        "effect": "Item3", 
        "attribute": "Item3", 
        "image": "Item3",
        "slot": "item1"
    },
    {
        "name": "Item4",
        "price": 10,
        "value": "Item4", 
        "target": "Item4",
        "effect": "Item4", 
        "attribute": "Item4", 
        "image": "Item4",
        "slot": "item1"
    },
    {
        "name": "Item5",
        "price": 10,
        "value": "Item5", 
        "target": "Item5",
        "effect": "Item5", 
        "attribute": "Item5", 
        "image": "Item5",
        "slot": "item1"
    }
]
const allArmor = [
    {
        "name": "Armor1",
        "armorValue": "Armor1",
        "statValue": "Armor1", // amount the effect does 10 hp or 10 damage or 10 armour
        "stat": "Armor1", //stat that it increases
        "price": 10,
        "image": "Armor1",
        "slot": "chest"
    },
    {
        "name": "Armor2",
        "armorValue": "Armor2",
        "statValue": "Armor2", 
        "stat": "Armor2",
        "price": 10,
        "image": "Armor2",
        "slot": "gloves"
    },
    {
        "name": "Armor3",
        "armorValue": "Armor3",
        "statValue": "Armor3", 
        "stat": "Armor3",
        "price": 10,
        "image": "Armor3",
        "slot": "boots"
    },
    {
        "name": "Armor4",
        "armorValue": "Armor4",
        "statValue": "Armor4", 
        "stat": "Armor4",
        "price": 10,
        "image": "Armor4",
        "slot": "helm"
    },
    {
        "name": "Armor5",
        "armorValue": "Armor5",
        "statValue": "Armor5", 
        "stat": "Armor5",
        "price": 10,
        "image": "Armor5",
        "slot": "ring"
    }
]

const allWeapons = [
    {
        "name": "Weapon1",
        "damageValue": "Weapon1",
        "statValue": "Weapon1", // amount the effect does 10 hp or 10 damage or 10 armour
        "stat": "Weapon1", //stat that it increases
        "price": 10,
        "image": "Weapon1",
        "slot": "weapon"
    },
    {
        "name": "Weapon2",
        "damageValue": "Weapon2",
        "statValue": "Weapon2", 
        "stat": "Weapon2", 
        "price": 10,
        "image": "Weapon2",
        "slot": "weapon"
    },
    {
        "name": "Weapon3",
        "damageValue": "Weapon3",
        "statValue": "Weapon3", 
        "stat": "Weapon3", 
        "price": 10,
        "image": "Weapon3",
        "slot": "weapon"
    },
    {
        "name": "Weapon4",
        "damageValue": "Weapon4",
        "statValue": "Weapon4", 
        "stat": "Weapon4", 
        "price": 10,
        "image": "Weapon4",
        "slot": "weapon"
    },
    {
        "name": "Weapon5",
        "damageValue": "Weapon5",
        "statValue": "Weapon5", 
        "stat": "Weapon5", 
        "price": 10,
        "image": "Weapon5",
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
        setItems(getRandom(3, allItems))
        setArmor(getRandom(3, allArmor))
        setWeapons(getRandom(3, allWeapons))
    }, [])

    return (
        <>
            <div>
                <h2>Weapons</h2>
                <div className="grid grid-cols-4 gap-4">
                    {weapons.map((weapon) => {
                        return (
                            <div key={weapon.name}>
                                <h2>{weapon.name}</h2>
                                <h2>{weapon.slot}</h2>
                                <h3>{weapon.price}</h3>
                                <button onClick={() => {purchaseItem(weapon.name, weapon.slot, weapon.price, "weapon")}}>Buy</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2>Armor</h2>
                <div className="grid grid-cols-4 gap-4">
                    {armor.map((armor) => {
                        return (
                            <div key={armor.name}>
                                <h2>{armor.name}</h2>
                                <h2>{armor.slot}</h2>
                                <h3>{armor.price}</h3>
                                <button onClick={() => {purchaseItem(armor.name, armor.slot, armor.price,"armor")}}>Buy</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2>Items</h2>
                <div className="grid grid-cols-4 gap-4">
                    {items.map((item) => {
                        return (
                            <div key={item.name}>
                                <h2>{item.name}</h2>
                                <h2>{item.slot}</h2>
                                <h3>{item.price}</h3>
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