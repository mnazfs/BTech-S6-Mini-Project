import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

function SLogin() {
    const { role } = useParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const validateLogin = () => {
        if (!username || !password) {
            setErrorMsg("Fields cannot be empty");
            return;
        }

        if (username === "admin" && password === "password123") {
            navigateToDash(role);
        } else {
            setErrorMsg("Invalid username or password");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            validateLogin();
        }
    };

    const navigateToDash = (role) => {
        if(role === "Student") {
            navigate(`/StdDash`);
        }
        else {
            navigate(`/StfDash`);
        }
    };

    const navigateToReg = (role) => {
        if(role === "Student") {
            navigate(`/StdReg`);
        }
        else {
            navigate(`/StfReg`)
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
                <button onClick={() => navigateToReg(role)}>Don't Have an Account?</button>
            </div>
        </div>
    );
}

export default SLogin;