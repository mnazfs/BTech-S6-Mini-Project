import React, { useState } from "react";
import "../index.css";

function StdReg() {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        admNo: "",
        branch: "",
        yrStd: "",
        uniReg: "",
        username: "",
        password: "",
        password2: "",
        phone: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateReg = () => {
        const { fName, lName, admNo, branch, yrStd, uniReg, username, password, password2, phone } = formData;

        if (
            !fName.trim() || !lName.trim() || !admNo.trim() || !branch.trim() || 
            !yrStd.trim() || !uniReg.trim() || !username.trim() || 
            !password.trim() || !password2.trim() || !phone.trim()
        ) {
            setErrorMsg("Fields cannot be empty");
        } else if (password !== password2) {
            setErrorMsg("Passwords do not match");
        } else {
            alert("Application sent to Bus Secretary");
            setErrorMsg("");
            setFormData({
                fName: "",
                lName: "",
                admNo: "",
                branch: "",
                yrStd: "",
                uniReg: "",
                username: "",
                password: "",
                password2: "",
                phone: "",
            });
            return;
        }

        setTimeout(() => {
            setErrorMsg("");
        }, 5000);
    };

    return (
        <div className="background">
            <h1 className="title">Student Registration</h1>
            <div className="grid-container fade-in">
                <h2>Enter Your Details</h2>

                <input type="text" name="fName" placeholder="First Name" className="input-field" value={formData.fName} onChange={handleChange} />
                <input type="text" name="lName" placeholder="Last Name" className="input-field" value={formData.lName} onChange={handleChange} />
                <input type="text" name="admNo" placeholder="Admission No" className="input-field" value={formData.admNo} onChange={handleChange} />
                <select name="branch" value={formData.branch} onChange={handleChange} className="input-field">
                    <option value="">Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="Mech">Mech</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="IT">IT</option>
                </select>
                <select name="yrStd" value={formData.yrStd} onChange={handleChange} className="input-field">
                    <option value="">Year Of Study</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="text" name="uniReg" placeholder="University Reg No" className="input-field" value={formData.uniReg} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone No" className="input-field" value={formData.phone} onChange={handleChange} />
                <input type="text" name="username" placeholder="Enter Username" className="input-field" value={formData.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Enter Password" className="input-field" value={formData.password} onChange={handleChange} />
                <input type="password" name="password2" placeholder="Re-Enter Password" className="input-field" value={formData.password2} onChange={handleChange} />

                {errorMsg && <p className="error-text">{errorMsg}</p>}
                <button onClick={validateReg}>Apply</button>
            </div>
        </div>
    );
}

export default StdReg;