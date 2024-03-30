import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../Profile';


type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements: JSX.Element[] = props.posts.map(p => <Post key={p.id} message={p.message}
                                                                    likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
            </div>
        </div>


    );
};

