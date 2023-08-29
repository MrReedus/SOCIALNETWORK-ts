import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";


const MyPosts = ({}) => {

    return (
        <div className={styles.posts}>
            <div className={styles.container}>
        <textarea
            // ref={newPostElement}
            className={styles.textarea}
            cols="20"
            rows="5"
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
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;
