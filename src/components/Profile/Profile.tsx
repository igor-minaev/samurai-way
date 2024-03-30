import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type PostType = {
    id?: string
    message: string
    likesCount: number
}

export const Profile = () => {
    const posts: PostType[] = [
        {id: '1', message: 'Hi, how are you', likesCount: 10},
        {id: '2', message: 'It\'s my first post', likesCount: 4}
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    );
};

