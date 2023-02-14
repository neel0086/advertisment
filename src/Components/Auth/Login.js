// import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../../firebase'
import './Login.css'
import googleIcon from '../../images/google.png'
import { Navigate, useNavigate } from 'react-router-dom'
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    uuid: user.uid,
                    photoUrl: user.photoURL
                }))
            }).then(() => {
                console.log("Hello")
                navigate("/")
            })
    }

    return (
        <div className="login">
            <div className="logo">
                <img src="https://avatars.dicebear.com/api/identicon/custom.svg" />
            </div>
            <div className="text-center mt-4 name">
                DropIt
            </div>
            <div className="login_container">
                {/* <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" />
            </div> */}
                {/* <button variant="contained" color="primary" onClick={signIn}>Login</button> */}
                <button variant="contained" color="primary" onClick={signIn}>
                    {/* <img src={googleIcon}/> */}
                    Login With Google
                </button>
            </div>
        </div>
    )
}

export default Login 