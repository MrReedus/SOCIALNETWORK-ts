import React from 'react';
import './App.css';
import "./scss/app.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {RootStateType} from "./redux/state";


type StatePropsType = {
    state: RootStateType
    addPost:()=>void
    updatePostText:(newText: string)=>void
}



function App(props: StatePropsType) {


    return (
<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">

                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/profile" replace />} // Перенаправление на /profile с использованием Navigate
                    />
                    <Route path="/profile" element={<Profile ProfilePageData={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/*" element={<div><img src="https://otvet.imgsmail.ru/download/277118656_07ba58db02f133d9fa7242ed0dd7ab49_800.jpg" alt=""/></div>}/>
                </Routes>

            </div>
        </div>
</BrowserRouter>
    );
}

export default App;
