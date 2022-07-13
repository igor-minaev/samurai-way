import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
}
const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        alert('samuraijs.com')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;