import { useState } from 'react'
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp'
import './App.css'



function App() {
  const [userLogged, setUserLogged] = useState()
  const [loginMessage, setloginMessage] = useState('')

  const logIn = async (email, password) => {
    const URL = `https://sheltered-bastion-87659.herokuapp.com/api/v1/users/login?email=${email}&password=${password}`
    const response = await fetch(URL)
    const data = await response.json()
    const foundUser = data
    console.log(foundUser)
    setloginMessage(data.message)
    setUserLogged(foundUser.data)
    console.log(foundUser.data)
  }


  



  if (typeof userLogged === 'object') {
    return (
      <>
        <Header userLogged={userLogged} />
        <Main userLogged={userLogged} setUserLogged={setUserLogged}/>
        <Footer />
      </>
    )
  } else {
    return <LoginSignUp updateUser={logIn} loginMessage={loginMessage}/>
  }
}

export default App

// test