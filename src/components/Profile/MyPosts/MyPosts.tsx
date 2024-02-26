import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <Post message="Hi, how are you" likesCount={10}/>
                <Post message="It's my first post" likesCount={4}/>
            </div>
        </div>


    );
};

