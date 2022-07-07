import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../index";


const Post: React.FC<PostType> = ({message,likesCount}) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU"
                alt=""/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>

        </div>

    )
}

export default Post;