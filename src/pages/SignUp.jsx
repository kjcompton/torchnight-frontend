import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate()
    // const [userss, setUsers] = useState([])
    // const getPeople = async() => {
    //     
    //     setUsers((prevState) => {
    //       return data.data 
    //     })
    //     return data
    //   }

    const [form, setForm] = useState({ 
        gold: 100,
        email: '',
        username: '',
        password: '', 
    })


    const signUp = async (user) => {
        await fetch("https://sheltered-bastion-87659.herokuapp.com/api/v1/users/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        signUp(form).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleChanges = (e) => {
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    return (
        <main>
            <form className="text-left" onSubmit={handleSubmit}>
                <h1 className="logInSignUp">Sign Up</h1>
                <label>Email</label>
                <input className="mt-5" type='text' id='email' value={form.email} name="email" onChange={handleChanges}/>
                <label>Username</label>
                <input className="mt-5" type='text' id='username' value={form.username} name="username"  onChange={handleChanges}/>
                <label>Password</label>
                <input className="mt-5" type='password' id='password' value={form.password} name="password" onChange={handleChanges}/>
                <input className="mt-5" type='submit'value="Submit"/>
            </form>
            <h2>{props.loginMessage}</h2>
        </main>
    )
}

export default Login