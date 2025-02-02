import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; 

function Home() {
    const navigate = useNavigate();

    const navigateToLogin = (role) => {
        if (role === "Student" || role === "Staff") {
            navigate(`/SLogin/${role}`);
        }
        else {
            navigate(`/DBLogin/${role}`);
        }
    };

    return (
        <div className="background">
            <h1 className="title">College Bus Management System</h1>
            <div className="container">
                <h2>Select Your Role</h2>
                <button onClick={() => navigateToLogin("Student")}>Student</button>
                <button onClick={() => navigateToLogin("Staff")}>Staff</button>
                <button onClick={() => navigateToLogin("Driver or Cleaner")}>Driver/Cleaner</button>
                <button onClick={() => navigateToLogin("Bus Secretary")}>Bus Secretary</button>
            </div>
        </div>
    );
}

export default Home;