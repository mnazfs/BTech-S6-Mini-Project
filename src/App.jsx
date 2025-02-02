import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import SLogin from "./components/SLogin.jsx";
import DBLogin from "./components/DBLogin.jsx";
import StdReg from "./components/StdReg.jsx";
import StfReg from "./components/StfReg.jsx";
import StdDash from "./components/StdDash.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SLogin/:role" element={<SLogin />} />
                <Route path="/DBLogin/:role" element={<DBLogin />} />
                <Route path="/StdReg" element={<StdReg />} />
                <Route path="/StfReg" element={<StfReg />} />
                <Route path="/StdDash" element={<StdDash />} />
            </Routes>
        </Router>
    );
}

export default App;