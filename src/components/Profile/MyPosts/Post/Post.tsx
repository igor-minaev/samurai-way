import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXq2T2dbR-rqfqZmkYK48GLd3c-GDSTfCr6g&usqp=CAU" alt="avatar"/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>
};

