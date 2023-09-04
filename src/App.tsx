import React from 'react';
import './App.css';
import "./scss/app.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export type dialogsType = {
    name: string,
    id:number,
    avatar: string
}
export type messagesType = {
    id:number,
    message: string,
}

function App() {



    let dialogsData = [
        {name: "Vlad", id: 1, avatar: ''},
        {name: "Alice", id: 2, avatar: ''},
        {name: "Dmitry", id: 3, avatar: ''},
        {name: "Boris", id: 4, avatar: ''},
        {name: "Igor", id: 5, avatar: ''},
        {name: "Diana", id: 6, avatar: ''},

    ]
    let messagesData = [
        {id: 1, message: 'Hello bro'},
        {id: 2, message: 'love you'},
        { id: 3, message: ':C'},
        {id: 4, message: '...'},
        {id: 5, message: 'what are you..?'},
        {id: 6, message: ':DD'},
    ]


    return (
<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">

                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={dialogsData} messages={messagesData}/>}/>
                    <Route path="/*" element={<div><img src="https://otvet.imgsmail.ru/download/277118656_07ba58db02f133d9fa7242ed0dd7ab49_800.jpg" alt=""/></div>}/>
                </Routes>

            </div>
        </div>
</BrowserRouter>
    );
}

export default App;
