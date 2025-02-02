import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

function DBLogin() {
    const { role } = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const validateLogin = () => {
        if (!username || !password) {
            setErrorMsg("Fields cannot be empty");
            return;
        }

        if (username === "admin" && password === "password123") {
            alert("Login Successful");
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid username or password");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            validateLogin();
        }
    };

    return (
        <div className="background">
            <h1 className="title">{role} Login</h1>
            <div className="container fade-in">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {errorMsg && <p className="error-text">{errorMsg}</p>}
                <button onClick={validateLogin}>Login</button>
            </div>
        </div>
    );
}

export default DBLogin;