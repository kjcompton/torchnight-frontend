import { useState } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import './App.css'



function App() {
  const [userLogged, setUserLogged] = useState()
  const [loginMessage, setloginMessage] = useState('')

  const logIn = async (email, password) => {
    const URL = `http://127.0.0.1:8000/api/v1/users/login?email=${email}&password=${password}`
    const response = await fetch(URL)
    const data = await response.json()
    const foundUser = data
    console.log(foundUser)
    setloginMessage(data.message)
    setUserLogged(foundUser.data)
    console.log(foundUser.data)
  }


  



  if (userLogged) {
    return <Main userLogged={userLogged}/>
  } else {
    return <Login updateUser={logIn}/>
  }
}

export default App

// test