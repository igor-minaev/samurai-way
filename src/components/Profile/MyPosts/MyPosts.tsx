import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (message: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements: JSX.Element[] = props.posts.map(p => <Post key={p.id} message={p.message}
                                                                    likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    );
};

