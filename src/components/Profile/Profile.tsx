import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnO06h7f7UVtq8EOdc-noNMcApwJotJ-12A&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                ava + descr
            </div>
        </div>
    )
}

export default Profile;