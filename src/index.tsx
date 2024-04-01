import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export type PostType = {
    id?: string
    message: string
    likesCount: number
}
export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id?: string
    message: string
}

const posts: PostType[] = [
    {id: '1', message: 'Hi, how are you', likesCount: 10},
    {id: '2', message: 'It\'s my first post', likesCount: 4}
]
const dialogs: DialogItemType[] = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Viktor'},
    {id: '6', name: 'Valera'}
]
const messages: MessageType[] = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hello, friend'},
    {id: '3', message: 'Yo'}
]

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);