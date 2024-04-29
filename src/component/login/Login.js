import React, {useState, useEffect} from "react";
import logo from '../../logo.svg';
import '../../index.css'
import './Login.css'

function Login() {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const  handleLogin = async (event) => {

        event.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName: userName, password: password}),
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
                return null;
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
                        <button type="submit">Login</button>
                    </form>
                </div>
            </header>
        </div>
    );

}

export default Login;
