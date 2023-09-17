
import './index.css';
import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from "./redux/state";




export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App state={state} updatePostText={updatePostText} addPost={addPost} />,
        document.getElementById('root')
    );
};



rerenderEntireTree(state)
subscribe(rerenderEntireTree)
