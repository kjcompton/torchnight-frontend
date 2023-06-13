import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

function LoginSignUp(props) {

    return (
        <main>
            <Routes>
                # Chracters route when user logs in
                <Route path="/" element={<Login updateUser={props.updateUser} loginMessage={props.loginMessage}/>}/>

                # Sign Up
                <Route path="/signup" element={<SignUp/>}/>

            </Routes>
        </main>
    )
}

export default LoginSignUp