import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import {PostsType} from "../../../redux/state";



type PostsPropsType = {
    posts: PostsType[]
}
const MyPosts = (props: PostsPropsType) => {


    let posts = props.posts.map(post => <Post key={post.id} text={post.message} likeCount={post.likeCount}></Post>)

    return (
        <div className={styles.posts}>
            <div className={styles.container}>
        <textarea
            // ref={newPostElement}
            className={styles.textarea}

            // value={newPostText}
        />
                <button className="button">
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
