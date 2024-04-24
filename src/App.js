import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const  handleLogin = async (event) => {

        event.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
                return null;
            });

        console.log(response)

    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <div>
                        <h2>Login React</h2>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className={"Input-div"}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className={"Input-div"}>
                            <label htmlFor="password" >Password:</label>
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

export default App;
