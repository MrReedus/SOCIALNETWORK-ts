import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/state";
import {Action} from "redux";


type PostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: Action) => void;

}



const MyPosts = (props: PostsPropsType) => {

    let newPostElement: any = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {

        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action as Action)
        console.log(action.newText)
    }

    let posts = props.posts.map(post => <Post key={post.id} text={post.message} likeCount={post.likeCount}></Post>)

    return (
        <div className={styles.posts}>
            <div className={styles.container}>
        <textarea
            ref={newPostElement}
            className={styles.textarea}
            onChange={onPostChange}
            value={props.newPostText}
        />
                <button className="button"
                        onClick={addPost}>
                    add post
                </button>
                <button
                    className="button"

                >
                    remove
                </button>
            </div>

            <h2>Posts</h2>
            {posts}

        </div>
    );
};

export default MyPosts;
