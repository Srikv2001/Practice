import React, { useState } from "react";
import axios from "axios";
import './login.css';
import Checkbox from '@mui/material/Checkbox';
import Weather from "./weather";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dbdata, setDbData] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const url = 'http://127.0.0.1:8000/myapp/register/';

    const fetchdata = async () => {
        try {
            const response = await axios.get(url);
            setDbData(response.data);
        } catch (error) {
            console.log("Error Occurred: ", error);
        }
    };

    const verify = () => {
        const user = dbdata.find(user => user.Username === username && user.Password === password);
        console.log(user);
        if (user) {
            setLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchdata();
        verify();
    };

    return (
        <>
            {loggedIn ? (
                <Weather />
            ) : (
                <center>
                    <div className="login">
                        <h1>SIGN IN</h1>
                        <form className="formm" onSubmit={handleSubmit}>
                            <label>USERNAME :</label><br />
                            <input className="uname" onChange={(event) => setUsername(event.target.value)} placeholder="Enter the username or e-mail:" required />

                            <label>PASSWORD :</label><br />
                            <input className="password" onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter the password:" required />
                            <div className="check">
                                <Checkbox /><p className="space">Remember me</p><p>Forget Password.?</p>
                            </div>
                            <button type="submit">Sign in</button>
                        </form>
                    </div>
                </center>
            )}
        </>
    );
}

export default Login;
