import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnO06h7f7UVtq8EOdc-noNMcApwJotJ-12A&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;