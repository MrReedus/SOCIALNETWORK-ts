import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from "./redux/state";



export const rerenderEntireThree = (state) => {
    ReactDOM.render(
        <App state={state} updatePostText={updatePostText} addPost={addPost} />,
        document.getElementById('root')
    );
};