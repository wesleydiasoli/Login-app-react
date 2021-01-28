import React, { useState } from 'react'
import './login.css'


function Login() {
    const [email, sentEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    return (
        <div className="Login">
            <div className="Login-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVe7FD4zVibX0Z9nW-tDlGDMWaHADQyPjKA&usqp=CAU.jpg"
                    alt="Login app"/></div>
           

            <div className="Login-right"></div>
            <h1>Acessar App</h1>

            <div className="Login-LoginInputEmail"></div>

            <input
                type="text"
                placeholder="digite um email">
               
            </input>

            <div className="Login-LoginInputPassword">

                <input
                    type="text"
                    placeholder="digite sua senha">
                </input>

                </div>


                    <button type="submit">
                        Entrar
                </button>

                    <h4>Não tenho conta</h4>

                    <button type="Submit">
                        Cadastrar
                </button>               
        </div>
    )
}

export default Login