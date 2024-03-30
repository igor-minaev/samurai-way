import React from 'react';
import s from './Post.module.css'
import {PostType} from '../../Profile';


export const Post = (props: PostType) => {
    return <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXq2T2dbR-rqfqZmkYK48GLd3c-GDSTfCr6g&usqp=CAU"
             alt="avatar"/>
        {props.message}
        <div>
            <span>{props.likesCount} like</span>
        </div>
    </div>
};

