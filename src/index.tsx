import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
import {addPost} from "./redux/state";


/*addPost('SamuraiJS.COM')*/

ReactDOM.render(
    <App state={state} addPostCallback={addPost}/>,
    document.getElementById('root')
);