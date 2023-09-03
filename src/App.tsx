import React from 'react';
import './App.css';
import "./scss/app.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
    return (
<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">

                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/*" element={<div><img src="https://otvet.imgsmail.ru/download/277118656_07ba58db02f133d9fa7242ed0dd7ab49_800.jpg" alt=""/></div>}/>
                </Routes>

            </div>
        </div>
</BrowserRouter>
    );
}

export default App;
