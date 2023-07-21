import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                content
            </div>
        </div>

    );
}

export default App;
