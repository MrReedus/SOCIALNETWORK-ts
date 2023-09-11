import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import {PostsType} from "../../../redux/state";


type PostsPropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updatePostText: (newText: string) => void
}
const MyPosts = (props: PostsPropsType) => {

    let newPostElement: any = React.createRef()
    let addPost = () => {
        props.addPost()
        props.updatePostText("")
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePostText(text)

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
