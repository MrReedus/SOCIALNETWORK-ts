import React from 'react';
import './App.css';
import "./scss/app.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Profile/>
            </div>
        </div>

    );
}

export default App;
