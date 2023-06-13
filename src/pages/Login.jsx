import { useState,useEffect } from 'react'
import {Link} from "react-router-dom"

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.updateUser(email, password)
        props.updateUser("kevin@email.com", "$2b$12$hrp1vh9ncFEWbM2nsZ0erOXZl5mQCP28e348.0bB9p6YmWNCH54Xm")
    }

    useEffect(() => {

    }, [])

    return (
        <main>
            <form className="text-left" onSubmit={handleSubmit}>
                <h1 className="logInSignUp">Log In or Sign Up</h1>
                <label>Email</label>
                <input className="mt-5" type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input className="mt-5" type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="mt-5" type='submit'value="Submit"/>
            </form>
            <h2>{props.loginMessage}</h2>
            <p className="mt-5">Dont have an account? <Link to={`/signup`}>Sign Up</Link></p>
        </main>
    )
}

export default Login