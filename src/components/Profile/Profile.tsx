import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JsSpz98fRY-Gi2gSyV5cvM9Q1cBV5hcNKQ&usqp=CAU"
                    alt="image"/>
            </div>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>

    );
};

