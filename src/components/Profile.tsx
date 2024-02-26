import React from 'react';

import './Profile.css'

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
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div>
                <div className="item">post 1</div>
                <div className="item">post 2</div>
                <div className="item">post 3</div>
            </div>
        </div>

    );
};

