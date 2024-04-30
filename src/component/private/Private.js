import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import '../../index.css'
import './Private.css'


function Private() {

    const [responseObj, setResponseObj] = useState({});
    const navigate = useNavigate();

    const validateAccess = async (event) => {

        event.preventDefault();

        await fetch('http://localhost:8080/private-api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(async response => {

                if (response.status === 200) {
                    setResponseObj({message: 'Success to access private API!', error: false});
                } else {
                    setResponseObj({message: 'Error to access private API!', error: true});
                }

            })
            .catch((error) => {
                setResponseObj({message: 'Error to access private API!', error: true});
            });

    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={validateAccess}>Validate access private API</button>
                {
                    responseObj && responseObj.error
                        ? <div className={"Message-response-error"}><p>{responseObj.message}</p></div>
                        : responseObj.message ?
                            <div className={"Message-response-success"}><p>{responseObj.message}</p></div>
                            : null
                }
            </header>
        </div>
    );

}

export default Private;
