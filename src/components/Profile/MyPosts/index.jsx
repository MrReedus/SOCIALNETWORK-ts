import React from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post";


const MyPosts = ({}) => {

   let postsData = [
       {id: 1, message: 'Hello guys, how are you?', likeCount: 1},
       {id: 1, message: 'Its my first post', likeCount: 3},
       {id: 1, message: 'Hello world', likeCount: 12},
   ]

    let posts = postsData.map(post => <Post key={post.id} text={post.message} likeCount={post.likeCount}></Post>)

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
            {posts}

        </div>
    );
};

export default MyPosts;
