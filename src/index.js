import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
        </Routes>
    </Router>

);

reportWebVitals();
