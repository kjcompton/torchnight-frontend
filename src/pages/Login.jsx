import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.updateUser(email, password)
        props.updateUser("kevin2@email.com", "$2b$12$4CCuge3VdUki9Wpz1.DQ9OTiiimI5/Dzoz7/H8EWzkcv/sUQX6a2u")
    }

    useEffect(() => {

    }, [])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>Log In or Sign Up</h1>
                <label>Email</label>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit'value="Submit"/>
            </form>
            <h2>{props.loginMessage}</h2>
            <p>Dont have an account? <Link to={`/signup`}>Sign Up</Link></p>
        </main>
    )
}

export default Login