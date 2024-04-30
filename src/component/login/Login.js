import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../index.css'
import './Login.css'

function Login() {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [responseObj, setResponseObj] = useState({});

    const  handleLogin = async (event) => {

        event.preventDefault();

        await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName: userName, password: password}),
        })
        .then(async response => {

            if (response.status === 200) {
                setResponseObj({message: 'Loged in', error: false});
            } else {

                let res = await response.json();

                setResponseObj({message: 'Error creating user: '+ res.message, error: true});

            }

        })
        .catch((error) => {
            setResponseObj({message: 'Error creating user!', error: true});
        });

    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div className={"Logo-div"}>
                        <h2>Login React</h2>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className={"Input-div"}>
                            <label htmlFor="userName">Username:</label>
                            <input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className={"Input-div"}>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {
                            responseObj && responseObj.error
                                ? <div className={"Message-response-error"}><p>{responseObj.message}</p></div>
                                : responseObj.message ?
                                    <div className={"Message-response-success"}><p>{responseObj.message}</p></div>
                                    : null
                        }
                        <button type="submit">Login</button>
                    </form>
                </div>
            </header>
        </div>
    );

}

export default Login;
