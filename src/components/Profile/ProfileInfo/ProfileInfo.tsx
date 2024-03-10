import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JsSpz98fRY-Gi2gSyV5cvM9Q1cBV5hcNKQ&usqp=CAU"
                    alt="image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    );
};

