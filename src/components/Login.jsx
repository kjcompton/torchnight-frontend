import { useState } from 'react'

function Login(props) {
    // const [userss, setUsers] = useState([])
    // const getPeople = async() => {
    //     
    //     setUsers((prevState) => {
    //       return data.data 
    //     })
    //     return data
    //   }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        props.updateUser(email, password)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>Log In or Sign Up</h1>
                <label>Email</label>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type='submit'value="Submit"/>
            </form>
            <h2>{props.loginMessage}</h2>
        </main>
    )
}

export default Login